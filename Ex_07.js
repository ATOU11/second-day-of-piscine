fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getFruitNameFromIndex(index){
	if (fruits.length>=index){
  	return displayResult(fruits[index])
  }
  else{
  	return displayResult(null)
  }
}

getFruitNameFromIndex(3)
