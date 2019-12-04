/**
 * 
 */
describe("My second test case: Multiplication of two numbers", function(){

	it("Launch App and Verify Title", function(){
	
		browser.get("https://juliemr.github.io/protractor-demo/");
		browser.manage().window().maximize();
		expect(browser.getTitle()).toEqual("Super Calculator");
		browser.sleep(5000);
	});
	
	it("Multiplication of two numbers", function(){
		
		element(by.model("first")).sendKeys("3");
		element.all(by.options("value for (key, value) in operators")).get(3).click();
		element(by.model("second")).sendKeys("6");
		element(by.buttonText("Go!")).click();
		browser.sleep(5000);
		expect(element.all(by.repeater("result in memory"))).toBeTruthy();
		browser.sleep(5000);		
	});

});