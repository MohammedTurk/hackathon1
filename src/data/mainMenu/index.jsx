import {
    HomeIconOutline,
    QuestionMarkCircleIconOutline,
    InformationCircleIcon,
    EyeIconMini,
  } from "lib/@heroicons";
  import { Invoices, Withdraw, Contact } from "components/svg";
  import { URL_PATHS } from "data/routes";
  export const MainMenuData = [
    {
      id: 1,
      name: "Home",
      icon: <HomeIconOutline className="w-4 h-4 sm:h-5 sm:w-5 md:w-6 md:h-6" />,
      link: URL_PATHS.HOME,
    },
    {
      id: 2,
      name: "Invoices",
      icon: <Invoices className="w-4 h-4 sm:h-5 sm:w-5 md:w-6 md:h-6" />,
      link: URL_PATHS.INVOICES.INDEX,
    },
    {
      id: 3,
      name: "Withdraw",
      icon: <Withdraw className="w-4 h-4 sm:h-5 sm:w-5 md:w-6 md:h-6" />,
      link: "#",
    },
    {
      id: 4,
      name: "Contacts",
      icon: <Contact className="w-4 h-4 sm:h-5 sm:w-5 md:w-6 md:h-6" />,
      link: "#",
    },
    {
      id: 5,
      name: "Help",
      icon: <QuestionMarkCircleIconOutline className="w-4 h-4 md:w-6 md:h-6" />,
      link: "#",
    },
  ];
  