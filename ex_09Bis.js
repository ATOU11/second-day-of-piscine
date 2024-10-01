function doOperation(operation){
	const name = parseInt(operation[0])
  const name2 = operation[1]
  const name3 = parseInt(operation[2])
	switch (name2) {
  	case "+" :
    	return console.log(name+name3)
    case "-" :
    	return console.log(name-name3)
    case "*" :
    	return console.log(name*name3)
    case "/" :
    	return console.log(name/name3)
    	
  }
}
console.log(" 1 ")
