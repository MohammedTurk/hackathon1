import { Card, Image } from "components";
import type { VerificationCardType } from "../../types";

export const VerificationCard: VerificationCardType = ({
  children,
  className,
  title,
  description,
  imgSrc,
  caption,
  ...rest
}) => {
  const cardClassName = `w-full max-w-[480px] relative py-8 px-6 min-[440px]:px-12 ${
    className || ""
  }`;

  return (
    <Card {...rest} className={cardClassName}>
      <h1 className="text-xl font-medium tracking-wider text-center">
        {title}
      </h1>
      {imgSrc && (
        <Image
          alt={title}
          src={imgSrc}
          width={60}
          height={60}
          className="m-auto my-4"
        />
      )}
      <div>
        {description && <p className="text-base my-4">{description}</p>}
        {children}
      </div>
      {caption && <p className="text-sm text-center mt-8">{caption}</p>}
    </Card>
  );
};

export default VerificationCard;
