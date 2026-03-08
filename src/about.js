export const pageLoadAbout = () => {
  const content = document.querySelector("#content");

  const aboutPage = document.createElement("div");
  aboutPage.classList.add("about-page");

  const title = document.createElement("h2");
  title.textContent = "About Us";

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Rustic Table was founded with a simple idea: serve honest food made from fresh ingredients in a welcoming environment.";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Our kitchen focuses on seasonal produce, traditional techniques, and a relaxed dining experience where people can slow down and enjoy a meal together.";

  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-info");

  const locationTitle = document.createElement("h3");
  locationTitle.textContent = "Location";

  const locationLine1 = document.createElement("p");
  locationLine1.textContent = "123 Market Street";

  const locationLine2 = document.createElement("p");
  locationLine2.textContent = "Foodville, CA";

  const hoursTitle = document.createElement("h3");
  hoursTitle.textContent = "Hours";

  const hoursLine1 = document.createElement("p");
  hoursLine1.textContent = "Monday – Friday: 12:00 – 22:00";

  const hoursLine2 = document.createElement("p");
  hoursLine2.textContent = "Saturday – Sunday: 10:00 – 23:00";

  const contactTitle = document.createElement("h3");
  contactTitle.textContent = "Contact";

  const phone = document.createElement("p");
  phone.textContent = "Phone: (555) 123-4567";

  const email = document.createElement("p");
  email.textContent = "Email: hello@rustictable.com";

  contactSection.append(
    locationTitle,
    locationLine1,
    locationLine2,
    hoursTitle,
    hoursLine1,
    hoursLine2,
    contactTitle,
    phone,
    email,
  );

  aboutPage.append(title, paragraph1, paragraph2, contactSection);

  content.appendChild(aboutPage);
};
