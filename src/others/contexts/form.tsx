import React from "react";
import { ID } from "./api";

export interface FormData {
  people: {
    adults: number;
    children: number;
    infants: number;
  };
  location?: ID;
  supplies: ID[];
}

export interface FormContextValue {
  currentValue: FormData;
  updateValue: (values: { [x: string]: any }) => void;
  clearStore: () => void;
}

export const PEOPLE_TYPES: { key: "adults" | "children" | "infants"; explanation_key: string }[] = [
  {
    key: "adults",
    explanation_key: "adults_details",
  },
  {
    key: "children",
    explanation_key: "children_details",
  },
  {
    key: "infants",
    explanation_key: "infants_details",
  },
];

const defaultValue: FormData = {
  people: {
    adults: 0,
    children: 0,
    infants: 0,
  },
  supplies: [],
};

const FormContext = React.createContext<FormContextValue>({
  currentValue: defaultValue,
  updateValue: () => {},
  clearStore: () => {},
});

export function useFormValue() {
  return React.useContext(FormContext);
}

export const FormContextProvider: React.FunctionComponent = ({ children }) => {
  const [currentValue, setCurrentValue] = React.useState<FormData>(defaultValue);

  const updateValue = React.useCallback(
    (values: { [x: string]: any }) => {
      setCurrentValue({
        ...currentValue,
        ...values,
        people: {
          ...currentValue.people,
          ...values.people,
        },
      });
    },
    [currentValue, setCurrentValue]
  );

  const clearStore = React.useCallback(() => {
    setCurrentValue(defaultValue);
  }, [setCurrentValue]);

  return (
    <FormContext.Provider
      value={{
        currentValue,
        updateValue,
        clearStore,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
