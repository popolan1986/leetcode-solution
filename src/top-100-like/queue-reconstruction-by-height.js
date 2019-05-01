// https://leetcode.com/problems/queue-reconstruction-by-height/
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
	if (people.length <= 1) {
		return people;
	}
	// 1. sort by h
	people.sort((a, b) => {
		if (a[0] > b[0]) {
			return -1;
		} else if (a[0] === b[0]) {
			return a[1] - b[1];
		} else {
			return 1;
		}
	});
	// 2. reconstruct
	for (let i = 1; i < people.length; i++) {
		// cache current
		const cur = people[i];
		let k = cur[1];
		const h = cur[0];
		for (let j = 0; j < i; j++) {
			const ch = people[j][0];
			if (ch >= h) {
				if (k > 0) {
					k--;
				} else if (k === 0) {
					// should insert at the front of j
					for (let q = i; q > j; q--) {
						people[q] = people[q-1];
					}
					people[j] = cur;
					break;
				}
			}
		}
	}

	return people;
};

// test
const people = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
const actual = reconstructQueue(people);
console.log('done');