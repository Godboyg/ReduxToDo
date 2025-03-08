import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./userSlice";
import { setBgColor } from "./themeSlice";
import { addToDo } from "./todoSlice";
import "./App.css";
import 'remixicon/fonts/remixicon.css';
import Todos from "./Todos";

const Auth = () => {

    document.title = "TO-DO"

    const [ isvisible , setIsVisible ] = useState(false);
    const [ taskvisible , setTaskVisible ] = useState(false);
    const [ alltaskvisible , setAllTaskVisible ] = useState(false);
    const [ val , setVal ] = useState();

    const bgColor = useSelector((state) => state.theme.bgColor);

  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const handleLogin = () => {
    const dummyUser = { name: "John Doe", email: "john@example.com" };
    dispatch(login(dummyUser));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleBgTheme = (color) => {
    dispatch(setBgColor(color));
  }
  
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addToDo(val));
    setVal("");
  }

  return (
    <>
    <div className="h-screen w-full" style={{ backgroundColor: bgColor }}>
    <div className="shadow-md">
      {isAuthenticated ? (
        <>
         <div className={`h-screen w-[50vw] z-70 p-[4vw] bg-black absolute right-0 text-white ${isvisible ? "block" : "hidden"}`}>
            <div className="text-white flex rounded-full items-center justify-center h-[15vw] w-[15vw] text-[8vw] lg:h-[5vw] lg:w-[5vw] lg:text-[3vw] lg:ml-[80%] ml-[70%] border-1 border-cyan-600">
              <i class="ri-close-fill" onClick={e => setIsVisible(!isvisible)}></i>
            </div>
            <div className="h-[25vw] w-[25vw] lg:w-[10vw] lg:h-[10vw] rounded-full overflow-hidden">
                <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/30856712/pexels-photo-30856712/free-photo-of-stylish-young-adult-with-curly-hair-and-rings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
            <div className="text-white text-[8vw] lg:text-[3vw] flex flex-col items-start">
              <i class="ri-moon-line" onClick={() => handleBgTheme("black")}></i>
              <i class="ri-sun-line" onClick={() => handleBgTheme("white")}></i>
            </div>
            <div className="h-[7vh] rounded-2xl mt-[2vw] w-[25vw] lg:rounded-xl lg:w-[10vw] lg:mt-[1vw] bg-red-700">
              <button className="h-full w-full text-[5vw] font-bold lg:text-[2vw] lg:font-bold" onClick={handleLogout}>Logout</button>
            </div>
        </div>
        <div className="px-[5vw] py-[5vw] h-[10vh] lg:h-[5vh] lg:py-[3vw] border border-black-400">
            <div className="flex items-center justify-between">
                <p className="text-4xl text-green-800 font-bold tracking-wide">DoIt</p>
                <i class="ri-align-justify text-4xl transition-all duration-300" onClick={() => setIsVisible(!isvisible)}></i>
            </div>
        </div>
        <div className="px-[3vw] py-[4vw] h-[90vh] w-full shadow-lg">
          <div className="flex items-center gap-1 border-b border-green-900">
            <p className="text-xl text-green-700">To Do</p>
            <i class="ri-arrow-down-s-fill text-3xl" onClick={e => setAllTaskVisible(!alltaskvisible)}></i>
          </div>
          <Todos alltaskvisible={alltaskvisible} />
          <div className="h-[30vh] lg:h-[40vh] w-full bg-green-100 z-30 relative">
            <p className="text-[4vw] absolute left-[5%] top-[20%] lg:text-[3vw]">Add A Task</p>
            <div className="absolute left-[5%] bottom-[10%] flex items-center gap-5">
              <i class="ri-notification-3-line text-[5vw] lg:text-[2vw]"></i>
              <i class="ri-calendar-line text-[5vw] lg:text-[2vw]"></i>
            </div>
            <div className="h-[5vh] w-[28vw] bg-green-300 rounded-xl absolute right-4 lg:w-[20vw] bottom-5">
              <button className="h-full w-full text-xl text-green-700 font-bold z-50" onClick={e => setTaskVisible(true)}>ADD TASK</button>
            </div>
          </div>
          <div className={`flex items-center justify-center absolute top-55 shadow-lg left-10 transition-all duration-300 ease-in-out transform ${taskvisible ? "opacity-100 scale-100 z-50" : "opacity-0 z-20 scale-90"}`}>
            <div className="h-[80vh] w-[90vw] p-[5vw] bg-black text-white">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">ADD TASK</p>
                <i class="ri-close-line text-4xl" onClick={e => setTaskVisible(false)}></i>
              </div>
              <div className="text-black mt-[3vw]">
                <input type="text" placeholder="Enter a Todo........." className="text-white h-[5vh] text-xl px-[3vw] py-[2vw] w-full border-2 outline-none rounded border-cyan-600" value={val} onChange={e => setVal(e.target.value)}/>
                <div className="h-[7vh] mt-[2vw] w-[20vw] lg:w-[10vw] lg:mt-[vw] rounded-2xl bg-green-400">
                  <button className="h-full w-full text-[4vw] lg:text-xl" onClick={handleAdd}>Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : (
        <div className="h-screen w-full bg-black text-white flex items-center justify-center flex-col">
          <h2 className="text-xl font-bold">Please Log In</h2>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default Auth;
