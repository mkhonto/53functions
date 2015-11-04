QUnit.test("testing sum_word_len function", function(assert){
	var sentence = "impossible";
	var output = sum_word_len(sentence);
assert.equal(output,10);
});