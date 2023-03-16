import React from "react";

export const ItemSkeleton = () => {
  return (
    <div role="status" className="max-full p-4 space-y-4 border mb-5 border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse  ">
    <div className="flex items-center justify-between">
        <div>
            <div className="h-2.5 bg-gray-300 rounded-full   w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full  "></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full   w-12"></div>
    </div>
  
    </div>
  );
};
export default ItemSkeleton;
