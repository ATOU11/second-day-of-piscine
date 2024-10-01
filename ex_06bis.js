fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getIndexFromName(name){
 if (fruits.includes(name)=== true){
   return displayResult(fruits.indexOf(name))
  }
 else{
  return  displayResult(null)
    }
   }
   
getIndexFromName("Mango")
