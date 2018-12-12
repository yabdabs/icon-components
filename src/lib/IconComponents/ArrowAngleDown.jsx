import React from "react";

const SvgArrowAngleDown = props => (
  <svg viewBox="0 0 24 27" {...props}>
    <title>{"\n        Arrow Angle Down\n    "}</title>
    <defs>
      <path
        className="Arrow-Angle-Down_svg__path-01"
        d="M16 3h3v12.502c0 .827-.666 1.498-1.5 1.498-.828 0-1.5-.675-1.5-1.498V6H6.498A1.495 1.495 0 0 1 5 4.5C5 3.672 5.675 3 6.498 3H16z"
        id="Arrow-Angle-Down_svg__a"
      />
    </defs>
    <g transform="translate(0 .1)" fillRule="evenodd">
      <mask id="Arrow-Angle-Down_svg__b">
        <use xlinkHref="#Arrow-Angle-Down_svg__a" />
      </mask>
      <use
        transform="scale(1 -1) rotate(-45 -12.142 0)"
        xlinkHref="#Arrow-Angle-Down_svg__a"
      />
      <g mask="url(#Arrow-Angle-Down_svg__b)">
        <rect width={24} height={24} transform="translate(0 2)" />
      </g>
    </g>
  </svg>
);

export default SvgArrowAngleDown;
