import React from "react";
import { v4 as uuid } from "uuid";
import { useSubmitTracking } from "./api";

function getClientID(): string {
  const clientID = localStorage.getItem("clientID");
  // generate new id if browser unseen
  if (clientID == null) {
    const newClientID = uuid();
    localStorage.setItem("clientID", newClientID);
    return newClientID;
  }
  return clientID;
}

export interface TrackingData {
  clientID: string;
  lang: string | null;
  shared: boolean;
  about: boolean;
  service: string | null;
}

const defaultTrackingData: TrackingData = {
  clientID: getClientID(),
  lang: null,
  shared: false,
  about: false,
  service: null,
};

export interface TrackingContextValue {
  currentValue: TrackingData;
  updateValue: (values: Partial<TrackingData>) => void;
  submit: (update?: Partial<TrackingData>) => void;
}

const TrackingContext = React.createContext<TrackingContextValue>({
  currentValue: defaultTrackingData,
  updateValue: () => {},
  submit: () => {},
});

export function useTrackingValue() {
  return React.useContext(TrackingContext);
}

export const TrackingContextProvider: React.FC = ({ children }) => {
  const [currentValue, setCurrentValue] = React.useState<TrackingData>(defaultTrackingData);
  const { mutateAsync: mutate } = useSubmitTracking();
  // const { Track } = useTracking({ ...currentValue });

  const updateValue = React.useCallback(
    (values: Partial<TrackingData>) => {
      setCurrentValue({ ...currentValue, ...values });
    },
    [currentValue, setCurrentValue]
  );

  const submit = React.useCallback(
    async (update: Partial<TrackingData> = {}) => {
      const updated = { ...currentValue, ...update };
      await mutate(updated);
      setCurrentValue({ ...defaultTrackingData });
    },
    [currentValue, mutate]
  );

  return (
    <TrackingContext.Provider
      value={{
        currentValue,
        updateValue,
        submit,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
};
