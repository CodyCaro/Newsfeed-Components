/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

class Menu {
  constructor(menu) {
    this.menuProperty = menu;

    this.menuListItems = menu.querySelectorAll("li");

    for (let i = 0; i < this.menuListItems.length; i++) {
      this.menuListItems[i].textContent = menuItems[i];
    }

    this.menuButton = document.querySelector(".menu-button");

    this.menuButton.addEventListener("click", () => {
      this.menuProperty.classList.toggle("menu--open");
    });
  }
}

const newMenu = () => {
  const header = document.querySelector(".header");

  const newMenu = document.createElement("div");
  newMenu.classList.add("menu");

  const newList = document.createElement("ul");
  newMenu.appendChild(newList);

  let listItems = [];

  for (let i = 0; i < menuItems.length; i++) {
    listItems.push(document.createElement("li"));
    newList.appendChild(listItems[i]);
  }

  header.appendChild(newMenu);
  return newMenu;
};

const menuObject = new Menu(newMenu());
