import { Logo, Link } from "components";
import { URL_PATHS } from "data";
import NavLinks from "../NavLinks";

export const Navbar = () => {
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
      {/* <NavLinks /> */}
    </nav>
  );
};
