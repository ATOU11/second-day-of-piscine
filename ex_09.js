function splitOperation(operation){
  let result = []
	const name = operation[0]
  result.push(parseInt(name))
  const name2 = operation[2]
  result.push(name2)
  const name3 = operation[4]
  result.push(parseInt(name3))
  return console.log(result)
}

splitOperation("1 + 3")
