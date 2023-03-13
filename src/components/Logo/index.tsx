import Image from "../Image";
import type { LogoType } from "components/types";

export const Logo: LogoType = ({
  src = "/assets/img/logo.png",
  alt = "Talents Valley Logo",
  ...rest
}) => {
  return (
    <Image priority alt={alt} src={src} width={70} height={39} {...rest} />
  );
};

export default Logo;
