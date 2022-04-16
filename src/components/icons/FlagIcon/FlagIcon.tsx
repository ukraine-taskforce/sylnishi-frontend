import React, { FC } from "react";
import { FlagCZ } from "./FlagCZ";
import { FlagDK } from "./FlagDK";
import { FlagDE } from "./FlagDE";
import { FlagGB } from "./FlagGB";
import { FlagEE } from "./FlagEE";
import { FlagHU } from "./FlagHU";
import { FlagIT } from "./FlagIT";
import { FlagJP } from "./FlagJP";
import { FlagMD } from "./FlagMD";
import { FlagPL } from "./FlagPL";
import { FlagRO } from "./FlagRO";
import { FlagSK } from "./FlagSK";
import { FlagSE } from "./FlagSE";
import { FlagTR } from "./FlagTR";
import { FlagUA } from "./FlagUA";

export type AvailableRFC =
  | "cs"
  | "da"
  | "de"
  | "en"
  | "et"
  | "hu"
  | "it"
  | "ja"
  | "mo"
  | "pl"
  | "ro"
  | "sk"
  | "sv"
  | "tr"
  | "uk";

export type AvailableISO =
  | "cz"
  | "dk"
  | "de"
  | "gb"
  | "ee"
  | "hu"
  | "it"
  | "jp"
  | "md"
  | "pl"
  | "ro"
  | "sk"
  | "se"
  | "tr"
  | "ua";

export const ISO2RFC = {
  cz: "cs",
  dk: "da",
  de: "de",
  gb: "en",
  ee: "et",
  hu: "hu",
  it: "it",
  jp: "ja",
  md: "mo",
  pl: "pl",
  ro: "ro",
  sk: "sk",
  se: "sv",
  tr: "tr",
  ua: "uk",
};

export const FLAG_MAP = {
  cs: FlagCZ,
  da: FlagDK,
  de: FlagDE,
  en: FlagGB,
  et: FlagEE,
  hu: FlagHU,
  it: FlagIT,
  ja: FlagJP,
  mo: FlagMD,
  pl: FlagPL,
  ro: FlagRO,
  sk: FlagSK,
  sv: FlagSE,
  tr: FlagTR,
  uk: FlagUA,
};

export interface FlagProps extends React.SVGProps<SVGSVGElement> {
  lang: string;
  alt: string;
}

export const FlagIcon: FC<FlagProps> = ({ lang, alt, ...props }) => {
  lang = lang?.toLowerCase();
  if (lang in FLAG_MAP) {
    return React.createElement(FLAG_MAP[lang as AvailableRFC], { alt: alt, ...props });
  }
  return <></>;
};
