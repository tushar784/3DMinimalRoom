import React from 'react'
import logo from '../assets/tusharsurvedesigns-02.png'

const HeaderSection = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-[3rem] h-[3rem]" />
      </div>
      <span className="text-center">infinity ~ studios</span>
      <div>
        <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
          <span className="font-bold">Download ~&gt;</span>
        </button>
      </div>
    </header>
  )
}

export default HeaderSection
