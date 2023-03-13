import Card from "../Card";
import type { StepperContentType } from "../types";

export const Content: StepperContentType = ({ children, className }) => {
  return <Card className={` p-4 ${className ?? ""}`}>{children}</Card>;
};

export default Content;
