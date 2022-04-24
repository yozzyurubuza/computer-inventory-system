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

  {
    username: "user2",
    password: "1234",
    activated: false,
    account_type: "user",
  },

  {
    username: "user3",
    password: "1234",
    activated: false,
    account_type: "user",
  },

  {
    username: "user4",
    password: "1234",
    activated: false,
    account_type: "user",
  },
  {
    username: "myuser",
    password: "1234",
    activated: false,
    account_type: "user",
  },
];

export const BUTTON_MENU = [
  {
    account_type: "user",
    button_list: ["Update User Details", "View Inventory", "Logout"],
  },
  {
    account_type: "admin",
    button_list: [
      "Activate Account",
      "Activate Inventory Items",
      "Create Item",
      "Update Item",
      "Edit Item",
      "Delete Item",
      "Assign Role",
      "Upload Image to Item",
      "View Inventory",
      "View User List",
      "Logout",
    ],
  },
];

export const INVENTORY_LIST = [
  {
    item_id: 0,
    item_image: "",
    item_name: "Mouse",
    active: true,
    quantity: 10,
  },
  {
    item_id: 1,
    item_image: "",
    item_name: "Keyboard",
    active: true,
    quantity: 10,
  },
  {
    item_id: 2,
    item_image: "",
    item_name: "Monitor",
    active: true,
    quantity: 10,
  },
  {
    item_id: 3,
    item_image: "",
    item_name: "Speakers",
    active: true,
    quantity: 10,
  },
  {
    item_id: 4,
    item_image: "",
    item_name: "Casing",
    active: true,
    quantity: 0,
  },
  {
    item_id: 5,
    item_image: "",
    item_name: "Logitech Mouse",
    active: true,
    quantity: 10,
  },
  {
    item_id: 6,
    item_image: "",
    item_name: "Corsair Keyboard",
    active: true,
    quantity: 10,
  },
  {
    item_id: 7,
    item_image: "",
    item_name: "Asus Monitor",
    active: true,
    quantity: 10,
  },
  {
    item_id: 8,
    item_image: "",
    item_name: "Creative Speakers",
    active: false,
    quantity: 10,
  },
  {
    item_id: 9,
    item_image: "",
    item_name: "Lian Li Casing",
    active: false,
    quantity: 0,
  },
];

export const DISPLAY_ACTION = [
  {
    action_name: "Activate Account",
    display() {
      return (
        <select name="activate">
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      );
    },
  },
];
