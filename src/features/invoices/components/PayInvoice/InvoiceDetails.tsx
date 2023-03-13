import { Logo, Divider } from "components";
import { getFullName } from "utils";
import type { InvoiceDetailsType } from "../../types";

const InvoiceDetails: InvoiceDetailsType = ({ details, loading, error }) => {
  let invoiceItems = <p className="text-sm text-gray-500">Loading...</p>;

  if (!loading && details) {
    invoiceItems = (
      <>
        {details.fixed.map((item) => (
          <div key={item._id} className="flex justify-between">
            <p className="font-medium">{item.itemName}</p>
            <span className="text-base font-medium">${item.price}</span>
          </div>
        ))}
        <span className="block text-xs leading-3 font-normal">
          by{" "}
          {details.freelancer
            ? getFullName(
                details.freelancer?.firstName,
                details.freelancer?.lastName
              )
            : ""}
        </span>
      </>
    );
  }

  if (error) {
    invoiceItems = (
      <p className="text-sm text-red capitalize">Error: {error}</p>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Payment Request</h2>
        <div className="inline-flex items-center">
          <Logo />
          <span className="text-base font-medium tracking-wider text-center ml-2">
            Talents Valley
          </span>
        </div>
      </div>

      <Divider />
      {invoiceItems}
    </>
  );
};

export default InvoiceDetails;
