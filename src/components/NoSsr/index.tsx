import dynamic from "next/dynamic";
import type { NoSsrType } from "components/types";

const NoSsr: NoSsrType = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
