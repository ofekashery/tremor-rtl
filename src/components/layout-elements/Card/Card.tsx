import React from "react";

import {
  BaseColors,
  HorizontalPositions,
  VerticalPositions,
} from "lib/primitives";
import {
  Color,
  HorizontalPosition,
  MarginTop,
  MaxWidth,
  VerticalPosition,
} from "../../../lib";
import {
  border,
  borderRadius,
  boxShadow,
  classNames,
  defaultColors,
  getColorTheme,
  getColorVariantsFromColorThemeValue,
  parseHFullOption,
  parseMarginTop,
  parseMaxWidth,
  spacing,
} from "lib";

const parseDecorationAlignment = (decorationAlignment: string) => {
  if (!decorationAlignment) return "";
  switch (decorationAlignment) {
    case HorizontalPositions.Start:
      return border.lg.start;
    case VerticalPositions.Top:
      return border.lg.top;
    case HorizontalPositions.End:
      return border.lg.end;
    case VerticalPositions.Bottom:
      return border.lg.bottom;
    default:
      return "";
  }
};

export interface CardProps {
  hFull?: boolean;
  maxWidth?: MaxWidth;
  shadow?: boolean;
  decoration?: HorizontalPosition | VerticalPosition | "";
  decorationColor?: Color;
  marginTop?: MarginTop;
  children: React.ReactNode;
}

const Card = ({
  hFull = false,
  maxWidth = "max-w-none",
  shadow = true,
  decoration = "",
  decorationColor = BaseColors.Blue,
  marginTop = "mt-0",
  children,
}: CardProps) => {
  return (
    <div
      className={classNames(
        "tremor-base tr-relative tr-w-full tr-mx-auto tr-text-start tr-ring-1",
        parseMarginTop(marginTop),
        parseHFullOption(hFull),
        parseMaxWidth(maxWidth),
        getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
        shadow ? boxShadow.md : "",
        getColorVariantsFromColorThemeValue(
          getColorTheme(decorationColor).border
        ).borderColor,
        getColorVariantsFromColorThemeValue(defaultColors.lightBorder)
          .ringColor,
        parseDecorationAlignment(decoration),
        spacing.threeXl.paddingStart,
        spacing.threeXl.paddingEnd,
        spacing.threeXl.paddingTop,
        spacing.threeXl.paddingBottom,
        borderRadius.lg.all
      )}
    >
      {children}
    </div>
  );
};

export default Card;
