import React from "react";
import Header from "../Others/Header";

const AdminDashboard = () => {
  return (
    <div className="w-full min-h-screen  text-black px-5">

     <Header/>

      {/* Main Form Section */}
      <div className="mt-10 flex w-full gap-10">

        {/* LEFT FORM */}
        <div className="w-1/2 space-y-6">

          {/* Task Title */}
          <div>
            <label className="text-sm Actay">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="Actay w-full mt-1 p-3 bg-transparent border border-gray-500 rounded-lg outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm Actay">Date</label>
            <input
              type="date"
              className="Actay w-full mt-1 p-3 bg-transparent border border-gray-500 rounded-lg outline-none"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="text-sm Actay">Assign To</label>
            <input
              type="text"
              placeholder="employee name"
              className="Actay w-full mt-1 p-3 bg-transparent border border-gray-500 rounded-lg outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm Actay">Category</label>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="Actay w-full mt-1 p-3 bg-transparent border border-gray-500 rounded-lg outline-none"
            />
          </div>

        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="w-1/2">
          <label className="Actay text-lg ">Description</label>
          <textarea
            placeholder="Write task description here..."
            className="Actay w-full mt-1 p-4 h-52 bg-transparent border border-gray-500 rounded-lg outline-none"
          ></textarea>

<button className="Actay cursor-pointer w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white mt-4 py-3 rounded-lg">
  Create Task
</button>
        </div>

      </div>

      {/* TASK LIST */}
      <div className="Actay mt-12 h-60 overflow-y-auto space-y-3">
  {/* Task 1 */}
  <div className="Actay w-full flex justify-between bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white px-5 py-3 rounded-lg">
    <span>Hunain</span>
    <span>Make a Ux Design</span>
    <span>Status</span>
  </div>

  {/* Task 2 */}
  <div className="Actay w-full flex justify-between bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white px-5 py-3 rounded-lg">
    <span>Hunain</span>
    <span>Fix the bugs</span>
    <span>Status</span>
  </div>

  {/* Task 3 */}
  <div className="w-full flex justify-between bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white px-5 py-3 rounded-lg">
    <span>Hunain</span>
    <span>Create admin panel</span>
    <span>Status</span>
  </div>

  {/* Task 4 */}
  <div className="w-full flex justify-between bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white px-5 py-3 rounded-lg">
    <span>Hunain</span>
    <span>Make an Employee Dashboard</span>
    <span>Status</span>
  </div>

  {/* Task 5 */}
  <div className="w-full flex justify-between bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white px-5 py-3 rounded-lg">
    <span>Hunain</span>
    <span>Another Task</span>
    <span>Status</span>
  </div>

  {/* Aur baaki tasks bhi yahan add kar sakte ho */}
</div>

    </div>
  );
};

export default AdminDashboard;
