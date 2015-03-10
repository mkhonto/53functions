var assert = {
  i:0,
  pass:0,

  equals: function(message,result,newmsg) {
    //creating a new element
    var newElement = document.createElement('div');

    //Giving the newly created div style
    newElement.id = "square"+this.i;
    newElement.style.height = "150px";
    newElement.style.width = "150px";
    newElement.style.border = "solid black 5px";
    newElement.style.display = "inline-Block";
    newElement.style.margin = "15px";
   

    //Appending the new div you have created to the body
    document.body.appendChild(newElement);

    //Checking if the square is green or red
    var rg = new RedOrGreen(newElement.id);
    if(message === result) {
      newElement.innerHTML= newmsg;
      rg.makeGreen();
      //incrementing pass for the results so we can see how many tests have passed
      this.pass++;

    }
    else{
      newElement.innerHTML= newmsg;
      rg.makeRed();
    }
    this.i++;
  }
}
//
var TestMyCode = {
  run: function(name, assertTest){
    this.name = name;
    assertTest(assert);
  }
}

//new function for storing the results
function results() {
  //creating a new p element
  var dee = document.createElement('p');
  //Appending the p element to the body of the code
  document.body.appendChild(dee);
  //setting the innerHtml for dee to the specified text
  dee.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.i;
}