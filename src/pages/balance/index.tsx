import { Button, Card, Input,Link ,Divider} from "components";
import BalanceCard from "components/BalanceCard";
import {table} from "data";
import {
  ArrowDownTrayIconMini,
  ChevronUpDownIcon,
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "lib/@heroicons";

// import { Surepayment } from "features/payout/components";
// import Addbankaccount from "features/payout/components/popUp/addBankAccount";
// import { Bankaccount } from "features/payout/components";
import { GeneralLayout } from "layouts";
import { imageOptimizer } from "next/dist/server/image-optimizer";

export const Balance = () => {

  return (
    <GeneralLayout rightSide={<BalanceCard />}>
      {/* <Surepayment/> */}
      {/* <Addbankaccount/> */}
      {/* <Bankaccount/> */}

      <div className="">
        <p className="text-gray-600">Transactions</p>
        <div className="grid grid-cols-6 gap-7 -mb-4">
          <Input
            placeholder="search"
            startIcon={<MagnifyingGlassIcon className="w-4 h-4" />}
            inputClassName="pl-10"
            inputSize="small"
            className="col-span-4"
          />
          <div className="flex">
            <Button className="w-32 h-10   bg-white  text-sky-500 flex">
              <ArrowDownTrayIconMini className="w-4 h-4 " />
              <p className="">Withdraw</p>
            </Button>
            <Button className="w-20 h-10 ml-4  bg-white  text-black flex">
              <Bars3BottomRightIcon className="w-6 h-6 text-black " />
              Filter
            </Button>
          </div>
        </div>

        <Card className="w-full ">
          <table className="table-auto ml-14">
            <thead>
              <tr>
                <th className="font-extralight flex">
                  <p>Name</p>
                  <ChevronUpDownIcon className="w-4 h-4 mt-1" />
                  <p className="ml-10">Date</p>
                  <ChevronUpDownIcon className="w-4 h-4  mt-1" />
                </th>
                <th className="font-extralight ">
                  <div className="flex ml-16">
                    <p>Amount</p>
                    <ChevronUpDownIcon className="w-4 h-4 mt-1 ml-2" />
                  </div>
                </th>
                <th className="font-extralight">
                  <div className="flex  ml-16">
                    <p>Name</p>{" "}
                    <Link href="">
                      <ChevronUpDownIcon className="w-4 h-4 mt-1 ml-2" />
                    </Link>
                  </div>
                </th>
                <th className="font-extralight">
                  <div className="flex ml-16">
                    <p>Status </p>
                    <ChevronUpDownIcon className="w-4 h-4 mt-1 ml-2" />
                  </div>
                </th>
              </tr>
            </thead>
            {table.map((items) => {
              return (
              
                  <tr key={items.id}>
                    <th className="font-extralight">
                      {items.loctionname}
                      <br></br>
                      <p>
                        <small>{items.date}</small>
                      </p>
                    </th>
                    <th className="font-extralight">
                      <p className="ml-12">{items.amount}</p>
                    </th>
                    <th className="font-extralight">{items.username}</th>
                    <th className="font-extralight">
                      <p className="ml-12">{items.status}</p>
                    </th>
                  </tr>
              );
            })}   
          </table>
        </Card>
      </div>
    </GeneralLayout>
  );
};
Balance.mainLayoutProps = {
  title: "Talents Valley Balance",
  pageDescription: "Balance page description",
  contentClassName: "!block !p-0",
};

export default Balance;
