
console.log("Available Movies:");
console.log("1. Action");
console.log("2. Comedy");
console.log("3. Drama");


var movieChoice = prompt("Select a movie (1-3):");


var selectedMovie;
var seatPrices;


if (movieChoice === "1") {
    selectedMovie = "Action";
    seatPrices = [10, 20];
} else if (movieChoice === "2") {
    selectedMovie = "Comedy";
    seatPrices = [8, 15];
} else if (movieChoice === "3") {
    selectedMovie = "Drama";
    seatPrices = [6, 12]; 
} else {
    console.log("Invalid choice! Exiting.");
}


if (selectedMovie) {
    console.log("Seat Options:");
    console.log("1. Standard Seat - " + seatPrices[0] + "rs");
    console.log("2. VIP Seat - " + seatPrices[1] + "rs");


    var seatChoice = prompt("Select a seat type (1 for Standard, 2 for VIP):");

    var cost;
    if (seatChoice === "1") {
        cost = seatPrices[0];
        seatType = "Standard";
    } else if (seatChoice === "2") {
        cost = seatPrices[1];
        seatType = "VIP";
    } else {
        console.log("Invalid choice! Exiting.");
    }

    if (cost) {
        console.log("You have selected " + selectedMovie + " with a " + seatType + " seat.");
        console.log("Total Cost: " + cost + "rs");
    }
}

/// products and categories

const products = prompt("enter products:")
let category;
switch(products){
    case"electronics":
    // break;
    category=prompt("enter category")

    switch(category){
        case"mobile":
            console.log("5%") ;break;
        case"laptop":console.log("10%") ;break;
        default:console.log("enter proper category") 
   
       
    };break;
    
    case"clothing":
    // break; 
        // let cate=prompt("enter cate")
          category=prompt("enter category")

    switch(category){
        case"men":console.log("20%");break;
        case"women":console.log("20%"); break;
       default:console.log("enter proper category") 
       
    };
    break;
    
    case"grocery": 
        // break;
        // let cate=prompt("enter cate")
          category=prompt("enter category")

    switch(category){
        case"fruits":console.log("20%"); break;
        case"vegtables":console.log("20%"); break;
       default:console.log("enter proper category") 
       
    };break;
    
   default:console.log("enter proper product")
    
    
}


// transport

const transport = prompt("enter transport:")
console.log(transport)
 let categories;
switch(transport){
    case"flight":
    // break;
    categories=prompt("enter category economy or businnes:")
    
    switch(categories){
        case"economy":
            console.log("economy") ;break;
        case"business":
         
            console.log("business") ;break;
        default:console.log("enter proper category") 
   
       
    };break;
    
    case"train":
    
        categories=prompt("enter category sleeper or ac class:")

    switch(categories){
        case"sleeper":console.log("sleeper");break;
        case"ac class":console.log("ac class"); break;
      default:console.log("enter proper category") 
       
    };
    break;
    
    case"bus": 
       
        categories=prompt("enter category standard or luxury ")

    switch(categories){
        case"standard":console.log("standard"); break;
        case"luxury":console.log("luxury"); break;
      default:console.log("enter proper category") 
       
    };break;
    
  default:console.log("enter proper transport")
    
    
}




