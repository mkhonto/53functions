TestMyCode.run("testing hello function", function(assert){
    var result = hello();
    // is the result as we expected?
    assert.equals("hello world", result, "testing hello function");
});


TestMyCode.run("testing hello uppercase function", function(assert){
    var result = hello_uppercase("jabu");
    // is the result as we expected?
    assert.equals("Hello, JABU!", result, "testing hello uppercase function");
});


TestMyCode.run("testing hello joe function", function(assert){
    var result = hello_joe("jabu");
    // is the result as we expected?
    assert.equals("Hello, jabu!", result, "testing hello joe function");
});


TestMyCode.run("testing number list function", function(assert){
    var result = number_list(10);
    var newarray = [1,2,3,4,5,6,7,8,9,10];
    // is the result as we expected?
    assert.equals(newarray.toString(), result.toString(), "testing number list function");
});

TestMyCode.run("testing sum number function", function(assert){
    var result = sum_number(15);
    var newarray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    // is the result as we expected?
    assert.equals(newarray.toString(), result.toString(), "testing sum number function");
});

