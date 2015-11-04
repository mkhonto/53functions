QUnit.test("testing longest_word function", function(assert){
	var sentence = "fight with no guns";
	var results = longest_word(sentence);
assert.deepEqual(results, 4);
});