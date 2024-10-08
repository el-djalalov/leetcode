/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II.The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right.However, the numeral for four is not IIII.
  Instead, the number four is written as IV.Because the one is before the five we subtract it making four.
The same principle applies to the number nine, which is written as IX. */

const romanToInt = s => {
	const symbols = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let total = 0;
	for (let i = 0; i < s.length; i++) {
		let currentVal = s[i];
		let nexVal = s[i + 1];
		if (symbols[currentVal] < symbols[nexVal]) {
			total -= symbols[currentVal];
		} else {
			total += symbols[currentVal];
		}
	}
	return total;
};
