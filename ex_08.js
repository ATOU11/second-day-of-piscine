fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];
function getFruit(parametre){
	if (typeof parametre=== "string"){
  	if (fruits.includes(parametre) === true){
  		return displayResult(fruits.indexOf(parametre))
  	}
  	else{
  		return displayResult(null)
  	}
  }
  else if (typeof parametre==='number'){
  	if (fruits.length>=parametre){
  		return displayResult(fruits[parametre])
  	}
  	else{
  		return displayResult(null)
  	}
  }
}

getFruit(2)
