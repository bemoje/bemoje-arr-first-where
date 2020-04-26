import arrFirstWhere from '../src/arr-first-where'

arrFirstWhere(arr, (element) => {
	return element >= 3
})
//=> 3

arrFirstWhere(arr, (element) => {
	return element >= 6
})
//=> null
