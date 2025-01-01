import { displayMenuItems } from './displayMenu.js'; 

//#region translations
// Define the language object with translations
const language = {
    eng: { menu: "Our Menu" 
        
     },
    alb: { menu: "Menu" }
};

// Select the menu text element
const menus = document.getElementById("menus");

// Function to update the menu text
function updateMenuText(lang) {
    menus.textContent = language[lang].menu; // Update the text
    localStorage.setItem("selectedLanguage", lang); // Save the selected language in Local Storage
}

// Get the saved language from Local Storage or default to English
const savedLanguage = localStorage.getItem("selectedLanguage") || "eng";
updateMenuText(savedLanguage); // Set the initial menu text

// Add event listeners to the language buttons
document.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
        const selectedLang = button.getAttribute("data-lang"); // Get the selected language
        updateMenuText(selectedLang); // Update the menu text
    });
});
//#endregion
const menu = [
        {
          "id": 1,
          "title": "Pancakes with Maple Syrup",
          "category": "Breakfast",
          "price": 7.99,
          "img": "./media/pancakeswithmaplesyrup.png",
          "desc": "Fluffy pancakes topped with butter and served with maple syrup."
        },
        {
          "id": 2,
          "title": "Avocado Toast",
          "category": "Breakfast",
          "price": 6.99,
          "img": "./media/Avocadotoast.png",
          "desc": "Toasted sourdough bread topped with mashed avocado and a sprinkle of chili flakes."
        },
        {
          "id": 3,
          "title": "Breakfast Burrito",
          "category": "Breakfast",
          "price": 8.99,
          "img": "./media/breakfastburrito.png",
          "desc": "Tortilla stuffed with scrambled eggs, sausage, cheese, and salsa."
        },
        {
          "id": 4,
          "title": "French Toast",
          "category": "Breakfast",
          "price": 7.49,
          "img": "./media/Frenchtoast.png",
          "desc": "Golden-brown French toast served with powdered sugar and fresh berries."
        },
        {
          "id": 5,
          "title": "Greek Yogurt Parfait",
          "category": "Breakfast",
          "price": 5.99,
          "img": "./media/GreekYogurtParfait.png",
          "desc": "Layers of Greek yogurt, granola, and fresh fruit."
        },
        {
          "id": 6,
          "title": "Eggs Benedict",
          "category": "Breakfast",
          "price": 9.99,
          "img": "./media/EggsBenedict.png",
          "desc": "Poached eggs and Canadian bacon on an English muffin, topped with hollandaise sauce."
        },
          {
          "id": 7,
          "title": "Chicken Caesar Wrap",
          "category": "Lunch",
          "price": 9.99,
          "img": "./media/ChickenCaesarWrap.png",
          "desc": "Grilled chicken, romaine lettuce, and Caesar dressing in a soft tortilla."
        },
        {
          "id": 8,
          "title": "Caprese Sandwich",
          "category": "Lunch",
          "price": 8.99,
          "img": "./media/CapreseSandwich.png",
          "desc": "Fresh mozzarella, tomatoes, and basil on ciabatta bread, drizzled with balsamic glaze."
        },
        {
          "id": 9,
          "title": "Turkey Club",
          "category": "Lunch",
          "price": 10.99,
          "img": "./media/TurkeyClub.png",
          "desc": "Triple-layer sandwich with turkey, bacon, lettuce, tomato, and mayo."
        },
        {
          "id": 10,
          "title": "Quinoa Salad",
          "category": "Lunch",
          "price": 9.49,
          "img": "./media/QuinoaSalad.png",
          "desc": "Healthy salad with quinoa, mixed greens, cherry tomatoes, and a lemon vinaigrette."
        },
        {
          "id": 11,
          "title": "Grilled Cheese & Tomato Soup",
          "category": "Lunch",
          "price": 8.99,
          "img": "./media/GrilledCheeseTomatoSoup.png",
          "desc": "Classic comfort food combo of grilled cheese sandwich and creamy tomato soup."
        },
        {
          "id": 12,
          "title": "Fish Tacos",
          "category": "Lunch",
          "price": 11.99,
          "img": "./media/FishTaco.png",
          "desc": "Crispy fish fillets in soft tortillas, topped with slaw and a tangy lime crema."
        },
          {
          "id": 13,
          "title": "Beef Steak",
          "category": "Dinner",
          "price": 18.99,
          "img": "./media/BeefSteak.png",
          "desc": "Juicy grilled beef steak served with garlic butter and roasted vegetables."
        },
        {
          "id": 14,
          "title": "Chicken Alfredo",
          "category": "Dinner",
          "price": 14.99,
          "img": "./media/ChickenAlfredo.png",
          "desc": "Creamy Alfredo pasta topped with grilled chicken and Parmesan cheese."
        },
        {
          "id": 15,
          "title": "Shrimp Scampi",
          "category": "Dinner",
          "price": 16.99,
          "img": "./media/ShrimpScampi.png",
          "desc": "Garlic butter shrimp served over linguine with a hint of lemon."
        },
        {
          "id": 16,
          "title": "Vegetable Stir Fry",
          "category": "Dinner",
          "price": 12.99,
          "img": "./media/VegetableStirFry.png",
          "desc": "Fresh vegetables stir-fried in a savory soy-ginger sauce, served with rice."
        },
        {
          "id": 17,
          "title": "BBQ Ribs",
          "category": "Dinner",
          "price": 19.99,
          "img": "./media/BBQRibs.png",
          "desc": "Tender pork ribs coated in tangy barbecue sauce, served with coleslaw."
        },
        {
          "id": 18,
          "title": "Lobster Bisque",
          "category": "Dinner",
          "price": 21.99,
          "img": "./media/LobsterBisque.png",
          "desc": "Rich and creamy lobster soup with a touch of sherry and herbs."
        } ];
      
const sectionCenter = document.querySelector(".section-center");
const filterButtons = document.querySelectorAll(".filter-btn");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const searchInput = document.getElementById("search");

let selectedCategory = "all";
let selectedPrice = parseFloat(priceRange.value); //parseFloat changes the value of priceRange(string) to float


window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu, sectionCenter);  
});

searchInput.addEventListener("input", e => {
  try{
    const inputValue = e.target.value.toLowerCase();
  const filterData = menu.filter((item) => {
    return (item.title.toLowerCase().includes(inputValue))
  });
  displayMenuItems(filterData,sectionCenter);
  } 
  catch(error) {
    console.error("Error filtering menu items by search: ", error);
    sectionCenter.innerHTML = "<p>An error occurred while searching. Please try again.</p>";
  } 
});

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) { //e (event object) contains information about the click event
    selectedCategory = e.currentTarget.dataset.cat; 
    filterMenuItems();
  });
});

priceRange.addEventListener("input", function () {
  priceValue.textContent = priceRange.value;
  selectedPrice = parseFloat(priceRange.value);
  filterMenuItems();
});

function filterMenuItems() {
  let filteredMenu = menu;

  // Filter by category if not "all"
  if (selectedCategory !== "all") {
    filteredMenu = filteredMenu.filter(function (item) {
      return item.category === selectedCategory;
    });
  }

  filteredMenu = filteredMenu.filter(function (item) {
    return item.price <= selectedPrice;
  });
  displayMenuItems(filteredMenu, sectionCenter);
}