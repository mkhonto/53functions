QUnit.test("testing  High_low_test function", function(assert){
    var array = ["1,2,3,4,5,6,7"];
    var result = high_low(array);
    var expected = [7, 1];
    // is the result as we expected?
    assert.deepEqual(result, [1, 7]);
});
