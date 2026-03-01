import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const PopularCourse = ({hour,title,rating,reviews,name,role,price,lessons}) => {
  return (
    <div class="rounded-xl overflow-hidden  relative group w-104 h-147.5 shadow-xl bg-white">
     
      <span className="absolute text-white z-80 top-4 left-4   p-3 bg-[#F57005]  rounded-full cursor-pointer">
        <FaRegHeart />
      </span>
      <div className="bg-[#152B4A] w-[145%] h-139.5 rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 "></div>
      <div className=" transition duration-300 ease-in-out group-hover:bg-[#4F5DE4] bg-[#F57005] w-full h-91 absolute top-1/2 left-1/2 -translate-y-[98.5%] -translate-x-1/2 !z-0 rounded-full"></div>
      <div className="p-7.5 mt-73.75">
        <p className="text-[14px]/[26px] text-white font-semibold font-urbanist px-2.5 py-1.75 bg-[#2A254D] rounded-[5px] w-fit ">
          {hour}
        </p>

        <div className="flex gap-x-1 pt-5.5 pb-1.75 ">
          <ul className="flex items-center  gap-x-2">
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
          </ul>
          <p className="text-[#2A254D] font-normal text-[14px]/[26px]  font-urbanist">
            {reviews}
          </p>
        </div>
        <h6 className="text-[#2A254D]  font-bold  text-2xl/[29px] font-urbanist">
          {title}
        </h6>
        <div className="flex items-center justify-between rounded-md p-3 bg-[#F6F6F6] mt-7.5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0F2A4D]"></div>
            <div>
              <p className="text-base font-bold font-urbanist text-[#0F2A4D]">
                {name}
              </p>
              <p className="text-xs font-urbanist font-medium text-gray-400">
             {role}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-base font-bold font-urbanist text-[#0F2A4D]">
              ${price}
            </p>
            <p className="text-xs font-urbanist font-medium text-gray-400">
              {lessons} Lessons
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
