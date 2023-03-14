import { useRouter } from "next/router";
import { MainMenuData } from "data";
import { Link } from "components";
import {
  ArrowRightOnRectangleIconMini,
  Cog8ToothIconMini,
} from "lib/@heroicons";

export const MainMenu = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const classes = {
    aside:
      "w-[80px] md:w-[200px] xl:w-[250px]   fixed top-[60.64px] left-0 z-40 flex flex-col h-[calc(100vh-60.64px)] bg-white  md:bg-transparent",
    asideTitle:
      "ml-9 mb-5 text-lg hidden  md:block text-[#bbb] font-medium pt-[30px]",
    ulContainer: "flex flex-col h-full",
    link: "flex flex-col md:flex-row items-center  py-4 md:p-4 md:pl-10 text-base font-medium text-gray-dark hover:text-blue-light transition hover:bg-[#EAEEF2]   md:rounded-r-lg",
    linkIcon: "mx-auto md:mx-0  transition duration-75",
    linkName:
      "mx-auto md:ml-6 text-xs sm:text-base pt-2 md:pt-0  font-normal md:font-semibold",
  };
  return (
    <>
      <aside
        id="default-sidebar"
        className={classes.aside}
        aria-label="Sidebar"
      >
        <span className={classes.asideTitle}>Main Menu</span>
        <div className={classes.ulContainer}>
          <ul className="flex-1">
            {MainMenuData.map((item) => (
              <Link
                className={`${classes.link} ${
                  item.link === currentRoute
                    ? "bg-gray-light text-blue-light"
                    : "hover:text-blue-light"
                }`}
                href={item.link}
                key={item.id}
              >
                <span className={classes.linkIcon}>{item.icon}</span>
                <span className={classes.linkName}>{item.name}</span>
              </Link>
            ))}
          </ul>
          <ul className=" pb-20 ">
            <Link href="#" className={classes.link}>
              <span className={classes.linkIcon}>
                <Cog8ToothIconMini className="w-4 h-4 sm:h-5 sm:w-5 md:w-6 md:h-6" />
              </span>

              <span className={classes.linkName}>Settings</span>
            </Link>
            <Link href="#" className={classes.link}>
              <span className={classes.linkIcon}>
                <ArrowRightOnRectangleIconMini className="w-4 h-4 sm:h-5 sm:w-5 md:w-6 md:h-6" />
              </span>
              <span className={classes.linkName}>Log Out</span>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default MainMenu;
