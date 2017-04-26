describe("First Spec", function () {

    it("should navigate to the WebdriverIO homepage", function () {
        return browser.url("https://www.google.nl/")
            .setValue("//input[@id='lst-ib']", "WebDriverIO")
            .keys("Enter");

    });
});