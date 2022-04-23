//Insert refactored functions here
import { BUTTON_FUNCTIONS, BUTTON_MENU } from "./config";

export const getButtonList = (account_type) => {
  const getButtons = BUTTON_MENU.find(
    (account) => account.account_type === account_type
  ).button_list;

  return getButtons;
};

export const getButtonFunction = (menuButton) => {
  const findFunction = BUTTON_FUNCTIONS.find(
    (button) => button.button_name === menuButton
  ).button_function;

  return findFunction;
};
