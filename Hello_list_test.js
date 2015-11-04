QUnit.test("testing  Hello_list_test function", function(assert){
    var result = Hello_list ("products");
    // is the result as we expected?
    assert.equal(result, 0, "Hello world");
});
