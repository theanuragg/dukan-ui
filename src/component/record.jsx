import React from 'react';

const TransactionsHeader = () => {
  return (
    <div className="flex items-center  space-x-16 p-4">
      <h1 className="text-2xl font-semibold">Transactions | This Month</h1>
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-gray-200 text-gray-700  rounded-full font-medium">
          Payouts (22)
        </button>
        <button className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white rounded-full font-medium">
          Refunds (6)
        </button>
      </div>
    </div>
  );
};

export default TransactionsHeader;
