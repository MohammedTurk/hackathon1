import { Logo, Link } from "components";
import { URL_PATHS } from "data";
import NavLinks from "../NavLinks";
import { useCurrentUser } from "features/authentication";
import {UserCircleIconOutline} from "lib/@heroicons"

export const Navbar = () => {
  const {user} = useCurrentUser()
  return (
    <nav className="flex justify-between items-center bg-white py-2 px-6 shadow-md">
      <Link href={URL_PATHS.HOME}>
        <div className="inline-flex items-center">
          <Logo className="cursor-pointer" />
          <span className="text-base font-medium tracking-wider text-center ml-2">
            Talents Valley
          </span>
        </div>
      </Link>
      <div className="flex items-center">
      <UserCircleIconOutline className="w-12 pr-3 text-[#707070]" />
      <p className="text-base text-[#707070] font-semibold">
        {user?.firstName} {user?.lastName}
          <p className="text-sm text-[#8C8C8C] font-normal	">
          {user?.email}
          </p>
      </p>
      </div>
      {/* <NavLinks /> */}
    </nav>
  );
};
