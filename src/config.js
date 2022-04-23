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

export const BUTTON_FUNCTIONS = [
  {
    button_name: "Activate Account",
    button_function() {
      console.log("Activate Account?....");
    },
  },
  {
    button_name: "Create Item",
    button_function() {
      console.log("Create Item?....");
    },
  },
  {
    button_name: "Update Item",
    button_function() {
      console.log("Update Item?....");
    },
  },
  {
    button_name: "Edit Item",
    button_function() {
      console.log("Edit Item?....");
    },
  },
  {
    button_name: "Delete Item",
    button_function() {
      console.log("Delete Item?....");
    },
  },
  {
    button_name: "Assign Role",
    button_function() {
      console.log("Assign Role?....");
    },
  },
  {
    button_name: "Upload Image to Item",
    button_function() {
      console.log("Upload Image to Item?....");
    },
  },
  {
    button_name: "View Inventory",
    button_function() {
      console.log("View Inventory?....");
    },
  },
  {
    button_name: "Logout",
    button_function() {
      console.log("Logging out....");
    },
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
  {
    item_id: 5,
    item_image: "",
    item_name: "Logitech Mouse",
    quantity: 10,
  },
  {
    item_id: 6,
    item_image: "",
    item_name: "Corsair Keyboard",
    quantity: 10,
  },
  {
    item_id: 7,
    item_image: "",
    item_name: "Asus Monitor",
    quantity: 10,
  },
  {
    item_id: 8,
    item_image: "",
    item_name: "Creative Speakers",
    quantity: 10,
  },
  {
    item_id: 9,
    item_image: "",
    item_name: "Lian Li Casing",
    quantity: 0,
  },
];
