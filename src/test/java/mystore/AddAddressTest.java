package mystore;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageobject.*;

public class AddAddressTest {
    private WebDriver driver;
    private MyStoreMainPage myStoreMainPage;
    private LoginPage loginPage;
    private AccountPage accountPage;
    private String login = "johnd@mail.com";
    private String password = "qwerty";
    private AddressPage addressPage;
    private NewAddressPage newAddressPage;

    @Before
    public void SetUp() {
        System.setProperty("webdriver.chrome.driver",
                "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/");

        myStoreMainPage = new MyStoreMainPage(driver);
        loginPage = new LoginPage(driver);
        accountPage = new AccountPage(driver);
        addressPage = new AddressPage(driver);
        newAddressPage = new NewAddressPage(driver);

    }

    @Test
    public void addAddressTest(){
        myStoreMainPage.goToAuthenticationPage();
        loginPage.loginAs(login, password);
        accountPage.goToAddress();
        addressPage.clickAddAddressButton();
        newAddressPage.completeRequiredFields("Dupa", "Dupa", "88888");
        newAddressPage.submit();

    }

    @After
    public void closeBrowser(){
        driver.quit();

    }
}
