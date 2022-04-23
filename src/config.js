//Insert user-defined constant values here

export const ACCOUNTS = [
  {
    username: "admin",
    password: "1234",
    activated: true,
    account_type: "admin",
  },
  {
    username: "user",
    password: "1234",
    activated: true,
    account_type: "user",
  },
  {
    username: "user1",
    password: "1234",
    activated: false,
    account_type: "user",
  },
];

export const BUTTON_MENU = [
  {
    account_type: "user",
    button_list: [
      "Register New User",
      "Update User",
      "View Inventory",
      "Logout",
    ],
  },
  {
    account_type: "admin",
    button_list: [
      "Activate Account",
      "Create Item",
      "Update Item",
      "Edit Item",
      "Delete Item",
      "Assign Role",
      "Upload Image to Item",
      "View Inventory",
      "Logout",
    ],
  },
];
