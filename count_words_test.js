QUnit.test("testing  count_words test function", function(assert){
 var sentence = "Im about to go home";
 var results = count_words(sentence);
    assert.equal(results,5);
});
