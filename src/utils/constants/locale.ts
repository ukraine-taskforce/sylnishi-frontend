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

export const RFC2ISO = {
  cs: "cz",
  da: "dk",
  de: "de",
  en: "gb",
  et: "ee",
  hu: "hu",
  it: "it",
  ja: "jp",
  mo: "md",
  pl: "pl",
  ro: "ro",
  sk: "sk",
  sv: "se",
  tr: "tr",
  uk: "ua",
};
