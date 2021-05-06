import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-nord_dark";

export default function Hero() {
  const [code, setCode] = useState();
  const [link, setLink] = useState(null)

  function fetchedYAML(e) {
    e.preventDefault()
    if(link) fetch(link).then(async res => setCode(await res.text()))
    return null
  }

  async function uploadedYAML(e) {
    if (!e.type === "application/x-yaml") alert("Invalid file type !");
    const data = await e.text();
    setCode(data);
  }

  return (
    <section
      id="hero"
      className="flex flex-col h-screen justify-center items-center bg-gray-800"
    >
      <p className="text-6xl text-white mt-40">CRD VIEWER</p>
      <div className="flex mt-12 tracking-widest">
        <input
          onChange={e => setLink(e.target.value)}
          placeholder="com_alertmanagerconfigs.yaml"
          className="p-3 rounded w-96 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button onClick={fetchedYAML} className="ml-2 px-4 text-center bg-white hover:bg-gray-200 focus:outline-none rounded h-12 font-bold">
          Submit
        </button>
      </div>
      <hr className="my-6 w-1/3 text-white" />
      <div
        onClick={() => document.getElementById("file_input").click()}
        className="w-96 h-28 text-white text-center mb-6 justify-center items-center text-xl cursor-pointer rounded border-dashed border-2 border-white flex"
      >
        <p className="tracking-wider text-sm uppercase">Upload File</p>
        <input
          onChange={(e) => uploadedYAML(e.target.files[0])}
          accept=".yaml"
          type="file"
          id="file_input"
          className="hidden"
        />
      </div>

      <AceEditor
        style={{ width: "100%", height: "100%" }}
        mode="yaml"
        value={code}
        theme="nord_dark"
        name="yaml-editor"
      />
    </section>
  );
}
