var FoodInfo = function(fName, fcalories) {
    this.food = fName;
    this.calories = fcalories;
};

FoodInfoArray = [];

let newFoodInfo1 = new FoodInfo("Egg", 78);
FoodInfoArray.push(newFoodInfo1);
let newFoodInfo2 = new FoodInfo("Milk", 103);
FoodInfoArray.push(newFoodInfo2);

function formSubmitEvent() {
    var subName = document.getElementById("foodname").value;
    const subCal = Number(document.getElementById("noCal").value);
    FoodInfoArray.push(new FoodInfo(subName, subCal))
    console.log(FoodInfoArray);
    let sum = 0;
    for (i = 0; i < FoodInfoArray.length; i++) {
      sum += FoodInfoArray[i].calories;
    }
    document.getElementById("totalcal").value = sum; 
  
    document.getElementById("foodname").value = "";
    document.getElementById("noCal").value = "";
}

