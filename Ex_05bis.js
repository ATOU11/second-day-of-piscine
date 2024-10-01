// Write your function here ...
function getBasketContent(nbFruits){
	let fruits = ["strawberry" , "strawberry" , "strawberry" , "apple" , "apple" , "lime" , "lime" , "peach", "pear", "pear"]
  if (fruits.length>=nbFruits){
  	let panier = fruits.slice (0,nbFruits)
    console.log(panier.length+' fruit(s) selected')
    return panier
  }
  else{
  	console.log('Too many fruit(s) selected')
  }  
}
