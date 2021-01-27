package mystore;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageobject.AccountPage;
import pageobject.LoginPage;
import pageobject.MyStoreMainPage;

public class LoginTest {
    private WebDriver driver;
    private MyStoreMainPage myStoreMainPage;
    private LoginPage loginPage;
    private AccountPage accountPage;

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
    }

    @Test
    public void testLoginWithProperCredentials(){
        myStoreMainPage.goToAuthenticationPage();
        loginPage.loginAs("johnd@mail.com", "qwerty");
        Assert.assertEquals("John Doe", accountPage.getLoggedUserName());

    }

    @After
    public void closeBrowser(){
        driver.quit();
    }

    }
