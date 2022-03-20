import React from "react";
import { Button } from "./Button";
import { Text } from "./Text";
import styles from "./ActionList.module.css";

export interface Action {
  title: string;
  leading?: React.ReactChild;
  trailing: React.ReactChild;
  onAction(): void;
}

export interface ActionListProps {
  title: string;
  actions: Action[];
}

export const ActionList: React.FunctionComponent<ActionListProps> = ({ title, actions }) => {
  return (
    <>
      <Text className={styles.title}>{title}</Text>
      {actions.map((action) => (
        <Button
          key={action.title}
          fullWidth
          className={styles.actionButton}
          leadingIcon={action.leading}
          trailingIcon={action.trailing}
          onClick={action.onAction}
        >
          {action.title}
        </Button>
      ))}
    </>
  );
};
