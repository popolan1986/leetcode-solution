// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	const sortedStrMap = new Map();
	strs.forEach(str => {
		const key = str.split('').sort().join('');
		if (sortedStrMap.has(key)) {
			sortedStrMap.get(key).push(str);
		} else {
			sortedStrMap.set(key, [str]);
		} u
	});
	return Array.from(sortedStrMap.values());
};

// test
const actual = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(actual);