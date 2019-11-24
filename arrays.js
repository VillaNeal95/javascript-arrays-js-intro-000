var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  return [...chocolateBars, 'foo', 1]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return [...chocolateBars, 'foo', 
  1]
}
