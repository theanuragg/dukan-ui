import React from "react";

export default function Card() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pl-52 justify-start p-6 mr-0">
         {/* Card 1 */}
<div className="flex justify-center md:flex md:justify-center position:fixed ">
  <div className="max-w-md p-12 w-96 h-48 bg-blue-900 border overflow-hidden hover:bg-blue-950 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
    <div className="text-slate-400 dark:text-gray-300 flex flex-col mb-2 -mt-2">
      <div className="flex items-center space-x-0">
        <span>Next payout</span>
        <svg className="h-3 w-3 text-black dark:text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
    </div>
    <div className="flex justify-between gap-3 items-center pt-2 -mt-2">
      <div className="font-semibold text-3xl text-white dark:text-black">
        $23,457
      </div>
      <div className="flex items-center cursor-pointer space-x-1 text-white dark:text-black">
        <span className="font-normal underline hidden sm:inline">23 Orders</span>
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 13L6.7 7.674a.909.909 0 0 0 0-1.348L1 1" />
        </svg>
      </div>
    </div>
    <div className="absolute  space-x-24 left-0 right-0 bottom-0 bg-blue-950 p-2">
      <span className="text-white">Next payment date</span>
      <span className="text-white"> Today, 04:00PM</span>
    </div>
  </div>
</div>


      {/* Card 2 */}
      <div className="maz-w-md p-8 w-72 h-36 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="text-gray-700 dark:text-gray-300 flex flex-col">
          <div className="flex items-center space-x-1">
            <span>Amount pending</span>
            <svg className="h-3 w-3 text-zinc-600 dark:text-zinc-400" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <path d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 27.273363 4.8627078 30.334853 6.2617188 33.064453 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469 C 33.406292 6.9980469 41 14.591755 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719 C 7.7836522 29.811523 7 27.002565 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 z M 24 13 C 20.704135 13 18 15.704135 18 19 A 1.50015 1.50015 0 1 0 21 19 C 21 17.325865 22.325865 16 24 16 C 25.674135 16 27 17.325865 27 19 C 27 20.586213 26.356675 21.053097 25.226562 22.109375 C 24.09645 23.165653 22.5 24.806615 22.5 27.5 A 1.50015 1.50015 0 1 0 25.5 27.5 C 25.5 25.840385 26.15355 25.347503 27.273438 24.300781 C 28.393325 23.25406 30 21.648787 30 19 C 30 15.704135 27.295865 13 24 13 z M 24 31 A 2 2 0 0 0 24 35 A 2 2 0 0 0 24 31 z"></path>
           </svg>
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center pt-2">
          <div className="font-semibold text-2xl text-gray-800 dark:text-white">
            $23,457
          </div>
          <div className="flex items-center cursor-pointer space-x-1">
          <span className="font-medium underline hidden sm:inline text-blue-600">13Order</span>
            <svg className="w-4 h-4  text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 13L6.7 7.674a.909.909 0 0 0 0-1.348L1 1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="maz-w-md p-8 w-72 h-36 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="text-gray-700 dark:text-gray-300 flex flex-col">
          <div className="flex items-center space-x-1">
            <span>Amount Processed</span>
            <svg className="h-3 w-3 text-zinc-600 dark:text-zinc-400" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <path d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 27.273363 4.8627078 30.334853 6.2617188 33.064453 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469 C 33.406292 6.9980469 41 14.591755 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719 C 7.7836522 29.811523 7 27.002565 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 z M 24 13 C 20.704135 13 18 15.704135 18 19 A 1.50015 1.50015 0 1 0 21 19 C 21 17.325865 22.325865 16 24 16 C 25.674135 16 27 17.325865 27 19 C 27 20.586213 26.356675 21.053097 25.226562 22.109375 C 24.09645 23.165653 22.5 24.806615 22.5 27.5 A 1.50015 1.50015 0 1 0 25.5 27.5 C 25.5 25.840385 26.15355 25.347503 27.273438 24.300781 C 28.393325 23.25406 30 21.648787 30 19 C 30 15.704135 27.295865 13 24 13 z M 24 31 A 2 2 0 0 0 24 35 A 2 2 0 0 0 24 31 z"></path>
           </svg>
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center pt-2">
          <div className="font-semibold text-2xl text-gray-800 dark:text-white">
            $23,457,567
          </div>
          <div className="flex items-center cursor-pointer space-x-1">
            <span className="font-medium underline hidden sm:inline">Details</span>
            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 13L6.7 7.674a.909.909 0 0 0 0-1.348L1 1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
