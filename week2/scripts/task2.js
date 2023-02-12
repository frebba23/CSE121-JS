/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Freddy";


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = myName;


// Step 3: declare and instantiate a variable to hold the current year
let currentYear = 2023;


// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = currentYear


// Step 5: declare and instantiate a variable to hold the name of your picture
let myPic = "images/My_Photo.jpg";

// Step 6: copy your image into the "images" folder
//myPic.copyFile('C:\Users\Tyson\Pictures\Screenshots\My_Photo.jpg', 'C:\Users\Tyson\CSE121-JS\images')

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", myPic)


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFood = [ "Chicken", "Rice", "Beef", "Pork" ];

// Step 2: place the values of the favorite foods variable into the HTML file
let foodElement = document.querySelector("#food")
foodElement.innerHTML = favoriteFood;

// Step 3: declare and instantiate a variable to hold another favorite food
let moreFavoriteFood = "Ice Cream";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFood.push(moreFavoriteFood);

// Step 5: repeat Step 2
foodElement = document.querySelector("#food")
foodElement.innerHTML = favoriteFood;

// Step 6: remove the first element in the favorite foods array
favoriteFood.shift();

// Step 7: repeat Step 2
foodElement = document.querySelector("#food")
foodElement.innerHTML = favoriteFood;

// Step 8: remove the last element in the favorite foods array
favoriteFood.pop();

// Step 7: repeat Step 2
foodElement = document.querySelector("#food")
foodElement.innerHTML = favoriteFood;