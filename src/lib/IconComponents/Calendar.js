import React from "react";

const SvgCalendar = props => (
  <svg width={36} height={32} {...props}>
    <defs>
      <path
        d="M28 4.6c0 .008-.013.029-.013.037v.094c0 .02.003.038 0 .058-.002.02-.003.034-.008.057-.006.024-.016.063-.016.07v.022l-2.434 9.266c-.142.542-.646.921-1.223.921H8.976c-.577 0-1.08-.38-1.223-.92l-.252-.947-1.146-4.36-1.04-3.958-.656-2.497H1.263C.565 2.443 0 1.896 0 1.22 0 .547.565 0 1.263 0H5.64c.577 0 1.081.38 1.223.92l.657 2.499H26.906l.059.008.072.015h.022l.026.007.074.022.048.017.066.027.052.024.054.029.055.033.045.029.055.04.04.032.051.045.038.037.044.047.037.044.035.047.037.052.027.044.033.06.023.045c.009.021.019.047.027.063.007.015.012.029.018.048l.02.06.015.058c.003.018.007.031.01.055.005.023.011.052.011.068V4.6zM8.82 8.342H12.722l-.213-2.495H8.165l.655 2.495zm1.136 4.327h3.135l-.213-2.495H9.3l.655 2.495zm8.333 0l.216-2.495h-3.727l.213 2.495h3.298zm.37-4.327l.21-2.495h-4.464l.214 2.495h4.04zm4.665 4.327l.655-2.495h-3.577l-.213 2.495h3.135zm1.136-4.327l.656-2.495h-4.344l-.213 2.495h3.9zM22.158 21c-1.15 0-2.083-.902-2.083-2.015s.933-2.015 2.083-2.015c1.15 0 2.084.902 2.084 2.015-.002 1.11-.93 2.01-2.076 2.015h-.008zm-11.102 0c-1.15 0-2.083-.902-2.083-2.015s.932-2.015 2.083-2.015c1.15 0 2.083.902 2.083 2.015-.001 1.112-.933 2.014-2.083 2.015z"
        id="Calendar_svg__a"
      />
      <rect id="Calendar_svg__c" x={0} y={0} width={24} height={16} rx={4} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 7)">
        <mask id="Calendar_svg__b" fill="#fff">
          <use xlinkHref="#Calendar_svg__a" />
        </mask>
        <use fill="#FFF" xlinkHref="#Calendar_svg__a" />
        <g mask="url(#Calendar_svg__b)" fill="#FFF">
          <path d="M0-3.5h28v28H0z" />
        </g>
      </g>
      <g transform="translate(12)">
        <mask id="Calendar_svg__d" fill="#fff">
          <use xlinkHref="#Calendar_svg__c" />
        </mask>
        <use fill="#F86C06" xlinkHref="#Calendar_svg__c" />
        <g mask="url(#Calendar_svg__d)" fill="#F86C06">
          <path d="M0 0h24v16H0z" />
        </g>
      </g>
      <text
        fontFamily="Rubik-Medium, Rubik"
        fontSize={13}
        fontWeight={400}
        fill="#FFF"
        transform="translate(12)"
      >
        <tspan x={7.762} y={12}>
          {"0"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default SvgCalendar;