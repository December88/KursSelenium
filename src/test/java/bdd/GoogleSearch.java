package bdd;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class GoogleSearch {
    public String keyword;
    private WebDriver driver;
    //definicje metod


    @Given("an open browser with google.com")
    public void openGoogleSearch() {
        // Skonfiguruj sterownik przeglądarki
        System.setProperty("webdriver.chrome.driver",
                "src/test/resources/drivers/chromedriver.exe");
        // Uruchom nowy egzemplarz przeglądarki Chrome
        driver = new ChromeDriver();
        // Zmaksymalizuj okno przeglądarki
        driver.manage().window().maximize();
        // Przejdź do Google
        driver.get("http://www.google.com");
    }


    @When("a keyword (.*) is entered in input field")
    public void enterKeyword(String keyword) {
        // Znajdź element wprowadzania tekstu na podstawie jego nazwy
        WebElement element = driver.findElement(By.name("q"));
        // Wyczyść tekst zapisany w elemencie
        element.clear();
        // Wpisz informacje do wyszukania
        element.sendKeys(keyword);
        // Prześlij formularz
        element.submit();
    }

    @Then("the first result should contain (.*)")
    public void theFirstOneShouldContainKeyword(String expectedText) {
        WebElement firstFinding = driver.findElement(By.className("g"));
        final String firstFindingText = firstFinding.getText();
        Assert.assertTrue(firstFindingText.contains(expectedText));
        System.out.println(expectedText);


    }

    @And("close browser")
    public void closeBrowser() {
        driver.quit();
    }


}






