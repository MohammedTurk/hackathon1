import { Fragment } from "react";
import { Card, Button } from "components";
import { Completed } from "components/svg";
import { useVerificationMethods } from "../../hooks";
import { InformationCircleIcon } from "lib/@heroicons";

export const VerificationMethods = () => {
  const { verificationMethods, onMethodClick, canContinue, onContinue } =
    useVerificationMethods();

  const classNames = {
    methodCard:
      "flex justify-between items-center my-2 shadow-none border border-gray-200 bg-[#FBFBFB]",
    title: "text-sm font-medium leading-4",
  };

  const methods = verificationMethods.map((method) => {
    const methodStatus = method.status;
    let methodButtonText = "Verify";
    const disabledButton =
      methodStatus === "Pending" || methodStatus === "Verified";
    let buttonClassName = "min-w-[113px] border leading-4";
    if (methodStatus === "Pending") {
      buttonClassName +=
        " bg-white disabled:hover:bg-white !text-gray-dark border-gray disabled:opacity-100";
      methodButtonText = "Pending";
    } else if (methodStatus === "Verified") {
      buttonClassName +=
        " bg-white disabled:hover:bg-white !text-green-600 border-gray disabled:opacity-100";
      methodButtonText = "Verified";
    }

    const methodCard = (
      <Card key={method.id} className={classNames.methodCard}>
        <div>
          <p className={classNames.title}>
            {method.title}{" "}
            {methodStatus === "Rejected" && (
              <span className="text-xs text-red inline-flex items-center">
                ({methodStatus}) <InformationCircleIcon className="w-5 h-5" />
              </span>
            )}
          </p>
          <span className="text-xs">{method.caption}</span>
        </div>
        <Button
          buttonSize="small"
          className={buttonClassName}
          disabled={disabledButton}
          onClick={() => onMethodClick(method.url)}
          loading={method.loading}
        >
          <span className="inline-flex justify-center items-center gap-1">
            {methodStatus === "Verified" && <Completed />}
            {methodButtonText}
          </span>
        </Button>
      </Card>
    );

    if (method.id === 3) {
      return (
        <Fragment key={method.id}>
          <p className="text-xs mt-6 flex justify-between items-center">
            You can complete the 2 following tasks later
            <InformationCircleIcon className="w-5 h-5" title="Mohammed Jaber" />
          </p>
          {methodCard}
        </Fragment>
      );
    } else {
      return methodCard;
    }
  });

  return (
    <>
      {methods}
      <Button
        fullWidth
        className="mt-8"
        disabled={!canContinue}
        onClick={onContinue}
      >
        Continue
      </Button>
    </>
  );
};

export default VerificationMethods;
