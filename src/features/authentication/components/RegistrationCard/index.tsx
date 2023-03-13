import { useRouter } from "next/router";
import { Card, Logo, IconButton } from "components";
import { ChevronLeftIconMini } from "lib/@heroicons";
import type { RegistrationCardType } from "../../types";

export const RegistrationCard: RegistrationCardType = ({
  children,
  className,
  formTitle,
  formCaption,
  withBackButton = false,
  ...rest
}) => {
  const router = useRouter();
  const cardClassName = `w-full max-w-[400px] relative py-8 px-6 min-[440px]:px-12 ${
    className || ""
  }`;

  return (
    <Card {...rest} className={cardClassName}>
      {withBackButton && (
        <IconButton
          onClick={() => router.back()}
          className="absolute top-10 sm:left-9"
        >
          <ChevronLeftIconMini />
        </IconButton>
      )}
      <Logo className="m-auto" />
      <h1 className="text-base font-medium tracking-wider text-center">
        Talents Valley
      </h1>
      <div>
        {formTitle && <h6 className="text-xl my-4">{formTitle}</h6>}
        {children}
      </div>
      {formCaption && <p className="text-sm text-center mt-8">{formCaption}</p>}
    </Card>
  );
};

export default RegistrationCard;
