import arrFirstWhere from '../src/arr-first-where'

const arr = [1, 2, 3, 4, 5]

arrFirstWhere(arr, (element) => {
	return element >= 3
})
//=> 3

arrFirstWhere(arr, (element) => {
	return element >= 6
})
//=> null
