import { CheckIconMini } from "lib/@heroicons";
import { classNames } from "utils";
import Triangle from "../svg/Triangle";
import type { StepType, Step as StepT } from "../types";

const completedBulletContent = <CheckIconMini className="w-4 h-4 text-white" />;
const getActiveBulletContent = (step: StepT) => (
  <div
    className={`h-3 w-3 rounded-full ${
      step.active && step.completed ? "bg-white" : "bg-indigo-700"
    }`}
  />
);

export const Step: StepType = ({
  step,
  className,
  bulletClassName,
  withArrow = false,
  isLastBullet = false,
  lastStep,
}) => {
  let stepBulletContent = null;
  let lastStepBulletContent = null;

  if (step.completed) {
    stepBulletContent = completedBulletContent;
  }

  if (step.active) {
    stepBulletContent = getActiveBulletContent(step);
  }

  if (lastStep.completed) {
    lastStepBulletContent = completedBulletContent;
  }
  if (lastStep.active) {
    lastStepBulletContent = getActiveBulletContent(lastStep);
  }

  const classes = {
    step: classNames(
      "flex-1 h-1 flex items-center",
      className,
      step.completed ? "bg-indigo-700" : ""
    ),
    bullet: classNames(
      "h-6 w-6 rounded-full shadow flex items-center justify-center relative",
      bulletClassName,
      step.completed ? "bg-indigo-700" : "bg-white"
    ),
    lastBullet: classNames(
      "h-6 w-6 rounded-full shadow flex items-center justify-center relative ml-auto -mr-6",
      lastStep.completed ? "bg-indigo-700" : "bg-white"
    ),
    stepInfo: classNames(
      "absolute top-8 shadow-[1px_1px_1px_0px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] px-2 py-1 rounded w-max max-w-[125px] text-xs font-medium text-center",
      step.active ? "bg-white text-indigo-700" : "bg-gray-50 text-gray-400"
    ),
    lastStepInfo: classNames(
      "absolute top-8 shadow-[1px_1px_1px_0px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] px-2 py-1 rounded w-max max-w-[125px] text-xs font-medium text-center",
      lastStep.active ? "bg-white text-indigo-700" : "bg-gray-50 text-gray-400"
    ),
    arrow: classNames(
      "absolute top-0 -mt-1 w-full right-0 left-0",
      step.active ? "text-white" : "text-gray-50"
    ),
  };

  return (
    <div className={classes.step}>
      <div className={classes.bullet}>
        {stepBulletContent}
        <div className={classes.stepInfo}>
          {withArrow && <Triangle className={classes.arrow} />}
          <p>{step.title}</p>
        </div>
      </div>
      {isLastBullet && (
        <div className={classes.lastBullet}>
          {lastStepBulletContent}
          <div className={classes.lastStepInfo}>
            {withArrow && <Triangle className={classes.arrow} />}
            <p>{lastStep.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step;
