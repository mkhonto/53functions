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


estMyCode.run("testing hello joe function", function(assert){
    var result = hello_joe("jabu");
    // is the result as we expected?
    assert.equals("Hello, jabu!", result, "testing hello joe function");
});

results();

