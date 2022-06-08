import React, { useState } from 'react'
function Header13() {
  const [show, setShow] = useState(true)
  const [Tab, setTab] = useState(true)
  const [Show1, setShow1] = useState(true)
  const [Show2, setShow2] = useState(true)
  const [Show3, setShow3] = useState(true)

  return (
    <>
      <div className=" flex  mb-16  gap-x-16  justify-center   xl:flex-row lg:flex-col 
                             md:flex-col sm:flex-col flex-col container mx-auto  ">
        <div className=" mt-52 text-center">
          <h1 className="font-extrabold text-xl text-[#322C4E]   text-center ">Have any questions about <span className="text-[#3E8180]">freshbuilds?</span></h1>
          <div className="flex justify-center ml-4">
            <p className="text-[12px] border-b-2 pt-4 pb-2 font-medium">What kind of new construction homes does freshbuilds have on its platform?</p>
            <button className='mx-4 ' onClick={() => setTab(!Tab)}> <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.293 0.292969L6 4.58597L1.707 0.292969L0.292999 1.70697L6 7.41397L11.707 1.70697L10.293 0.292969Z" fill="#3E8180" />
            </svg></button>
          </div>
          {
            Tab ? <p className='text-xs bg-green-100'>freshbuilds has the largest inventory of new construction homes<br></br> that you won’t find on other websites. Our proprietary technology<br></br> and network of local real estate agents mean you’ll be the<br></br> first to hear about new construction projects. !</p> : null
          }
          <div className="mt-7 flex justify-center ml-4">
            <p className="text-[12px] border-b-2 pt-2 pb-2 font-medium">What kind of new construction homes does freshbuilds have on its platform?</p>
            <button className='mx-4 ' onClick={() => setShow1(!Show1)}> <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.293 0.292969L6 4.58597L1.707 0.292969L0.292999 1.70697L6 7.41397L11.707 1.70697L10.293 0.292969Z" fill="#3E8180" />
            </svg></button>
          </div>
          {
            Show1 ? <p className='text-xs bg-green-100'>freshbuilds has the largest inventory of new construction homes<br></br> that you won’t find on other websites. Our proprietary technology<br></br> and network of local real estate agents mean you’ll be the<br></br> first to hear about new construction projects. !</p> : null
          }
          <div className="mt-7 flex justify-center ml-4">
            <p className="text-[12px] border-b-2 pt-2 pb-2 font-medium">What kind of new construction homes does freshbuilds have on its platform?</p>
            <button className='mx-4 ' onClick={() => setShow2(!Show2)}> <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.293 0.292969L6 4.58597L1.707 0.292969L0.292999 1.70697L6 7.41397L11.707 1.70697L10.293 0.292969Z" fill="#3E8180" />
            </svg></button>
          </div>
          {
            Show2 ? <p className='text-xs bg-green-100 '>freshbuilds has the largest inventory of new construction homes<br></br> that you won’t find on other websites. Our proprietary technology<br></br> and network of local real estate agents mean you’ll be the<br></br> first to hear about new construction projects. !</p> : null
          }
          <div className="mt-7 flex justify-center ml-4">
            <p className="text-[12px] border-b-2 pt-2 pb-2 font-medium">What kind of new construction homes does freshbuilds have on its platform?</p>
            <button className='mx-4 ' onClick={() => setShow3(!Show3)}> <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.293 0.292969L6 4.58597L1.707 0.292969L0.292999 1.70697L6 7.41397L11.707 1.70697L10.293 0.292969Z" fill="#3E8180" />
            </svg></button>
          </div>
          {
            Show3 ? <p className='text-xs bg-green-100'>freshbuilds has the largest inventory of new construction homes<br></br>that  you won’t find on other websites. Our proprietary technology<br></br> and network of local real estate agents mean you’ll be the<br></br> first to hear about new construction projects. !</p> : null
          }
          <div className="mt-7 flex justify-center ml-4">
            <p className="text-[12px] border-b-2 pt-2 pb-2 font-medium">What kind of new construction homes does freshbuilds have on its platform?</p>
            <button className='mx-4 ' onClick={() => setShow(!show)}> <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.293 0.292969L6 4.58597L1.707 0.292969L0.292999 1.70697L6 7.41397L11.707 1.70697L10.293 0.292969Z" fill="#3E8180" />
            </svg></button>
          </div>
          {
            show ? <p className='text-xs bg-green-100'>freshbuilds has the largest inventory of new construction homes<br></br> that you won’t find on other websites. Our proprietary technology<br></br> and network of local real estate agents mean you’ll be the<br></br> first to hear about new construction projects. !</p> : null
          }
        </div>

        <div>
          <img className="" src="faq_houses.png"></img>
        </div>

      </div>
    </>
  );
}

export default Header13; 