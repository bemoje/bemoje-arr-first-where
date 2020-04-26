import arrFirstWhere from '../src/arr-first-where'

describe('arrFirstWhere', () => {
	test('works', () => {
		const arr = [1, 2, 3, 4, 5]
		expect(
			arrFirstWhere(arr, (element) => {
				return element >= 3
			}),
		).toBe(3)
		expect(
			arrFirstWhere(arr, (element) => {
				return element >= 6
			}),
		).toBe(null)
	})
})
