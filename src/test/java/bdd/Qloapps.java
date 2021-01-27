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

import java.util.concurrent.TimeUnit;


public class Qloapps {
    private WebDriver driver;
    //definicje metod


    @Given("user is on the main page")
    public void openQloAppsPage() {
        // Skonfiguruj sterownik przeglądarki
        System.setProperty("webdriver.chrome.driver",
                "src/test/resources/drivers/chromedriver.exe");
        // Uruchom nowy egzemplarz przeglądarki Chrome
        driver = new ChromeDriver();
        // Zmaksymalizuj okno przeglądarki
        driver.manage().window().maximize();
        // Przejdź do qloapps
        driver.get("https://qloapps.coderslab.pl");
    }

    @And("user goes to the authentication page")


    public void openAuthenticationPage() {
        driver.findElement(By.className("hide_xs")).click();
    }

    @When("user completes email box with (.*)")
    public void completeNewAccountWithEmail(String email) {
        driver.findElement(By.id("email_create")).sendKeys(email);
    }

    @And("user clicks on create an account button")
    public void clickOnCreateAccountButton() {
        driver.findElement(By.id("SubmitCreate")).click();
    }

    @When("user completes first name (.*), last name (.*) and password (.*)")
    public void completePersonalInfo(String firstName, String lastName, String password) {

        //spowolnienie żeby okno się otworzyło
        try
        {
            Thread.sleep(1000);
        }
        catch(InterruptedException ex)
        {
            Thread.currentThread().interrupt();
        }


        System.out.println(firstName + lastName + password);
        driver.findElement(By.id("customer_firstname")).sendKeys(" " + firstName);
        driver.findElement(By.id("customer_lastname")).sendKeys(lastName);
        driver.findElement(By.id("passwd")).sendKeys(password);

    }

    @And("user clicks on register button")
    public void ClickOnRegisterButton() {
        System.out.println("juz kolejny krok");
        driver.findElement(By.name("submitAccount")).click();
        try
        {
            Thread.sleep(1000);
        }
        catch(InterruptedException ex)
        {
            Thread.currentThread().interrupt();
        }
    }

    @Then("success message is displayed")
    public void messageIsDisplayed() {
        WebElement alert = driver.findElement(By.className("alert alert-success"));
        Assert.assertTrue(alert.isDisplayed());
        Assert.assertTrue(alert.getText().equals("Your account has been created."));

    }
//    @And("close browser2")
//    public void closeBrowser2() {
//        driver.quit();
//    }


}






