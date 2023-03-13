import { MainMenu } from "./components";

export const GeneralLayout = ({ children, rightSide }) => {
  return (
    <div>
      <MainMenu />
      <div className="ml-[300px]  relative flex gap-5">
        <div className="w-full xl:w-[60%] order-2 xl:order-1 h-full ml-0 mt-10 lg:mt-16">
          {children}
        </div>
        {rightSide && (
          <div className="w-[100%] xl:w-[40%] order-1 xl:order-2 xl:sticky  h-full lg:top-24 mt-16 xl:right-0">
            {rightSide}
          </div>
        )}
      </div>
    </div>
  );
};
