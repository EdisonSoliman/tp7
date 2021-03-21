// on load make font 80px //

window.onload = function() {
  document.querySelector("#title").style.fontSize = "80px";
};

// click to make title red //

cheesedip = document.querySelector("#title");
title.onclick = function() {
  cheesedip.classList.toggle("clicked");
};

// hidden info //
hidden1 = document.querySelector("div#ingredients");
hidden1.onclick = function() {
  hidden1.classList.toggle("ingredientsClicked");
};

hidden2 = document.querySelector("div#equipment");
hidden2.onclick = function() {
  hidden2.classList.toggle("equipmentClicked");
};

hidden3 = document.querySelector("div#directions");
hidden3.onclick = function() {
  hidden3.classList.toggle("directionsClicked");
};
// added HTML //
x = document.getElementById("done");
x.innerHTML = "Done and Enjoy!";
x.style.fontSize = '40px';
x.style.fontFamily = 'Bungee';
x.style.textAlign = 'center';

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // prepares code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.getElementById(whereTo).innerHTML = this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }
  } // end ajax.onreadystatechange

  // now that everything is set, initiate request
  ajax.send();
}

window.onload = function() {
  loadFileInto("ingredients.html", "ingredients");
  loadFileInto("equipment.html", "equipment");
  loadFileInto("directions.html", "directions");
};

// object constructor for Recipe prototype
function Recipe(recipeName, imageURL, contributorName, ingredientFilename, equipmentFilename, directionsFilename) {
	this.name = recipeName;
	this.imgsrc = imageURL;
	this.contributor = contributorName;
	this.ingFile = ingredientFilename;
	this.equipFile = equipmentFilename;
	this.dirFile = directionsFilename;
	
	// update the screen with this object's recipe information
	this.displayRecipe = function() {
		
		// update the recipe title
		document.querySelector("#title h1").innerHTML = this.name;
		
		// update the recipe contributor
		document.querySelector("#title h3").innerHTML = "Contributed by: " + this.contributor;
		
		// update the image
		document.querySelector("#image").style.backgroundImage = "url(" + this.imgsrc + ")";
		
		// update the 3 columns of information
		loadFileInto(this.ingFile, "ingredients");
		loadFileInto(this.equipFile, "equipment");
		loadFileInto(this.dirFile, "directions");
		
	}	
}

ChickenDip = new Recipe(
	"Cheesy Buffalo Chicken Dip", 
	"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2143192.jpg&w=596&h=596&c=sc&poi=face&q=85",
	"Edison Soliman",
	"chicken-ingredients.html",
	"chicken-equipment.html",
	"chicken-directions.html"
);

LemonBar = new Recipe(
  "Lemon Bars",
  "https://images.unsplash.com/photo-1530077561647-4c376cd0ee7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "Mary Anne Keovongphet",
  "lemon-ingredients.html",
  "lemon-equipment.html",
  "lemon-directions.html"
)

Tofu = new Recipe(
  "Breaded, Fried, Softly Spiced Tofu",
  "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Rae Kolke",
  "tofu-ingredients.html",
  "tofu-equipment.html",
  "tofu-directions.html"
)

