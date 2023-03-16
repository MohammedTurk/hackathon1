 import { Button, Input, TableSkeleton ,MyPopover} from "components";
import { API_SERVICES_URLS } from "data";
import { useSWRMutationHook } from "features/payout/hooks";
import {
  ArrowDownTrayIconMini,
  ChevronDownIconMini,
  ChevronUpIconMini,
  MagnifyingGlassIconMini,
} from "lib/@heroicons";
import React, { useEffect, useState } from "react";

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [sortValue, setSortValue] = useState("");
  const [filteredValue, setFilteredValue] = useState();
  const [searchValue, setSearchValue] = useState("");
  const paginateCount = () => Math.floor(transactions?.count / 5);
  const {
    trigger: getTransactionData,
    data: TransactionData,
    isMutating,
  } = useSWRMutationHook(
    `${
      API_SERVICES_URLS.WITHDRAW.WITHDRAW_LIST
    }?offset=${currentPage}&limit=5&sort=${sortValue}${
      filteredValue ? `&filter=${filteredValue}` : ""
    }${searchValue ? `&search=${searchValue}` : ""}`,
    "get"
  );
  useEffect(() => {
    getTransactionData();
  }, []);

  useEffect(() => {
    setTransactions(TransactionData?.data);
  }, [TransactionData]);
  const handleNextPaginate = () => {
    setCurrentPage((prev) => prev + 1);
    getTransactionData();
  };
  const handlePrevPaginate = () => {
    setCurrentPage((prev) => prev - 1);
    getTransactionData();
  };
  const handleSortData = (value) => {
    const sortedFor = `${value}`;
    console.log(
      `${
        API_SERVICES_URLS.WITHDRAW.WITHDRAW_LIST
      }?offset=${currentPage}&limit=5&sort=${sortValue}${
        filteredValue ? `&filter=${filteredValue}` : ""
      }${searchValue ? `&filter=${searchValue}` : ""}`
    );

    setSortValue(sortedFor);
    getTransactionData();
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearchRequest = () => {
    getTransactionData();
  };
  const statusColor = ( status)=>{
    if (status === "pending") {
      return 'text-[#DAA545]'
    }else if(status === "ready"){
      return 'text-[#4BAE4F]'

    }else if(status === "sent"){
      return 'text-blue-light'

    }else if(status === "paid"){
      return 'text-[#4BAE4F]'

    }else{
      return 'text-gray-dark'

    }
  }
//   const handleFilteredValue =(value)=>{
//     setFilteredValue(prev=>[...prev ,value])
//   }

  return (
    <div className="">
      {isMutating ? (
        <TableSkeleton />
      ) : (
        <div className="">
          <span className="text-xl font-semibold text-gray-dark mb-4 block">
            Transactions
          </span>
          <div className="flex  justify-between">
            <div className="flex w-full gap-2">
              <div className="w-[45%]">
                <Input
                  id="search"
                  inputClassName="pl-10"
                  inputSize="small"
                  placeholder="Search"
                  startIcon={<MagnifyingGlassIconMini className="w-5 h-5" />}
                  onChange={(e) => handleSearch(e)}
                />
              </div>
              <div className="">
                <Button
                  buttonSize="small"
                  loading={isMutating}
                  onClick={handleSearchRequest}
                >
                  Search
                </Button>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="">
                <Button
                  className="!bg-white !text-[#4375FF] hover:!text-[#F3F6FF] shadow-md hover:!bg-[#4375FF] flex items-center gap-1 sm:gap-2"
                  buttonSize="small"
                >
                  <ArrowDownTrayIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs  sm:text-sm">Withdraw</span>
                </Button>
              </div>
              <div className="">
                <MyPopover>
                    <span className="flex gap-2 mb-3 items-center">
                        <input type="checkbox" name="all" id="all" />
                        <label htmlFor="all" className="text-gray-dark font-medium">All</label>
                    </span>
                    <span className="flex gap-2 mb-3 items-center">
                        <input type="checkbox" name="Send" id="Send" />
                        <label htmlFor="Send" className="text-gray-dark font-medium">Send</label>
                    </span>
                    <span className="flex gap-2 mb-3 items-center">
                        <input type="checkbox" name="Ready" id="Ready" />
                        <label htmlFor="Ready" className="text-gray-dark font-medium">Ready</label>
                    </span>
                    
                    <span className="flex gap-2 mb-3 items-center">
                        <input type="checkbox" name="Pending" id="Pending" />
                        <label htmlFor="Pending" className="text-gray-dark font-medium">Pending</label>
                    </span>
                    <span className="flex gap-2 mb-3 items-center">
                        <input type="checkbox" name="Completed" id="Completed" />
                        <label htmlFor="Completed" className="text-gray-dark font-medium">Completed</label>
                    </span>
                    <span className="flex gap-2 mb-3 items-center">
                        <input type="checkbox" name="Canceled" id="Canceled" />
                        <label htmlFor="Canceled" className="text-gray-dark font-medium">Canceled</label>
                    </span>
                   
                </MyPopover>
                {/* <Button
                  buttonSize="small"
                  loading={isMutating}
                  onClick={handleSearchRequest}
                >
                  filter
                </Button> */}
              </div>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[-15px]">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-white ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 pb-3 pt-4 font-medium text-[15px] text-[#9E9E9E] capitalize flex gap-4"
                  >
                    <div className="flex items-center gap-2">
                      Name
                      <div className="flex flex-col  gap-1">
                        <a
                          href="#"
                          onClick={() => handleSortData("name")}
                          className="text-[#9E9E9E]"
                        >
                          <ChevronUpIconMini className="h-3 w-3" />
                        </a>
                        <a
                          href="#"
                          onClick={() => handleSortData("-name")}
                          className="text-[#9E9E9E]"
                        >
                          <ChevronDownIconMini className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      Date
                      <div className="flex flex-col  gap-1">
                        <a
                          href="#"
                          onClick={() => handleSortData("date")}
                          className="text-[#9E9E9E]"
                        >
                          <ChevronUpIconMini className="h-3 w-3" />
                        </a>
                        <a
                          href="#"
                          onClick={() => handleSortData("-date")}
                          className="text-[#9E9E9E]"
                        >
                          <ChevronDownIconMini className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 pb-3 pt-4 font-medium text-[15px] text-[#9E9E9E] capitalize"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 pb-3 pt-4 font-medium text-[15px] text-[#9E9E9E] capitalize"
                  >
                    <div className="flex items-center gap-2">
                      Amount
                      <div className="flex flex-col  gap-1">
                        <a
                          href="#"
                          onClick={() => handleSortData("amount")}
                          className="text-[#9E9E9E]"
                        >
                          <ChevronUpIconMini className="h-3 w-3" />
                        </a>
                        <a
                          href="#"
                          onClick={() => handleSortData("-amount")}
                          className="text-[#9E9E9E]"
                        >
                          <ChevronDownIconMini className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 pb-3 pt-4 font-medium text-[15px] text-[#9E9E9E] capitalize"
                  >
                    <div className="flex items-center gap-2">
                      status
                      <div className="flex flex-col  gap-1">
                        <a
                          href="#"
                          onClick={() => handleSortData("status")}
                          className="text-[#9E9E9E]"
                        >
                          <ChevronUpIconMini className="h-3 w-3" />
                        </a>
                        <a
                          href="#"
                          onClick={() => handleSortData("-status")}
                          className="text-[#9E9E9E]"
                        >
                          <ChevronDownIconMini className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions?.withdraws.map((withdraw) => (
                  <tr key={withdraw._id} className="bg-white border-b hover:bg-gray-light ">
                    <th
                      scope="row"
                      className="px-6 py-4   whitespace-nowrap  flex flex-col"
                    >
                      <span className="text-gray-dark font-medium">
                        {withdraw.office?.name || withdraw.bank?.bankName}
                      </span>
                      <span className="text-gray-400 font-normal text-xs pt-1">
                        {withdraw.createdAt}
                      </span>
                    </th>

                    <td className="px-6 py-4 text-gray-dark font-medium text-md">
                      {withdraw.recipient?.name || withdraw.bank?.accountName}
                    </td>
                    <td className="px-6 py-4 text-black font-medium text-md">
                      {"$" + withdraw.amount}
                    </td>
                    <td className={`px-6 py-4 font-medium ${statusColor(withdraw.status)}`}>{withdraw.status}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4">
                    <div
                      aria-label="Page navigation example"
                      className="w-full flex justify-center p-1   bg-white"
                    >
                      <ul className="inline-flex items-center   ">
                        {currentPage > 0 && (
                          <li onClick={handlePrevPaginate}>
                            <a
                              href="#"
                              className="block px-3 py-2 ml-0   text-gray-500 bg-white     rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                              <span className="sr-only">Previous</span>
                              <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </li>
                        )}

                        <li className="px-3">
                          Page {currentPage} - {paginateCount()}
                        </li>
                        {currentPage < paginateCount() && (
                          <li onClick={handleNextPaginate}>
                            <a
                              href="#"
                              className="block px-3 py-2   text-gray-500 bg-white     rounded-r-lg hover:bg-gray-100 hover:text-gray-700  "
                            >
                              <span className="sr-only">Next</span>
                              <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionsTable;
