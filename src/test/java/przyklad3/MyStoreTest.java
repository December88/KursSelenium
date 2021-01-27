package przyklad3;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.junit.*;
import java.util.Random;

public class MyStoreTest {

    private WebDriver driver;

    String[] products = {"mug", "t-shirt", "notebook", "dupa", "cycki", "trampki"};

    Random random = new Random();
    int randomInteger = random.nextInt(50); //losuje liczby z przedziału 0 - 49

    @Before
    public void setUp() {

        // Uruchom nowy egzemplarz przeglądarki Chrome
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();

        // Zmaksymalizuj okno przeglądarki
        driver.manage().window().maximize();
        // Przejdź do  prod-kurs.coderslab.pl
        driver.get("https://prod-kurs.coderslab.pl");
    }
    @Test
    public void testMyStore() {
        // Znajdź element wprowadzania tekstu na podstawie jego nazwy
        WebElement element = driver.findElement(By.name("s"));
        // Wyczyść tekst zapisany w elemencie
        element.clear();

        // Wpisz informacje do wyszukania
        element.sendKeys(products[randomInteger % products.length]);

        // Prześlij formularz
        element.submit();
    }
    @After
    public void tearDown() throws Exception {
        // Zamknij przeglądarkę
        driver.quit();
    }
}