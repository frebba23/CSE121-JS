/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myself = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myself['name'] = "Freddy";
myself.name = "Freddy";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myself.photo = "images/My_Photo.jpg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myself.favoriteFoods = ["Chicken", "Pizza", "Pork"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myself.hobbies = ["Chess", "Darts", "Volleyball"];
// Step 6: Add another property named placesLived with a value of an empty array
myself.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myself.placesLived = [{"Place": "Length"}];
// Step 8: For each property, add appropriate values as strings
myself.placesLived.push({"Masvingo": "23 Years"})
// Step 9: Add additional objects with the same properties for each place you've lived
myself.placesLived.push({"Nyamande": "14 Years"})

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerHTML = myself.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementsByTagName("img").src = myself.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementsByTagName("img").alt = myself.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
for (let i = 0; i < myself.favoriteFoods.length; i++){
    let li = document.createElement("li");
    li.innerHTML = (myself.favoriteFoods[i]);

    let ul = document.getElementById("favorite-foods");

    ul.appendChild(li);
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
for (i = 0; i < myself.hobbies.length; i++){
    let li = document.createElement("li");
    li.innerHTML = (myself.hobbies[i]);

    let ul = document.getElementById("hobbies");

    ul.appendChild(li);
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const placesList = document.getElementById("places-lived");
for (let i = 0; i < myself.placesLived.length; i++) {
    const dtPlace = document.createElement("dt");
    dtPlace.innerHTML = Object.keys(myself.placesLived[i]);

    const ddLength = document.createElement("dd");

    placesList.append(dtPlace);
    placesList.append(ddLength);
}
console.log(myself.placesLived);