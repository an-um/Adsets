import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../Store/Slices/tabHandler";
import Group16  from '../assets/icon/Group 16.png';
import Group37 from '../assets/img/Group 37.svg'
import arrowDrop from '../assets/icon/Icon ionic-md-arrow-dropdown.svg';
import editIcon from '../assets/icon/Icon awesome-pen.svg';
import task from '../assets/icon/task.png';
import backArrow from '../assets/icon/back-arrow.png';
import delIcon from '../assets/icon/Icon awesome-trash-alt.png';
import people from '../assets/icon/Icon material-people.svg'
import Group33 from '../assets/icon/Group 33.svg';

function Colum() {
  const TabHandlerState = useSelector((state) => state.TabHandler);
  const dispatch = useDispatch();
  const checkedColumnsState = useSelector((state) => state.checkBox);

  return (
    <>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
        <div
          onClick={() => dispatch(changeState("campaigns"))}
          class={`bg-[#FAFAFA] ${
            TabHandlerState.campaign_tab === true ? "active" : ""
          } p-3 flex cursor-pointer tab_buttons_container items-center rounded-xl`}
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 0V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H1Z"
            />
          </svg>
          <b class="mx-2">Campaigns</b>
          {checkedColumnsState.campaigns.length === 0 ? (
            ""
          ) : (
            <span className="p-1 ml-auto px-3 rounded-full text-white bg-blue-500 ">
              {checkedColumnsState.campaigns.includes("all")
                ? "All"
                : checkedColumnsState.campaigns.length}{" "}
              Selected
            </span>
          )}
        </div>

        <div
          onClick={() => dispatch(changeState("ad_sets"))}
          class={`  ${
            TabHandlerState.ad_set_tab === true ? "active" : ""
          }  bg-[#FAFAFA] p-3 flex tab_buttons_container items-center rounded-xl`}
        >
          <img src={Group37} alt="" />
          <b class="ml-2 ">
            Ad Sets
            {checkedColumnsState.campaigns.includes("all")
              ? " for all Campaigns"
              : ""}
            {checkedColumnsState.campaigns.length !== 0 &&
            checkedColumnsState.campaigns.includes("all") !== true
              ? ` for ${checkedColumnsState.campaigns.length} Campaign`
              : ""}
          </b>
        </div>

        <div
          onClick={() => dispatch(changeState("ads"))}
          class={`bg-[#FAFAFA] p-3 rounded-xl flex tab_buttons_container  items-center ${
            TabHandlerState.ads_tab === true ? "active" : ""
          }`}
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M1 7h18M4 4h.01M7 4h.01M10 4h.01M3 17h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
            />
          </svg>
          <b class="ml-2">
            Ads
            {checkedColumnsState.campaigns.includes("all")
              ? " for all Campaigns"
              : ""}
            {checkedColumnsState.campaigns.length !== 0 &&
            checkedColumnsState.campaigns.includes("all") !== true
              ? ` for ${checkedColumnsState.campaigns.length} Campaign`
              : ""}
          </b>
        </div>
      </div>

      <div className="flex flex-wrap ms-2 mt-0 mb-2 items-center bg-white-200 w-full ">
        <div className="w-full ">
            <div className=" table_filter_button_container flex flex-wrap items-center justify-between">
              <div className="flex gap-1">
              <button className="bg-[#60BF09]  rounded-lg pl-8 pr-4 py-2 text-white">
                 Create
              </button>
              <div className="flex gap-1 items-center">
                <div className="bg-[#E6E6E6] p-2.5 opacity-100 rounded-l-lg">
                  <img src={Group16} alt="" />
                </div>
                <div className="bg-[#E6E6E6] p-2 py-3 rounded-r-lg ">
                 <img src={arrowDrop} alt="" />
                </div>
              </div>
              <div className="flex gap-1">
                <div className="flex justify-between bg-[#E6E6E6] p-2 px-3 rounded-l-lg">
                  <img src={editIcon} alt="" />
                  <span className="xl-text-[19px] text-[#707070] col font-bold ps-1">Edit</span>
                </div>
                <div className=" bg-[#E6E6E6] p-2 pt-3 rounded-r-lg">
                  <img src={arrowDrop} alt="" />
                </div>
              </div>
              <button className="bg-[#E6E6E6] p-2 rounded-lg ">
                <svg
                  className="w-[21px] h-[21px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="21.13"
                  viewBox="0 0 19.557 21.13"
                >
                  <path
                    id="Icon_ionic-ios-flask"
                    data-name="Icon ionic-ios-flask"
                    d="M23.458,18.938,17.53,9.059a.188.188,0,0,1-.03-.107V5a.2.2,0,0,1,.2-.2.611.611,0,0,0,.61-.61v-.2a.611.611,0,0,0-.61-.61H10.78a.611.611,0,0,0-.61.61v.2a.611.611,0,0,0,.61.61.2.2,0,0,1,.2.2V8.957a.183.183,0,0,1-.03.1L5.086,18.938a4.716,4.716,0,0,0-.615,2.316A3.267,3.267,0,0,0,7.783,24.5H20.816a3.178,3.178,0,0,0,3.21-3.251A4.7,4.7,0,0,0,23.458,18.938Zm-14-3.373a.407.407,0,0,1-.35-.615l3.073-5.166a1.638,1.638,0,0,0,.229-.828V5c0-.071-.005-.137-.01-.2h3.693a1.328,1.328,0,0,0-.01.2V8.957a1.6,1.6,0,0,0,.234.833l3.068,5.161a.407.407,0,0,1-.35.615Z"
                    transform="translate(-4.47 -3.375)"
                    fill="#272727"
                  />
                </svg>
                <b className="text-black ps-2">A/BTest</b>
              </button>
              <div className="bg-[#E6E6E6] p-2 px-3 pt-2 rounded-lg ">
                <img src={task} alt="" className="pt-1" />
              </div>
              <div className="bg-[#E6E6E6] p-2 rounded-lg">
                <img src={backArrow} alt="" />
              </div>

              <div className="bg-[#E6E6E6] p-2 rounded-lg">
               <img src={delIcon} alt="" className="pt-1"/>
              </div>
              <div className="bg-[#E6E6E6] p-2 rounded-lg">
                <img src={people} alt="" className="pt-1"/>
              </div>
              <div className="bg-[#E6E6E6] p-2 rounded-lg">
               <img src={Group33} alt="" className="pt-1"/>
              </div>
              <b className="flex xl-text-[19px] text-[#707070] bg-[#E6E6E6] p-2 rounded-lg">Rules
              <button className="">
                <svg
                  class="w-[9px] h-[20px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 10"
                >
                  <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                </svg>
              </button>
              </b>
              </div>
              {/* 2nd div */}
              <div className="flex gap-1 mx-3">
              <b className="">View Setup</b>
              <label class="cursor-pointer">
                <div class="relative w-12 h-6 bg-white-4800 rounded-full shadow-inner transition duration-300 ease-in-out">
                  <input type="checkbox" class="hidden" id="toggle" />
                  <div class="absolute left-0 top-0 w-6 h-6 bg-black rounded-full shadow-md transform translate-x-0 transition duration-300 ease-in-out"></div>
                </div>
              </label>
              <button className="flex justify-between bg-[#E6E6E6] p-2  rounded-lg w-[86px]">
                <svg
                  class="w-[23px] h-[20px] ml-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3V0H2Zm16 0h-3v16h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 0H7v16h6V0Z" />
                </svg>
                <svg
                  class="h-[22px] w-[9px] ml-3 pl-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 10"
                >
                  <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                </svg>
              </button>
              {/* <button className="bg-[#E6E6E6] p-2 rounded-lg">
              </button> */}
              <button className="bg-[#E6E6E6] p-2 rounded-lg">
                <svg
                  class="h-[22px] w-[15px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 1h8M1 5h12M3 9h8M1 13h12"
                  />
                </svg>
              </button>
              <button className="bg-[#E6E6E6] p-2 rounded-lg">
                <svg
                  class="h-[22px] w-[9px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 10"
                >
                  <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                </svg>
              </button>
              <b className="flex bg-[#E6E6E6] p-2 rounded-lg">Reports
              <button className="">
                <svg
                  class="h-[22px] w-[9px] ml-2 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 10"
                >
                  <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                </svg>
              </button>
              </b>
              </div>
            </div>
         
        </div>
      </div>
    </>
  );
}

export default Colum;
