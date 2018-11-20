import React from "react";

const SvgIconAccordionExpandLarge = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M11 11V3.75c0-.414.333-.75.75-.75.414 0 .75.344.75.75V11h7.75c.414 0 .75.333.75.75 0 .414-.344.75-.75.75H12.5v7.75c0 .414-.333.75-.75.75a.755.755 0 0 1-.75-.75V12.5H3.75a.748.748 0 0 1-.75-.75c0-.414.344-.75.75-.75H11z"
        id="Icon_Accordion_Expand_-_large_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <mask id="Icon_Accordion_Expand_-_large_svg__b" fill="#fff">
        <use xlinkHref="#Icon_Accordion_Expand_-_large_svg__a" />
      </mask>
      <use fill="#009BDF" xlinkHref="#Icon_Accordion_Expand_-_large_svg__a" />
      <g mask="url(#Icon_Accordion_Expand_-_large_svg__b)" fill="#747981">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgIconAccordionExpandLarge;
