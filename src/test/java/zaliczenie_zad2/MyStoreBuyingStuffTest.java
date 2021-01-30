package zaliczenie_zad2;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageobject.MyCartPage;
import pageobject.OrderAddressPage;
import zaliczenie_zad1.pageObject.*;

import java.io.File;
import java.util.concurrent.TimeUnit;

public class MyStoreBuyingStuffTest {

    private WebDriver driver;
    private MyStoreMainPage myStoreMainPage;
    private LoginPage loginPage;
    private AccountPage accountPage;
    private ClothesPage clothesPage;
    private SearchResultsPage searchResultsPage;
    private String login = "grudzien.artur@gmail.com";
    private String password = "123456";
    private SweaterPage sweaterPage;
    private String quantity = "5";
    private MyCartPage myCartPage;
    private OrderAddressPage orderAddressPage;


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
        clothesPage = new ClothesPage(driver);
        sweaterPage = new SweaterPage(driver);
        myCartPage = new MyCartPage(driver);
        orderAddressPage = new OrderAddressPage(driver);

//        searchResultsPage = new SearchResultsPage(driver);


    }

    @Test
    public void addHummingbirdPrintedSweaterToCart() throws Exception {
        myStoreMainPage.goToAuthenticationPage();
        loginPage.loginAs(login, password);

        accountPage.goToClothes();
        clothesPage.clickOnSweaterThumbnail();
        sweaterPage.chooseSize();
        sweaterPage.setQuantity();
        System.out.println("dodało ilosć, teraz potwierdzenie");


        sweaterPage.addtoCart();

        TimeUnit.SECONDS.sleep(2);


        sweaterPage.goToCheckout();

        System.out.println("teraz bedzie proceed to chekout");
        myCartPage.goToCheckout();

        orderAddressPage.addressCofirmation();
        System.out.println("adresconfirmation");
        orderAddressPage.choosingShippingMethodPrestaShop();
        System.out.println("po choosing shipment");
        orderAddressPage.choosingPaymentMethodByCheck();
        System.out.println("teraz powinno byc po choosingpayment");
//        orderAddressPage.takeSnapShot();


    }

    {

    }



//    @After
//    public void closeBrowser(){
//        driver.quit();
//    }

}
