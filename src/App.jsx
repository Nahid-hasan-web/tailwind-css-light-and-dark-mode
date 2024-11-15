import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  // ========== state
  const [toggleValue, setToggleValue] = useState(false);
  // ========== saving the mode when user  visitor
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light";
    localStorage.setItem("mode", savedMode);
    document
      .querySelector("html")
      .classList.toggle("dark", savedMode === "dark");
  }, []);
  // ========== changing the mode on toggle
  const handelMode = () => {
    if (localStorage.getItem("mode") == "light") {
      localStorage.setItem("mode", "dark");
      document.querySelector("html").classList.add("dark");
      setToggleValue(!toggleValue);
    } else {
      localStorage.setItem("mode", "light");
      document.querySelector("html").classList.remove("dark");
      setToggleValue(!toggleValue);
    }
  };

  return (
    <>
      <div className="p-5 w-[500px] h-[200px] dark:bg-black rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
        <h2 className="text-xl font-bold text-black dark:text-white ">
          Lorem ipsum dolor sit.
        </h2>
        <p className="text-lg content-normal dark:text-white text-black my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
          necessitatibus.
        </p>
        {localStorage.getItem("mode") == "light" ? (
          <button
            className="py-1 px-3 bg-black text-xl text-white rounded-sm"
            onClick={handelMode}
          >
            Dark
          </button>
        ) : (
          <button
            className="py-1 px-3 bg-purple-500 text-white rounded-sm text-xl"
            onClick={handelMode}
          >
            Light
          </button>
        )}
      </div>
    </>
  );
};

export default App;
