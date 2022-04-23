import { AvailableRFC } from '@utils/constants/locale';
import React, { FC } from 'react';
import { FlagCZ } from './FlagCZ';
import { FlagDE } from './FlagDE';
import { FlagDK } from './FlagDK';
import { FlagEE } from './FlagEE';
import { FlagGB } from './FlagGB';
import { FlagHU } from './FlagHU';
import { FlagIT } from './FlagIT';
import { FlagJP } from './FlagJP';
import { FlagMD } from './FlagMD';
import { FlagPL } from './FlagPL';
import { FlagRO } from './FlagRO';
import { FlagSE } from './FlagSE';
import { FlagSK } from './FlagSK';
import { FlagTR } from './FlagTR';
import { FlagUA } from './FlagUA';

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
  const lowerCaseLang = lang?.toLowerCase();
  if (lowerCaseLang in FLAG_MAP) {
    return React.createElement(FLAG_MAP[lowerCaseLang as AvailableRFC], { alt, ...props });
  }
  return null;
};
