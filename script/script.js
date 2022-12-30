"use strict";

const dietContainer = document.querySelector(".diet-container");

// Diet objects
const standardDiet = {
  name: "Standard",
  imgUrl: "standard.jpg",
  protein: 20,
  fats: 25,
  carbo: 55,
  kcal: "1400 - 2600",
  meals: "3 - 5",
  rating: 4.7,
  ratingQuantity: 218,
  price: "44,47",
};

const ketoDiet = {
  name: "Keto",
  imgUrl: "keto.png",
  protein: 15,
  fats: 80,
  carbo: 5,
  kcal: "1200 - 2800",
  meals: "3 - 5",
  rating: 4.9,
  ratingQuantity: 442,
  price: "50,84",
};

const wegeDiet = {
  name: "Wege",
  imgUrl: "vege.jpg",
  protein: 15,
  fats: 30,
  carbo: 55,
  kcal: "1200 - 2600",
  meals: "3 - 5",
  rating: 4.8,
  ratingQuantity: 389,
  price: "39,47",
};

const ketoWegeDiet = {
  name: "Keto Wege",
  imgUrl: "keto-vege.jpg",
  protein: 15,
  fats: 80,
  carbo: 5,
  kcal: "1400 - 2800",
  meals: "3 - 5",
  rating: 4.8,
  ratingQuantity: 122,
  price: "43,53",
};

const lowIgDiet = {
  name: "Low IG",
  imgUrl: "lowig.jpg",
  protein: 20,
  fats: 35,
  carbo: 45,
  kcal: "1000 - 2300",
  meals: "2 - 5",
  rating: 4.6,
  ratingQuantity: 281,
  price: "37,77",
};

const slimDiet = {
  name: "Redukcyjna",
  imgUrl: "slim.png",
  protein: 20,
  fats: 30,
  carbo: 50,
  kcal: "1000 - 2400",
  meals: "3 - 5",
  rating: 4.9,
  ratingQuantity: 575,
  price: "43,63",
};

const sportDiet = {
  name: "Sport",
  imgUrl: "sport.png",
  protein: 20,
  fats: 20,
  carbo: 60,
  kcal: "1600 - 3800",
  meals: "3 - 5",
  rating: 4.9,
  ratingQuantity: 507,
  price: "53,51",
};

const homeDiet = {
  name: "Home",
  imgUrl: "home.jpg",
  protein: 15,
  fats: 30,
  carbo: 55,
  kcal: "800 - 2000",
  meals: "1 - 3",
  rating: 4.6,
  ratingQuantity: 123,
  price: "32,24",
};

const officeDiet = {
  name: "Office Box",
  imgUrl: "office.jpg",
  protein: 15,
  fats: 30,
  carbo: 55,
  kcal: "750 - 1800",
  meals: "1 - 3",
  rating: 4.9,
  ratingQuantity: 724,
  price: "35,52",
};

const glutenFreeDiet = {
  name: "Gluten Free",
  imgUrl: "gluten-free.jpg",
  protein: 20,
  fats: 25,
  carbo: 55,
  kcal: "1000 - 2500",
  meals: "2 - 5",
  rating: 4.7,
  ratingQuantity: 287,
  price: "38,16",
};

const lowCarbDiet = {
  name: "Low Carb",
  imgUrl: "low-carb.jpg",
  protein: 20,
  fats: 60,
  carbo: 20,
  kcal: "1400 - 2800",
  meals: "3 - 5",
  rating: 4.7,
  ratingQuantity: 189,
  price: "43,22",
};

const lactoseFreeDiet = {
  name: "Lactose Free",
  imgUrl: "lactose-free.jpg",
  protein: 20,
  fats: 25,
  carbo: 55,
  kcal: "1200 - 2600",
  meals: "3 - 5",
  rating: 4.8,
  ratingQuantity: 131,
  price: "40,09",
};

// Array of all diets
const dietsArr = [
  standardDiet,
  ketoDiet,
  wegeDiet,
  ketoWegeDiet,
  lowIgDiet,
  slimDiet,
  sportDiet,
  homeDiet,
  officeDiet,
  glutenFreeDiet,
  lowCarbDiet,
  lactoseFreeDiet,
];

// Create diet boxes
const dietEl = (obj = {}) => {
  return `
      <img class="diet-img" src="images/diets/${obj.imgUrl}" alt="Diet picture" />
      <div class="diet-content">
        <div class="diet-tag">
          <span class="tag tag-proteins">Białko ${obj.protein}%</span>
          <span class="tag tag-fats">Tłuszcze ${obj.fats}%</span>
          <span class="tag tag-carbo">Węglowodany ${obj.carbo}%</span>
        </div>
        <p class="diet-name">${obj.name}</p>
        <ul class="diet-features">
          <li class="diet-feature">
            <i class="fa-solid fa-fire"></i>
            <span><strong>${obj.kcal}</strong> kcal</span>
          </li>
          <li class="diet-feature">
            <i class="fa-solid fa-utensils"></i>
            <span><strong>${obj.meals}</strong> posiłków</span>
          </li>
          <li class="diet-feature">
            <i class="fa-solid fa-star"></i>
            <span><strong>${obj.rating}</strong> ocena (${obj.ratingQuantity})</span>
          </li>
          <li class="diet-feature">
            <i class="fa-solid fa-money-bill-1-wave"></i>
            <span>już od <strong>${obj.price} zł /dzień</span>
          </li>
        </ul>
      </div>
  `;
};

const createDietBox = (obj) => {
  const dietBox = document.createElement("div");
  dietBox.classList.add("diet");
  dietBox.innerHTML = dietEl(obj);
  dietContainer.append(dietBox);
};

dietsArr.forEach((diet) => createDietBox(diet));

// Navigation on mobile app
const headerNav = document.querySelector(".header-nav");
const hamburgerMenu = document.querySelector(".btn-hamburger");

hamburgerMenu.addEventListener("click", () => {
  headerNav.classList.toggle("open-nav");
});

// Smooth scrooling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Scroll to sections
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navi
    if (link.classList.contains("nav-link")) {
      headerNav.classList.toggle("nav-open");
    }
  });
});

// Make navigation sticky
const heroSection = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);
obs.observe(heroSection);

// Fixing flexbox gap property which is missing in some Safaris
function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
