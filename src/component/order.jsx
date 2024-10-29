import React from 'react';

const OrderTable = () => {
    const orders = [
    { id: '#281209', status: 'Successful', transactionId: '131634495747', refundDate: 'Today, 08:45 PM', amount: '₹1,125.00' },
    { id: '#281208', status: 'Processing', transactionId: '131634495747', refundDate: 'Yesterday, 3:00 PM', amount: '₹1,125.00' },
    { id: '#281207', status: 'Successful', transactionId: '131634495747', refundDate: '12 Jul 2023, 03:00 PM', amount: '₹1,125.00' },
    { id: '#281206', status: 'Successful', transactionId: '131634495747', refundDate: '12 Jul 2023, 03:00 PM', amount: '₹1,125.00' },
    { id: '#281205', status: 'Successful', transactionId: '131634495747', refundDate: '12 Jul 2023, 03:00 PM', amount: '₹1,125.00' },
    { id: '#281204', status: 'Successful', transactionId: '131634495747', refundDate: '12 Jul 2023, 03:00 PM', amount: '₹1,125.00' },
];

return (
    <div className="flex justify-center w-full h-full bg-white rounded-lg ">
        <div className="w-full  overflow-x-auto">
          <div className="flex justify-between items-center w-full">
  <input
    className="w-48 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md mb-2 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
    placeholder="Order ID"
  />
  
  <div className="flex items-center space-x-2">
    <button
      className=" hover:border-slate-200 rounded-md border border-transparent py-2 px-4 flex items-center text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Sort 
      <svg className="w-4 h-4 rotate-90 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    </button>
    
    <svg className="w-5 h-5 rounded-sm hover:border-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  </div>
</div>
            <table className="min-w-full table-auto text-slate-800 text-left text-lg ">
                <thead>
                    <tr className="text-slate-600 bg-slate-100">
                        <th className="p-6 text-xl font-semibold">Order ID</th>
                        <th className="p-6 text-xl font-semibold">Status</th>
                        <th className="p-6 text-xl font-semibold">Transaction ID</th>
                        <th className="p-6 text-xl font-semibold">Refund Date</th>
                        <th className="p-6 text-xl font-semibold">Order Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id} className="hover:bg-slate-50">
                            <td className="p-6 font-bold text-lg">{order.id}</td>
                            <td className="p-6">
                                <span className={`flex items-center ${order.status === 'Successful' ? 'text-green-600' : 'text-gray-600'}`}>
                                    <span className={`h-3 w-3 rounded-full mr-3 ${order.status === 'Successful' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                                    {order.status}
                                </span>
                            </td>
                            <td className="p-6 text-lg">{order.transactionId}</td>
                            <td className="p-6 text-lg">{order.refundDate}</td>
                            <td className="p-6 text-lg">{order.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>

    );
};

export default OrderTable;
