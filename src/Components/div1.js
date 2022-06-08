import React, { useState } from "react";
function Header2() {

  return (

    <>


      <div className=" bg-gradient-to-r from-[#D7FDF4] via-[#E3E3E3] to-[#D7FDF4] mt-8  shadow-md ">


        <div className="relative flex w-full h-full item-center">
          <div className="absolute flex justify-start  pt-20 sm:hidden hidden lg:block md:hidden ">
            <img src="./hero_houses.png"></img>
          </div>
        </div>

        <div className="lg:pt-12  mx-auto text-[#3E8180] xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl text-center font-bold container ">
          <h1>Discover New Construction Homes<br></br>
            Before They Hit The Market</h1>
          <div className="text-[#322C4E] xl:text-xl lg:text-base md:text-sm sm:text-sm text-sm pt-8 text-center  ">
            <h1>From move-in-ready to custom homes, <span className="font-normal">fresh</span><span className="font-extrabold xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[16px]">builds</span> is the<br></br>  modern way to find + buy a new construction house.</h1>

            <div className="pb-12">

              <button class="bg-orange-600 text-white  py-4 mt-12 px-6 border rounded-lg font-medium cursor-pointer">Search freshbuilds</button>


            </div>


          </div>

        </div>




      </div>







    </>
  );
}

export default Header2;