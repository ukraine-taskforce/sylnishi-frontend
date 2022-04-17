import { Button } from "@components/controls/Button/Button";
import { FlagIcon } from "@components/icons/FlagIcon/FlagIcon";
import { Card } from "@components/views/Card/Card";
import { ImgDropdown } from "@medias/images/UGT_Asset_UI_Dropdown";
import { ImgDropdownUp } from "@medias/images/UGT_Asset_UI_Dropdown_up";
import React from "react";
import { useTranslation } from "react-i18next";
import { AvailableLang, availableLangs, storeLanguage } from "../../../contexts/i18n";
import styles from "./LanguageSelector.module.css";

export interface LanguageSelectorProps {}

const Flag = ({ lang, className }: { lang: AvailableLang; className?: string }) => {
  const [label, alt] = lang === "uk" ? ["UA", "ukrainian"] : ["EN", "english"];
  return (
    <React.Fragment>
      <FlagIcon lang={lang} alt={alt} className={className} />
      <span>{label}</span>
    </React.Fragment>
  );
};

function useOutsideClick(ref: React.RefObject<HTMLElement>, onClick: () => void) {
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    };
    document.addEventListener("click", handleClickOutside, { capture: true });
    return () => {
      document.removeEventListener("click", handleClickOutside, { capture: true });
    };
  }, [ref, onClick]);
}

export const LanguageSelector: React.FunctionComponent<LanguageSelectorProps> = () => {
  const { i18n } = useTranslation();

  const [expanded, setExpanded] = React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setExpanded(false));

  const currentLang = i18n.language as AvailableLang;

  const selectLang = (lang: string) => {
    i18n.changeLanguage(lang);
    storeLanguage(lang as AvailableLang);
    // selection is closed by propagating to the root div
  };

  const toggleExpand = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div ref={ref} className={styles.selector} onClick={toggleExpand}>
      <Button className={`${styles.langCard} ${expanded ? styles.activeBorder : ""}`}>
        <Flag className={styles.flagIcon} lang={currentLang} />
        {expanded ? (
          <ImgDropdownUp
            className={styles.dropdownIcon}
            alt=""
            fill="var(--color-secondary-dark)"
          />
        ) : (
          <ImgDropdown className={styles.dropdownIcon} alt="" fill="var(--color-secondary-dark)" />
        )}
      </Button>
      {expanded && (
        <Card className={styles.dropdown}>
          {availableLangs
            // .filter((lang) => lang !== currentLang)
            .map((lang) => {
              return (
                <React.Fragment key={lang}>
                  <Button
                    className={styles.dropdownItem}
                    fullWidth
                    variant="white"
                    onClick={() => selectLang(lang)}
                  >
                    <Flag className={styles.flagIcon} lang={lang as AvailableLang} />
                  </Button>
                  <hr className={styles.divider}></hr>
                </React.Fragment>
              );
            })}
        </Card>
      )}
    </div>
  );
};
