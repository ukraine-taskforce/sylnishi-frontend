import React from "react";
import { useTranslation } from "react-i18next";

export function useShare() {
  const { t } = useTranslation();

  const share = React.useCallback(() => {
    if (isShareSupported()) {
      navigator.share({
        title: t("share_title"),
        text: t("share_text"),
        url: window.location.origin,
      });
    }
  }, [t]);

  return { share };
}

export function isShareSupported(): boolean {
  return Boolean(navigator.share);
}
