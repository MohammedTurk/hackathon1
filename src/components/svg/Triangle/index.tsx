import type { SvgType } from "../../types";

export const Triangle: SvgType = (props) => {
  return (
    <svg
      width="16px"
      height="8px"
      viewBox="0 0 16 8"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="currentColor"
        fillRule="evenodd"
      >
        <g
          id="Progress-Bars"
          transform="translate(-322.000000, -198.000000)"
          fill="currentColor"
        >
          <g id="Group-4" transform="translate(310.000000, 198.000000)">
            <polygon id="Triangle" points="20 0 28 8 12 8" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Triangle;
