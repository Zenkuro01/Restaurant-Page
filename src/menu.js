const menuData = {
  starters: [
    {
      name: "Roasted Tomato Soup",
      description: "Slow roasted tomatoes, garlic, basil, and olive oil.",
      price: "6",
    },
    {
      name: "Bruschetta",
      description: "Grilled bread topped with tomatoes and balsamic glaze.",
      price: "7",
    },
  ],

  mains: [
    {
      name: "Grilled Chicken",
      description: "Herb-marinated chicken breast with roasted vegetables.",
      price: "16",
    },
    {
      name: "Creamy Mushroom Pasta",
      description: "Fresh pasta with mushrooms, cream, garlic and parmesan.",
      price: "15",
    },
  ],

  desserts: [
    {
      name: "Tiramisu",
      description: "Espresso-soaked ladyfingers layered with mascarpone cream.",
      price: "8",
    },
  ],
};

export const pageLoadMenu = () => {
  const content = document.querySelector("#content");

  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");

  const title = document.createElement("h2");
  title.textContent = "Our Menu";

  const intro = document.createElement("p");
  intro.classList.add("menu-intro");
  intro.textContent =
    "A selection of simple dishes made with fresh ingredients and classic techniques.";

  menuPage.append(title, intro);

  for (const category in menuData) {
    const section = document.createElement("section");
    section.classList.add("menu-category");

    const heading = document.createElement("h3");
    heading.textContent = category;

    section.appendChild(heading);

    menuData[category].forEach((dish) => {
      const item = document.createElement("div");
      item.classList.add("menu-item");

      const name = document.createElement("h4");
      name.textContent = dish.name;

      const description = document.createElement("p");
      description.textContent = dish.description;

      const price = document.createElement("span");
      price.classList.add("price");
      price.textContent = dish.price;

      item.append(name, description, price);
      section.appendChild(item);
    });

    menuPage.appendChild(section);
  }

  content.appendChild(menuPage);
};
