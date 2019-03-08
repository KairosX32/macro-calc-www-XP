function calcMacros(){
    var calories = document.getElementById("calInput").value; //Calories input data entered
    var output = document.getElementById("macros"); //Where the results will go
    var explanation = document.getElementById("explanation"); //Where the extended results will go
    var weight = document.getElementById("bodyWeight").value; //Bodyweight input data entered
    var kgChecked = document.getElementById("kg").checked;  //returns checked state of Kilograms

    output.style.display = "none";        //Hiding results in case values entered are implausible
    explanation.style.display = "none";   
   
    if(calories === "" || weight === ""){   //Making sure fields are not empty
        alert("Please Enter Values");   
    } else if (calories >= 15000){    
        alert("Calories must be less than or equal to 15000");  
    } else if (weight >= 3000){
        alert("Weight must be less than or equal to 1400");
    } else if (calories <= weight){
        alert("Calories must not be less than or equal to weight");
    } else {
        output.style.display = "block";        
        explanation.style.display = "block";  //Displaying results if requirements are met
    }

    weight = (kgChecked) ? weight *= 2.205 : weight; //formula if Kilograms is checked 

    var fatCal = calories * .18;                 //26 - 34 Formula for Macros
    gramsOfFat = Math.round(fatCal / 9);         

    var gramsOfProtein = Math.round(.8 * weight);

    var proteinCal = gramsOfProtein * 4;

    var carbCal = (calories - proteinCal) - fatCal;
    var gramsOfCarbs = Math.round(carbCal / 4);
    clearFields(); 
     
    
    output.textContent = gramsOfFat + "f/" + gramsOfProtein + "p/" + gramsOfCarbs + "c"; //Displaying results in browser
    
    explanation.textContent = `You will need to eat about ${gramsOfFat} grams of fat, ${gramsOfProtein} grams of protein, and ${gramsOfCarbs} grams of carbs.`; //Displaying extended results in browser
    

    function clearFields(){
        document.getElementById("calInput").value = "";   //Resets input fields to empty 
        document.getElementById("bodyWeight").value = "";
    }

}

document.querySelector("#calorie-btn").addEventListener("click", calcMacros); //calling calcMacro on btn-click


onkeydown = function(event){
    if(event.keyCode === 13){  //Calls calcMacro Function on "Enter" key press
        calcMacros();
    }
}


