import React, { useState } from "react";
import languages from "./languages";

function MyLanguages() {
  // const selectedArr
  const [Arr, setArr] = useState(languages);
  const [Task, setTask] = useState("");

  const [SelectedArr, setSelectedArr] = useState([]);
  // const [filteredArr, setfilteredArr] = useState([])




  const SelectCard = (index) => {
    const selectedElement = Arr[index];
    setSelectedArr((prevArr) => [...prevArr, selectedElement]);
    console.log(Arr);
    console.log(SelectedArr);

    const newArray = [...Arr];
    newArray.splice(index, 1);
    setArr(newArray);
    // console.log(JSON.stringify(arr))
  };

  const AddCard = (Task) => {
    // const selectedElement = SelectedArr[index];
    setArr((prevArr) => [...prevArr, Task]);
    const newArray = [...SelectedArr];
    // newArray.splice(index, 1);
    setSelectedArr(newArray);
  };

  const RevertCard = (index) => {
    const selectedElement = SelectedArr[index];
    setArr((prevArr) => [...prevArr, selectedElement]);
    const newArray = [...SelectedArr];
    newArray.splice(index, 1);
    setSelectedArr(newArray);
  };

  const RemoveCard = (index) => {
    const selectedElement = SelectedArr[index];
    // setArr(prevArr => [...prevArr, selectedElement]);
    const newArray = [...SelectedArr];
    newArray.splice(index, 1);
    setSelectedArr(newArray);
  };

  const save =() => {
    localStorage.setItem('Arr', JSON.stringify(Arr));
  }



  const img =
    "data:image/jpeg;base64,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";

  return (
    <div className=" min-h-screen">
      <div className="text-3xl font-bold ">Select Languages You Know</div>

      <div className="h-20  flex gap-10 justify-center items-center  ">
        <input
          className="border-2 h-14 rounded-lg p-3 text-xl "
          type="text"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
        />

        <div
          className="px-4 py-2 text-xl font-bold size-fit rounded-lg bg-green-400  "
          onClick={() => AddCard(Task)}
        >
          ADD
        </div>
      </div>

      <div className="size-full  flex justify-center items-center gap-10 ">
        <div className="w-1/3 h-2/3 p-10 min-h-[75vh] bg-sky-50 shadow-lg rounded-lg flex  gap-3 flex-wrap ">
          {Arr.map((obj, index) => {
            return (
              <div
                key={index}
                onClick={() => SelectCard(index)}
                className="size-fit p-3 bg-slate-200 rounded-lg shadow-lg shadow-blue-200 "
              >
                {/* {
                                        obj.icon &&
                                        <img src={obj.icon} alt="" className='h-[100px] rounded-lg ' />
                                    } */}
                <img
                  src={obj.icon || img}
                  alt=""
                  className="h-[100px] rounded-lg "
                />
                {obj.name || obj}
              </div>
            );
          })}
        </div>

        <div className="w-1/3 h-2/3 p-5 min-h-[75vh]  bg-sky-50 shadow-lg rounded-lg flex gap-3 flex-wrap ">
          {/* {SelectedArr[0].name } */}
          {SelectedArr.map((item, index) => {
            return (
              <div
                key={index}
                className="p-3  size-fit relative bg-slate-200 rounded-lg shadow-lg shadow-blue-200 "
              >
                <img
                  src={item.icon || img }
                  alt=""
                  className="h-[100px] rounded-lg m-auto"
                />
                <div className="w-fit text-xl m-auto mt-3 px-4 flex gap-4 bg-slate-100 rounded-lg">
                  {item.name || item }
                  <div
                    className="cursor-pointer "
                    onClick={() => RemoveCard(index)}
                  >
                    <i
                      class="fa-solid fa-trash"
                      style={{ color: "#f25236" }}
                    ></i>
                  </div>
                </div>

                <div className="p-2 ">
                  <div className="text-xl text-red-400 rounded-full "></div>
                </div>

                <div
                  className="p-2  absolute top-[-25px] right-[-20px] "
                  onClick={() => RevertCard(index)}
                >
                  <div className="text-3xl text-red-400 rounded-full ">
                    <i class="fa-solid fa-circle-xmark  "></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyLanguages;
