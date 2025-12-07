import React from "react";
import Header from "../Others/Header";

const EmployeeDashboard = () => {
  const employeeprogress = [
    {
      id: "employee1progrss",
      task: "New task",
      taskcount: "0",
    },
    {
      id: "employee1progrss",
      task: "Completed",
      taskcount: "3",
    },
    {
      id: "employee1progrss",
      task: "Accepted",
      taskcount: "0",
    },
    {
      id: "employee1progrss",
      task: "Failed",
      taskcount: "1",
    },
  ];

  // employee task

  const Employeetask = [
    {
      id: "employee1progrss",
      task: "New task",
      Tasktittle: "Make a youtube video",
      Taskdesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus est vero, repellendus molestiae veniam corporis aspernatur hic laboriosam fugit perferendis odio dolores cumque suscipit deserunt natus optio eius temporibus quos maiores repellat sit voluptate officia ad! Laborum, hic. Asperiores, sequi corrupti? Cumque, adipisci veritatis consectetur maxime assumenda omnis. Eos?",
    },
    {
      id: "employee1progrss",
      task: "Completed",
      Tasktittle: "Make a youtube video",
      Taskdesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus est vero, repellendus molestiae veniam corporis aspernatur hic laboriosam fugit perferendis odio dolores cumque suscipit deserunt natus optio eius temporibus quos maiores repellat sit voluptate officia ad! Laborum, hic. Asperiores, sequi corrupti? Cumque, adipisci veritatis consectetur maxime assumenda omnis. Eos?",
    },
    {
      id: "employee1progrss",
      task: "Accepted",
      Tasktittle: "Make a youtube video",
      Taskdesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus est vero, repellendus molestiae veniam corporis aspernatur hic laboriosam fugit perferendis odio dolores cumque suscipit deserunt natus optio eius temporibus quos maiores repellat sit voluptate officia ad! Laborum, hic. Asperiores, sequi corrupti? Cumque, adipisci veritatis consectetur maxime assumenda omnis. Eos?",
    },
    {
      id: "employee1progrss",
      task: "Failed",
      Tasktittle: "Make a youtube video",
      Taskdesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus est vero, repellendus molestiae veniam corporis aspernatur hic laboriosam fugit perferendis odio dolores cumque suscipit deserunt natus optio eius temporibus quos maiores repellat sit voluptate officia ad! Laborum, hic. Asperiores, sequi corrupti? Cumque, adipisci veritatis consectetur maxime assumenda omnis. Eos?",
    },
    {
      id: "employee1progrss",
      task: "Failed",
      Tasktittle: "Make a youtube video",
      Taskdesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus est vero, repellendus molestiae veniam corporis aspernatur hic laboriosam fugit perferendis odio dolores cumque suscipit deserunt natus optio eius temporibus quos maiores repellat sit voluptate officia ad! Laborum, hic. Asperiores, sequi corrupti? Cumque, adipisci veritatis consectetur maxime assumenda omnis. Eos?",
    },
    {
      id: "employee1progrss",
      task: "Failed",
      Tasktittle: "Make a youtube video",
      Taskdesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus est vero, repellendus molestiae veniam corporis aspernatur hic laboriosam fugit perferendis odio dolores cumque suscipit deserunt natus optio eius temporibus quos maiores repellat sit voluptate officia ad! Laborum, hic. Asperiores, sequi corrupti? Cumque, adipisci veritatis consectetur maxime assumenda omnis. Eos?",

    },
  ];
  return (
    <div className="h-screen w-full  px-5 ">
      <div className="h-screen w-full   py-5 ">
     <Header/>
        <section className="h-full w-full mt-7">
          {/* cards sec */}
          <div className="w-full grid grid-cols-2 gap-5 px-25">
            {employeeprogress.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="  p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 cursor-pointer"
                >
                  <h2 className="Actay text-xl font-semibold text-gray-800">
                    {elem.task}
                  </h2>

                  <p className="Actay text-4xl  mt-4 text-black">
                    {elem.taskcount}
                  </p>

                  <p className="Actay text-gray-500 mt-1 text-sm">Tasks</p>
                </div>
              );
            })}
          </div>

          {/* swiper Crd sec */}
          <div className="py-3 w-full mt-9 overflow-x-auto px-4 scroll-smooth">
  <div className="flex space-x-6 whitespace-nowrap">

    {Employeetask.map((elem, index) => (
      <div
        key={index}
        className="min-w-[520px] py-4 p-6 bg-gradient-to-l from-gray-200 to-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden"
      >
      <div className="py-4 w-full flex items-center justify-between">
      <button className="actay py-2 px-5 bg-red-900 text-white rounded-full">
            Hight
          </button>
        <h4 className="Actay text-black text-1xl">20/4/2025</h4>

      </div>

        <p className="Actay text-2xl mt-4 text-black">
          {elem.Tasktittle}
        </p>
            
        <div className="w-full max-w-xl">
  <p className="Actay text-black mt-3 text-sm whitespace-normal leading-relaxed">
    {elem.Taskdesc}
  </p>
</div>


      </div>
    ))}

  </div>
</div>

        </section>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
