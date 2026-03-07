export const pageLoad = () => {
  const heroImage = document.createElement("img");
  heroImage.classList.add("hero-img");
  heroImage.src =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
  heroImage.alt = "Restaurant interior";

  const welcomeText = document.createElement("h2");
  welcomeText.innerText = "Welcome to Rustic Table";

  const paragraph_1 = document.createElement("p");
  paragraph_1.innerText = `Rustic Table is a small neighborhood restaurant focused on simple, seasonal food cooked with care. Our kitchen combines traditional techniques with fresh local ingredients.`;

  const paragraph_2 = document.createElement("p");
  paragraph_2.innerText = `Whether you're joining us for a quiet dinner, a family gathering, or a late evening glass of wine, we aim to make every visit feel warm and memorable.`;

  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(heroImage);
  contentContainer.appendChild(welcomeText);
  contentContainer.appendChild(paragraph_1);
  contentContainer.appendChild(paragraph_2);
};
