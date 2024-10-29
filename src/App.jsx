import React,{ useState } from 'react'
import Card from "./component/card"
import './App.css'
import Navbar from "./component/navbar"
import Sidebar from './component/sidebar'  
import Calender from './component/calender'
import OrderTable from './component/order'
import TransactionsHeader from './component/record'
function App() {
  

  return (
   <>
  <Calender />
  <div className="flex">
    <div className="space-x-0">
      <Sidebar />
    </div>
    <div className="flex-grow">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="pt-20 px-6 pl-4 pr-4"> 
        <div className="flex justify-end py-4 mr-10">
          <Card />
        </div>
        <div className='pl-44'>
          <TransactionsHeader />
        </div>
      </div>
     <div className='pl-40'>
      <OrderTable />
     </div>
    </div>
  </div>
</>

  ) 
}

export default App
