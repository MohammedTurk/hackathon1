import { Link } from "components";
import { URL_PATHS } from "data";

const NavLinks = () => {
  return (
    <div>
      <Link
        href={URL_PATHS.HOME}
        className="px-6 transition-colors hover:text-blue"
      >
        Home
      </Link>
      <Link
        href={URL_PATHS.INVOICES.INDEX}
        className="px-6 transition-colors hover:text-blue"
      >
        Invoices
      </Link>
      <Link
        href={URL_PATHS.INVOICES.CREATE}
        className="px-6 py-1 text-blue border rounded-full border-blue transition-colors hover:bg-blue hover:text-white"
      >
        Create
      </Link>
    </div>
  );
};

export default NavLinks;
