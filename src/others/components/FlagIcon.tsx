import React, { FC } from "react";
import { ImgFlagCz } from "../../medias/images/UGT_Asset_FlagSelector_CZ";
import { ImgFlagDa } from "../../medias/images/UGT_Asset_FlagSelector_DA";
import { ImgFlagDe } from "../../medias/images/UGT_Asset_FlagSelector_DE";
import { ImgFlagEn } from "../../medias/images/UGT_Asset_FlagSelector_EN";
import { ImgFlagEt } from "../../medias/images/UGT_Asset_FlagSelector_ET";
import { ImgFlagHu } from "../../medias/images/UGT_Asset_FlagSelector_HU";
import { ImgFlagIt } from "../../medias/images/UGT_Asset_FlagSelector_IT";
import { ImgFlagJa } from "../../medias/images/UGT_Asset_FlagSelector_JA";
import { ImgFlagMo } from "../../medias/images/UGT_Asset_FlagSelector_MO";
import { ImgFlagPl } from "../../medias/images/UGT_Asset_FlagSelector_PL";
import { ImgFlagRo } from "../../medias/images/UGT_Asset_FlagSelector_RO";
import { ImgFlagSk } from "../../medias/images/UGT_Asset_FlagSelector_SK";
import { ImgFlagSv } from "../../medias/images/UGT_Asset_FlagSelector_SV";
import { ImgFlagTr } from "../../medias/images/UGT_Asset_FlagSelector_TR";
import { ImgFlagUk } from "../../medias/images/UGT_Asset_FlagSelector_UK";

export type AvailableFlag =
  | "cz"
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

export const FLAG_MAP = {
  cz: ImgFlagCz,
  da: ImgFlagDa,
  de: ImgFlagDe,
  en: ImgFlagEn,
  et: ImgFlagEt,
  hu: ImgFlagHu,
  it: ImgFlagIt,
  ja: ImgFlagJa,
  mo: ImgFlagMo,
  pl: ImgFlagPl,
  ro: ImgFlagRo,
  sk: ImgFlagSk,
  sv: ImgFlagSv,
  tr: ImgFlagTr,
  uk: ImgFlagUk,
};

export interface FlagProps extends React.SVGProps<SVGSVGElement> {
  lang: string;
  alt: string;
}

export const FlagIcon: FC<FlagProps> = ({ lang, alt, ...props }) => {
  if (lang in FLAG_MAP) {
    return React.createElement(FLAG_MAP[lang as AvailableFlag], { alt: alt, ...props });
  }
  return <></>;
};