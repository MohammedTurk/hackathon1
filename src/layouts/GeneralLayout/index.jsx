import { MainMenu } from "./components";

export const GeneralLayout = ({ children, rightSide }) => {
  return (
    <div>
      <MainMenu />
      <div className="ml-[90px] md:ml-[250px] xl:ml-[300px]  relative flex flex-col xl:flex-row gap-5 mt-24">
        <div className="w-full xl:w-[800px] order-2 xl:order-1 h-full ml-0   ">
          {children}
        </div>
        {rightSide && (
          <div className="w-[100%] xl:w-[600px] order-1 xl:order-2 xl:sticky  h-full lg:top-0   xl:right-0">
            {rightSide}
          </div>
        )}
      </div>
    </div>
  );
};
