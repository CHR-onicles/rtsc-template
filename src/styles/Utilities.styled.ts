import { css, keyframes } from "styled-components";

/**
 * Helper function to convert from px to rem (1rem = 16px by browser default).
 * @param value number representing pixels.
 * @param omitUnit flag representing whether "rem" units should be ignored.
 * @returns string containing rem equivalent of pixel value.
 */
export const rem = (value: number, omitUnit = false) => {
  return value === 0 ? "0" : `${value / 16}${omitUnit === true ? "" : "rem"}`;
};

/**
 * Helper function to add alpha values to hex and hsl colors.
 * @param color string representing color in hex or hsl.
 * @param opacity number representing level of opacity.
 * @returns string containing color with modified opacity.
 */
export const alpha = (color: string, opacity = 1) => {
  const hex_pattern = /^#([A-Fa-f0-9]{6})$/;
  const hsl_pattern =
    /hsl\(\s*([0-2]?[0-9]{1,2}|3[0-5][0-9]|360)\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*(0|[1-9][0-9]?|100)%\s*\)/; // chose to be explicit on the digits to prevent evaluating wrong digits
  const hsl_pattern_with_opacity =
    /hsla?\(\s*([0-2]?[0-9]{1,2}|3[0-5][0-9]|360)\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*(0|[1-9][0-9]?|100)%\s*,\s*0(\.\d+)?|1\s*\)/;
  let newColor = "";

  if (opacity < 0 || opacity > 1) {
    throw new Error("Opacity must be between 0 and 1 inclusive");
  }
  const formatted_opacity = +String(opacity).padStart(3, "0");

  if (color.includes("#")) {
    if (!hex_pattern.test(color))
      throw new Error(
        "Invalid hexadecimal - Value provided must follow the 6-character syntax (#FFFFFF)"
      );
    else
      return `${color}${Math.floor(formatted_opacity * 255)
        .toString(16)
        .padStart(2, "0")}`;
  }

  if (hsl_pattern.test(color)) {
    newColor = color.slice(0, color.length - 1) + `,${formatted_opacity})`;
  } else if (hsl_pattern_with_opacity.test(color)) {
    const temp = color.split(",");
    newColor = temp.reduce((acc, item, index) => {
      if (index === temp.length - 1) return `${acc},${String(opacity)})`;
      if (index > 0) return acc + "," + item;
      else return acc + item;
    }, "");
  }

  // console.log(newColor, color);
  if (!newColor)
    throw new Error(
      `Invalid color provided(${newColor}) - only hex and hsl are supported`
    ); // ignore rgb - might as well make it hsl :)
  return newColor;
};

// Breakpoints (mobile up)
export const bp = {
  small: `${rem(768, true)}em`,
  medium: `${rem(1024, true)}em`,
  large1: `${rem(1200, true)}em`,
  large2: `${rem(1440, true)}em`,
  large3: `${rem(1600, true)}em`,
  large4: `${rem(1920, true)}em`,
  extreme: `${rem(2100, true)}em`,
};

// Media queries
export const mq = {
  small: `(min-width: ${bp.small})`,
  medium: `(min-width: ${bp.medium})`,
  large1: `(min-width: ${bp.large1})`,
  large2: `(min-width: ${bp.large2})`,
  large3: `(min-width: ${bp.large3})`,
  large4: `(min-width: ${bp.large4})`,
  extreme: `(min-width: ${bp.extreme})`,
};

// export const theme = {
//   colors: {
//     primary400: "",

//     // NEUTRAL
//     white: "hsl(0, 0%, 100%)",
//     black: "hsl(0, 0%, 0%)",
//     gray100: "	hsl(220, 23%, 97%)",
//     gray200: "hsl(0, 0%, 77%)",
//     gray300: "hsl(0, 0%, 50%)",
//     gray700: "hsl(0, 0%, 12%)",
//   },
//   fonts: {
//     primary: `'Poppins', sans-serif`,
//     accent: `serif`,
//   },
//   ease: {
//     // easing functions
//     slowStart: "cubic-bezier(0.52, 0.01, 0, 1)",
//     quickStartAndEnd: "cubic-bezier(0.19, 1, 0.22, 1)",
//     almostLinear: "cubic-bezier(0.4,0.6,0.6,1)",
//     textReveal: "cubic-bezier(0.77, 0, 0.175, 1)",
//   },
//   borderRadius: {
//     small: rem(5),
//     medium: rem(10),
//     large: rem(15),
//   },
// };

/*********************************************************************
CSS UTILITIES (similar to Sass mixins)
**********************************************************************/
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const alignItemsCenter = css`
  display: flex;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexSpBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const gridCenter = css`
  display: grid;
  place-items: center;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const pseudo = css`
  content: "";
  position: absolute;
`;

export const size = (width: string, height = width) => css`
  width: ${width};
  height: ${height};
`;

export const circle = (circleSize: string) => css`
  ${size(circleSize)}
  border-radius: 50%;
`;

export const media = (bp: string) => `@media screen and (min-width: ${bp})`;

export const revealFromBottom = keyframes`
  to {
    transform: translateY(0%) skewY(0);
}
`;
