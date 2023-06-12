import React, { useContext } from 'react'
import { AppContext } from '../App'

const ProfileSlider = () => {

  const {setSliderToggle} = useContext(AppContext);

  return (
    <section className={`absolute h-screen py-3 pr-3 ease-in-out right-0 z-10`}>
      <section className={`flex relative text-slate-400 h-full bg-transparent hover:bg-gray-600 hover:bg-opacity-5 cursor-pointer rounded-l-xl rounded-bl-xl ease-in-out
          w-fit pointer-events-none `}>
        <span className="profile_container_closer material-symbols-outlined p-3 text-center pointer-events-auto" onClick={()=>setSliderToggle(false)}>
          keyboard_double_arrow_right
        </span>
        <div className="right-0 bg-white h-full w-96 rounded-xl p-3 transition-all duration-1000 border border-violet-200">
          <div className="header flex justify-between items-center px-2">
            <span className='text-md font-bold text-black'> Connect a wallet</span>
            <span className="material-symbols-outlined bg-gray-600 bg-opacity-5 text-center rounded-xl h-8 w-8 text-slate-800 text-2xl">
              settings
            </span>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ProfileSlider