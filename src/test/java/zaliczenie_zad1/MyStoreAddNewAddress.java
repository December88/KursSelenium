package zaliczenie_zad1;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageobject.AccountPage;
import zaliczenie_zad1.pageObject.AddressPage;
import zaliczenie_zad1.pageObject.LoginPage;
import zaliczenie_zad1.pageObject.MyStoreMainPage;
import zaliczenie_zad1.pageObject.NewAddressPage;

public class MyStoreAddNewAddress {
    private WebDriver driver;

    private MyStoreMainPage myStoreMainPage;
    private LoginPage loginPage;
    private AccountPage accountPage;
    private NewAddressPage newAddressPage;
    private AddressPage addressPage;
    //    private LoginPage loginAs;
//    private String login = "grudzien.artur@gmail.com";
//    private String password = "123456";
//    public String alias;
//    public String address;


    //definicje metod


    @Given("open browser to MyStore page")
    public void openMyStorePage() {
        // Skonfiguruj sterownik przeglądarki
        System.setProperty("webdriver.chrome.driver",
                "src/test/resources/drivers/chromedriver.exe");
        // Uruchom nowy egzemplarz przeglądarki Chrome
        driver = new ChromeDriver();
        // Zmaksymalizuj okno przeglądarki
        driver.manage().window().maximize();
        // Przejdź do prod-kurs.coderslab.pl
        driver.get("https://prod-kurs.coderslab.pl");

        myStoreMainPage = new MyStoreMainPage(driver);
        loginPage = new LoginPage(driver);
        newAddressPage = new NewAddressPage(driver);
        accountPage = new AccountPage(driver);
        addressPage = new AddressPage(driver);

        myStoreMainPage.goToAuthenticationPage();

//        loginPage.loginAs(login, password);


    }

    @And("user goes to login page")
    public void openLoginPage() {

    }

    @When("user completes email and password boxes with (.*) and (.*) and signs in")
    public void userLogin(String email, String password) {
        loginPage.loginAs(email, password);
    }

    @And("user goes to Addresses page")
    public void goToAddress() {
        accountPage.goToAddress();
    }

    @And("user clicks on 'Create new address' button")
    public void clickAddAddressButton() {
        addressPage.clickAddAddressButton();
    }

    @When("user completes (.*), (.*), (.*), (.*) and (.*)")
    public void completeFields(String alias, String address, String city, String postal_code, String phone) throws InterruptedException {
        newAddressPage.completeRequiredFields(alias, address, city, postal_code, phone);
//        System.out.println("zeczynam czekanie");
//        TimeUnit.SECONDS.sleep(5);
//        System.out.println("skonczylem czekanie");

    }


    @Then("submits new address")

    public void submit() {
        newAddressPage.submit();
    }


    @Then("user checks for correct information")

    public void checkInputsValue() {
        newAddressPage.checkInputs();


    }

    @Then("close browser")

    public void closeBrowser() {
        driver.quit();
    }


}
