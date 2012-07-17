function beginTest() {
  // Write your tests here to prevent them from loading before QUnit does.
	//test("a basic unit test", function() {var value="hello";equal(value,"hello","We expect value to be hello");});
	module("Browser Properties Test");
	test("localStorage Test", function() {
		var lSMatch = ("w" == (localStorage.setItem = "w"));
  	ok(lSMatch, "Browser has localStorage"); 
  });
};

