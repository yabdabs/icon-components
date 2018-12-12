import React from "react";

const SvgPrint = props => (
  <svg viewBox="0 0 24 25" {...props}>
    <title>{"\n        Print\n    "}</title>
    <defs>
      <path
        className="Print_svg__path-01"
        d="M5 15.005H4v-2h16v2h-1v2h3v-8H2v8h3v-2zm12 0H7v7h10v-7zm-12 4H2.005A2.008 2.008 0 0 1 0 16.997V9.014c0-1.11.897-2.009 2.005-2.009H5V1.008c0-.554.454-1.003.99-1.003L14.449 0c.28 0 .66.154.866.36l3.327 3.342c.198.199.359.591.359.86v2.443h2.995c1.107 0 2.005.902 2.005 2.009v7.983c0 1.11-.897 2.008-2.005 2.008H19v4.005a1 1 0 0 1-1.007.995H6.007A1.008 1.008 0 0 1 5 23.01v-4.005zm2-17v5h10v-2.03h-2.486a.5.5 0 0 1-.492-.49v-2.48H7zm8 0v2h2l-2-2zm-7 18.5c0-.276.23-.5.5-.5h7c.276 0 .5.232.5.5 0 .276-.23.5-.5.5h-7a.505.505 0 0 1-.5-.5zm0-2c0-.276.23-.5.5-.5h7c.276 0 .5.232.5.5 0 .276-.23.5-.5.5h-7a.505.505 0 0 1-.5-.5zm0-2c0-.276.23-.5.5-.5h7c.276 0 .5.232.5.5 0 .276-.23.5-.5.5h-7a.505.505 0 0 1-.5-.5zm11.75-4.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-.75a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
        id="Print_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Print_svg__b">
        <use xlinkHref="#Print_svg__a" />
      </mask>
      <use xlinkHref="#Print_svg__a" />
      <g mask="url(#Print_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgPrint;
