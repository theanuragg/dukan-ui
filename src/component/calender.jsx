import React from "react";

export default function Calendar() {
    return (
       <div>
         <div className="flex flex-row items-start pl-44 pt-16 text-5xl font-semibold leading-loose text-gray-900 dark:text-white ">
             <span>Overview</span>
         </div>
         <div className=" flex justify-end">
           <button className=" flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-blue-950 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              This month 
              <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
         </div>
     </div>
    );
}
