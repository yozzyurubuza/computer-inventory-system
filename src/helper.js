//Insert refactored functions here
import { BUTTON_MENU } from "./config";

export const getButtonList = (account_type) => {
  const getButtons = BUTTON_MENU.find(
    (account) => account.account_type === account_type
  ).button_list;

  return getButtons;
};

export const getButtonFunction = (menuButton) => {
  const findFunction = menuButton.find(
    (button) => button.button_name === menuButton
  ).button_function;

  return findFunction;
};

export const formatKeysForThead = (object) => {
  const thead = Object.keys(object);
  const formatString = thead.map((text) => {
    let checkWord = text.includes("_") ? text.replace("_", " ") : text;

    //Check if word has "ID" in the second word
    if (checkWord.slice(-2) !== "id" && !checkWord.includes(" "))
      return checkWord[0].toUpperCase() + checkWord.slice(1);

    if (checkWord.slice(-2) !== "id" && checkWord.includes(" ")) {
      const splitWord = checkWord.split(" ");
      const setUpper = splitWord.map(
        (word) => word[0].toUpperCase() + word.slice(1)
      );
      return setUpper.join(" ");
    }

    if (checkWord.slice(-2) === "id")
      return (
        checkWord[0].toUpperCase() +
        checkWord.slice(1, -2) +
        checkWord.slice(-2).toUpperCase()
      );

    return checkWord;
  });

  return formatString;
};

export const getTableData = (object) => {
  const tdata = Object.values(object);

  return tdata;
};

export const identifyTable = (compName) => {
  const account_terms = ["Account", "Role"];
  const inventory_terms = ["Item", "Items"];

  if (compName.split(" ").some((term) => account_terms.includes(term)))
    return "Account";

  if (compName.split(" ").some((term) => inventory_terms.includes(term)))
    return "Inventory";

  return null;
};

export const searchFunctions = (e, compName, searchData) => {
  const identifier = identifyTable(compName);

  if (identifier === "Account") {
    const findData = searchData.find(
      (data) => data.username === e.target.search.value
    );
    return findData;
  }

  if (identifier === "Inventory") {
    const findData = searchData.find(
      (data) => data.item_name === e.target.search.value
    );
    return findData;
  }

  return null;
};
