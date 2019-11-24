var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(chocolateBars, lol) {
  return [...chocolateBars, 'foo', 1]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
