import React, { ChangeEvent, FC } from "react";
import { StateType } from "./Main";

type PropsType = {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  state: StateType;
  getUserOnClick: () => void;
};

const AppForm: FC<PropsType> = ({
  input,
  handleInputChange,
  state,
  getUserOnClick,
}) => {
  return (
    <div className="app-form">
      <input
        onChange={handleInputChange}
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
        value={input}
      />
      <button
        onClick={getUserOnClick}
        disabled={state.disable}
        className={`app-form_btn ${state.disable ? "disabled" : ""}`}
      >
        Найти
      </button>
    </div>
  );
};

export default AppForm;
