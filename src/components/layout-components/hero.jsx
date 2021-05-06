import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-monokai";

export default function Hero() {

  async function uploadedYAML(e) {
    if(!e.type === "application/x-yaml") alert("Invalid file type !")
    const data = await e.text()
  }

  return (
    <section
      id="hero"
      className="flex flex-col h-screen justify-center items-center bg-gray-800"
    >
      <p className="text-6xl text-white">CRD VIEWER</p>
      <div className="flex mt-12 tracking-widest">
        <input
          placeholder="com_alertmanagerconfigs.yaml"
          className="p-3 rounded w-96 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="ml-2 px-3 border-4 border-blue-500 border-opacity-25 text-center bg-white rounded h-12 font-bold">
          Submit
        </button>
      </div>
      <hr className="my-6 w-1/3 text-white" />
      <div
        onClick={() => document.getElementById("file_input").click()}
        className="w-96 h-28 text-white text-center justify-center items-center text-xl cursor-pointer rounded border-dashed border-2 border-white flex"
      >
        <p className="tracking-wider uppercase">Upload File</p>
        <input
          onChange={(e) => uploadedYAML(e.target.files[0])}
          accept=".yaml"
          type="file"
          id="file_input"
          className="hidden"
        />
      </div>
      <hr className="my-6 w-1/3 text-white" />

      <AceEditor
        style={{ width: "90%" }}
        mode="yaml"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
      />
    </section>
  );
}
