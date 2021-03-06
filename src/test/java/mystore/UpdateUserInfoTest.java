package mystore;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageobject.AccountPage;
import pageobject.LoginPage;
import pageobject.MyStoreMainPage;
import pageobject.UserInfoPage;

public class UpdateUserInfoTest {

    private WebDriver driver;

    private MyStoreMainPage myStoreMainPage;
    private LoginPage loginPage;
    private AccountPage accountPage;
    private UserInfoPage userInfoPage;
    private String login = "johnd@mail.com";
    private String password = "qwerty";

    @Given("User is logged in to CodersLab shop")
    public void userIsLoggedToMyStorePage() {
        System.setProperty("webdriver.chrome.driver",
                "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/");

        myStoreMainPage = new MyStoreMainPage(driver);
        loginPage = new LoginPage(driver);
        accountPage = new AccountPage(driver);
        userInfoPage = new UserInfoPage(driver);

        myStoreMainPage.goToAuthenticationPage();
        loginPage.loginAs(login, password);
    }

    @When("User goes to UserInformationPage")
    public void goToUserInformation() {
        accountPage.goToInformation();
    }

    @And("User changes his birthday to (.*)")
    public void userChangesBirthdate(String date){
        userInfoPage.setBirthday(date);

    }

    @And("User signs up for our newsletter")
    public void signUpForNewsletter(){
        userInfoPage.signInForNewsletter();
    }

    @And("User saves information")
    public void userSavesInfo(){
        userInfoPage.submitChanges(password);

    }

    @Then("User sees (.*)")
    public void userSees(String message){
        Assert.assertEquals(message, userInfoPage.getMessage());
    }


}
