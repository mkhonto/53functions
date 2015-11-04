QUnit.test("testing high_low function", function(assert){
    var result = high_low (32, 45, 16, 83, 26);
    // is the result as we expected?
    assert.deepEqual(result, {high: 83, low: 16});
});




















