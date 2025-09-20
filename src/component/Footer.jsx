import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white h-[200px] p-6 space-y-4">
      <p>Questions? Call 000-800-919-1743 (Toll-Free)</p>

      {/* First column */}
      <div className="flex flex-col space-y-2 underline">
        <p>FAQ</p>
        <p>Cookie Preferences</p>

        {/* Custom select */}
        <select
          defaultValue=""
          className="border border-gray-500 rounded-lg px-3 py-2 text-black w-48"
        >
          <option value="" disabled hidden>
            Will Umesh
          </option>
          <option value="umesh1">Umesh 1</option>
          <option value="umesh2">Umesh 2</option>
          <option value="umesh3">Umesh 3</option>
        </select>
      </div>

      {/* Second row */}
      <div className="underline w-8/12 flex justify-around">
        <p>Help Centre</p>
        <p>Terms of Use</p>
        <p>Privacy</p>
        <p>Corporate Information</p>
      </div>
    </div>
  )
}

export default Footer
