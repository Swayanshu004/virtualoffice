import { useCallback, useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Editor from "@monaco-editor/react";

function CodeCanvas() {
    const [lightMode, setLightMode] = useState(false);
    const [language, setLanguage] = useState('javascript')
    const [code, setCode] = useState('// Start coding ...');
    // console.log(code);
    

  return (
    <div className={`${lightMode ? "bg-blue-100" : "bg-neutral-900"} min-h-screen rounded-md`}>
        <div className="flex items-center justify-between">
            <div className="p-2 m-1">
                <select 
                name="lang" 
                id="lang"
                onChange={(e)=>setLanguage(e.target.value)}
                className={`${lightMode ? "bg-blue-900" : "bg-neutral-700"} py-1 px-2 text-white cursor-pointer rounded-md`}>
                    <option value="javascript">javascript</option>
                    <option value="C">C</option>
                    <option value="CPP">C++</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                </select>
            </div>
            <button className="text-2xl p-2 m-1 rounded-lg bg-white hover:cursor-pointer" onClick={() => setLightMode(!lightMode)}>{lightMode ? <MdOutlineLightMode /> : <MdDarkMode />}</button>
        </div>
        <div className="">
            <Editor
                height="100vh"
                language={language}
                defaultValue={code}
                theme={lightMode ? "light" : "vs-dark"}
                value={code}
                onChange={(value) => {
                  setCode(value || "");
                }}
            />
        </div>
    </div>
  )
}

export default CodeCanvas