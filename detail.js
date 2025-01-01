// import { displayMenuItems } from './displayMenu.js'; 
const menuWithIngredients = [
    {
      "id": 1,
      "title": "Pancakes with Maple Syrup",
      "img": "../media/pancakeswithmaplesyrup.png",
      "ingredients": ["Flour", "Eggs", "Milk", "Butter", "Maple Syrup"],
      "allergens": ["Gluten", "Dairy", "Eggs"],
      "nutrition": {
        "calories": 350,
        "protein": "8g",
        "carbs": "50g",
        "fat": "12g"
      },
      "cuisine": "American"
    },
    {
      "id": 2,
      "title": "Avocado Toast",
      "img": "../media/Avocadotoast.png",
      "ingredients": ["Sourdough Bread", "Avocado", "Chili Flakes"],
      "allergens": ["Gluten"],
      "nutrition": {
        "calories": 280,
        "protein": "6g",
        "carbs": "30g",
        "fat": "18g"
      },
      "cuisine": "American"
    },
    {
      "id": 3,
      "title": "Breakfast Burrito",
      "img": "../media/breakfastburrito.png",
      "ingredients": ["Tortilla", "Eggs", "Sausage", "Cheese", "Salsa"],
      "allergens": ["Gluten", "Dairy", "Eggs"],
      "nutrition": {
        "calories": 450,
        "protein": "20g",
        "carbs": "40g",
        "fat": "22g"
      },
      "cuisine": "Mexican"
    },
    {
      "id": 4,
      "title": "French Toast",
      "img": "../media/Frenchtoast.png",
      "ingredients": ["Bread", "Eggs", "Milk", "Powdered Sugar", "Berries"],
      "allergens": ["Gluten", "Dairy", "Eggs"],
      "nutrition": {
        "calories": 320,
        "protein": "10g",
        "carbs": "45g",
        "fat": "10g"
      },
      "cuisine": "French"
    },
    {
      "id": 5,
      "title": "Greek Yogurt Parfait",
      "img": "../media/GreekYogurtParfait.png",
      "ingredients": ["Greek Yogurt", "Granola", "Fresh Fruit"],
      "allergens": ["Dairy", "Gluten (in granola)"],
      "nutrition": {
        "calories": 200,
        "protein": "8g",
        "carbs": "25g",
        "fat": "6g"
      },
      "cuisine": "Greek"
    },
    {
      "id": 6,
      "title": "Eggs Benedict",
      "img": "../media/EggsBenedict.png",
      "ingredients": ["Eggs", "Canadian Bacon", "English Muffin", "Hollandaise Sauce"],
      "allergens": ["Gluten", "Dairy", "Eggs"],
      "nutrition": {
        "calories": 400,
        "protein": "18g",
        "carbs": "30g",
        "fat": "24g"
      },
      "cuisine": "British"
    },
    {
      "id": 7,
      "title": "Chicken Caesar Wrap",
      "img": "../media/ChickenCaesarWrap.png",
      "ingredients": ["Tortilla", "Grilled Chicken", "Romaine Lettuce", "Caesar Dressing"],
      "allergens": ["Gluten", "Dairy", "Fish (in dressing)"],
      "nutrition": {
        "calories": 350,
        "protein": "25g",
        "carbs": "30g",
        "fat": "12g"
      },
      "cuisine": "American"
    },
    {
      "id": 8,
      "title": "Caprese Sandwich",
      "img": "../media/CapreseSandwich.png",
      "ingredients": ["Ciabatta Bread", "Mozzarella", "Tomatoes", "Basil", "Balsamic Glaze"],
      "allergens": ["Gluten", "Dairy"],
      "nutrition": {
        "calories": 300,
        "protein": "12g",
        "carbs": "35g",
        "fat": "10g"
      },
      "cuisine": "Italian"
    },
    {
      "id": 9,
      "title": "Turkey Club",
      "img": "../media/TurkeyClub.png",
      "ingredients": ["Bread", "Turkey", "Bacon", "Lettuce", "Tomato", "Mayonnaise"],
      "allergens": ["Gluten", "Eggs (in mayo)"],
      "nutrition": {
        "calories": 400,
        "protein": "22g",
        "carbs": "30g",
        "fat": "18g"
      },
      "cuisine": "American"
    },
    {
      "id": 10,
      "title": "Quinoa Salad",
      "img": "../media/QuinoaSalad.png",
      "ingredients": ["Quinoa", "Mixed Greens", "Cherry Tomatoes", "Lemon Vinaigrette"],
      "allergens": [],
      "nutrition": {
        "calories": 250,
        "protein": "8g",
        "carbs": "30g",
        "fat": "10g"
      },
      "cuisine": "Mediterranean"
    },
    {
        "id": 11,
        "title": "Grilled Cheese & Tomato Soup",
        "img": "../media/GrilledCheeseTomatoSoup.png",
        "ingredients": ["Bread", "Cheese", "Tomatoes", "Cream"],
        "allergens": ["Gluten", "Dairy"],
        "nutrition": {
          "calories": 450,
          "protein": "12g",
          "carbs": "40g",
          "fat": "22g"
        },
        "cuisine": "American"
      },
      {
        "id": 12,
        "title": "Fish Tacos",
        "img": "../media/FishTaco.png",
        "ingredients": ["Tortilla", "Fish Fillets", "Slaw", "Lime Crema"],
        "allergens": ["Gluten", "Fish", "Dairy"],
        "nutrition": {
          "calories": 300,
          "protein": "18g",
          "carbs": "25g",
          "fat": "12g"
        },
        "cuisine": "Mexican"
      },
      {
        "id": 13,
        "title": "Beef Steak",
        "img": "../media/BeefSteak.png",
        "ingredients": ["Beef", "Garlic Butter", "Roasted Vegetables"],
        "allergens": ["Dairy"],
        "nutrition": {
          "calories": 500,
          "protein": "45g",
          "carbs": "10g",
          "fat": "30g"
        },
        "cuisine": "American"
      },
      {
        "id": 14,
        "title": "Chicken Alfredo",
        "img": "../media/ChickenAlfredo.png",
        "ingredients": ["Pasta", "Grilled Chicken", "Alfredo Sauce", "Parmesan Cheese"],
        "allergens": ["Gluten", "Dairy"],
        "nutrition": {
          "calories": 600,
          "protein": "30g",
          "carbs": "50g",
          "fat": "25g"
        },
        "cuisine": "Italian"
      },
      {
        "id": 15,
        "title": "Shrimp Scampi",
        "img": "../media/ShrimpScampi.png",
        "ingredients": ["Shrimp", "Garlic Butter", "Linguine", "Lemon"],
        "allergens": ["Shellfish", "Gluten", "Dairy"],
        "nutrition": {
          "calories": 400,
          "protein": "25g",
          "carbs": "35g",
          "fat": "15g"
        },
        "cuisine": "Italian"
      },
      {
        "id": 16,
        "title": "Vegetable Stir Fry",
        "img": "../media/VegetableStirFry.png",
        "ingredients": ["Vegetables", "Soy-Ginger Sauce", "Rice"],
        "allergens": ["Soy"],
        "nutrition": {
          "calories": 300,
          "protein": "6g",
          "carbs": "45g",
          "fat": "8g"
        },
        "cuisine": "Asian"
      },
      {
        "id": 17,
        "title": "BBQ Ribs",
        "img": "../media/BBQRibs.png",
        "ingredients": ["Pork Ribs", "BBQ Sauce", "Coleslaw"],
        "allergens": [],
        "nutrition": {
          "calories": 700,
          "protein": "50g",
          "carbs": "20g",
          "fat": "45g"
        },
        "cuisine": "American"
      },
      {
        "id": 18,
        "title": "Lobster Bisque",
        "img": "../media/LobsterBisque.png",
        "ingredients": ["Lobster", "Cream", "Sherry", "Herbs"],
        "allergens": ["Shellfish", "Dairy"],
        "nutrition": {
          "calories": 350,
          "protein": "15g",
          "carbs": "20g",
          "fat": "25g"
        },
        "cuisine": "French"
      }
    ];  
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const showMenuDetails = document.getElementById("item-details");
const menuItems = menuWithIngredients.find((item) => item.id === id );

showMenuDetails.innerHTML = `
  <h1>
    <img src="${menuItems.img}" style="width: 10%;"/>
    ${menuItems.title}
  </h1>
  <hr>
  <p><b>Ingredients: </b> ${menuItems.ingredients.join(", ")}</p>
  <p><b>Allergens:</b> ${menuItems.allergens.join(", ")}</p>
   <p><b>Nutrition:</b><br> ${Object.entries(menuItems.nutrition)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", <br>")}</p>
  <p><b>Cuisine:</b> ${menuItems.cuisine}</p>
`;