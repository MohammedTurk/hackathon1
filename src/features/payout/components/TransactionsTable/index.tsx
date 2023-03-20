import { API_SERVICES_URLS } from "data";
import { useSwrMutationFetch } from "features/payout/hooks";
import { useToggle } from "hooks";
import { ChevronDownIconMini, ChevronUpIconMini } from "lib/@heroicons";
import { useEffect, useState } from "react";
import { Drawal } from "../Drawal";
export const TransactionsTable = ({
  transactions,
  handleNextPaginate,
  handlePrevPaginate,
  handleSortData,
  currentPage,
}) => {
  const [idTransaction, setIdTransaction] = useState();
  const { trigger: getTransactionDetails, isMutating } = useSwrMutationFetch(
    API_SERVICES_URLS.WITHDRAW.WITHDRAW_DETAILS(idTransaction),
    { method: "GET", headers: {} }
  );
  const [detailedTransaction, setDetailedTransaction] = useState();

  const {
    isOpen: isOpenDrawal,
    closeModal: closeModalDrawal,
    openModal: openModalDrawal,
  } = useToggle();

  const paginateCount = () => Math.floor(transactions?.count / 5);
  const statusColor = (status) => {
    if (status === "pending") {
      return "text-[#DAA545]";
    } else if (status === "ready") {
      return "text-[#4BAE4F]";
    } else if (status === "sent") {
      return "text-blue-light";
    } else if (status === "paid") {
      return "text-[#4BAE4F]";
    } else {
      return "text-gray-dark";
    }
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await getTransactionDetails();
      if (response.status == "failed") return;
      setDetailedTransaction(response);
    };
    fetch();
  }, [idTransaction]);
  const GetTransactionData = async (id) => {
    setIdTransaction(id);
    openModalDrawal();
  };
  return (
    <>
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
              <tr
                key={withdraw._id}
                className="bg-white border-b hover:bg-gray-light "
                onClick={() => GetTransactionData(withdraw._id)}
              >
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
                <td
                  className={`px-6 py-4 font-medium ${statusColor(
                    withdraw.status
                  )}`}
                >
                  {withdraw.status}
                </td>
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
      <Drawal
        isOpen={isOpenDrawal}
        closeDrawal={closeModalDrawal}
        data={detailedTransaction?.data}
        isMutating={isMutating}
      />
    </>
  );
};
