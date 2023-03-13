import NextLink from "next/link";
import type { LinkType } from "components/types";

export const Link: LinkType = ({ children, ...rest }) => {
  return <NextLink {...rest}>{children}</NextLink>;
};

export default Link;
