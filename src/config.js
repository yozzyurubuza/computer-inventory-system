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

export const INVENTORY_LIST = [
  {
    item_id: 0,
    item_image: "",
    item_name: "Mouse",
    quantity: 10,
  },
  {
    item_id: 1,
    item_image: "",
    item_name: "Keyboard",
    quantity: 10,
  },
  {
    item_id: 2,
    item_image: "",
    item_name: "Monitor",
    quantity: 10,
  },
  {
    item_id: 3,
    item_image: "",
    item_name: "Speakers",
    quantity: 10,
  },
  {
    item_id: 4,
    item_image: "",
    item_name: "Casing",
    quantity: 0,
  },
];
