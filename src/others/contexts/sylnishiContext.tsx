import React from "react";

export interface SylnishiContextI {
  displayAboutUsModal: boolean;
}

const defaultValue: SylnishiContextI = {
  displayAboutUsModal: false,
};

export interface SylnishiContextValue {
  currentValue: SylnishiContextI;
  updateValue: (values: { [x: string]: any }) => void;
}

const SylnishiContext = React.createContext<SylnishiContextValue>({
  currentValue: defaultValue,
  updateValue: () => {},
});

export function useSylnishiContext() {
  return React.useContext(SylnishiContext);
}

export const SylnishiContextProvider: React.FunctionComponent = ({ children }) => {
  const [currentValue, setCurrentValue] = React.useState<SylnishiContextI>(defaultValue);

  const updateValue = React.useCallback(
    (values: { [x: string]: any }) => {
      setCurrentValue({ ...currentValue, ...values,});
    },
    [currentValue, setCurrentValue]
  );

  return (
    <SylnishiContext.Provider value={{ currentValue, updateValue, }}>
      {children}
    </SylnishiContext.Provider>
  );
};
