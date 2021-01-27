package Zadanie2;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.junit.*;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class FillForm {

    private WebDriver driver;
    private List<WebElement> genderRadioButtons;
    private Select role;


    @Before
    public void setUp() {

        // Uruchom nowy egzemplarz przeglądarki Chrome
        System.setProperty("webdriver.chrome.driver",
                "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();

        // Zmaksymalizuj okno przeglądarki
        driver.manage().window().maximize();
        // Przejdź do https://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html
        driver.get("https://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html");
    }

    @Test
    public void fillForm() {


//        // szukanie firstName
//        WebElement firstName = driver.findElement(By.name("firstName"));
//        firstName.clear();
//        firstName.sendKeys("John");
//        firstName.submit();

        //sprawdzanie czy wyświetla firstName
        WebElement firstNameDisp = driver.findElement(By.name("firstName"));
        if (firstNameDisp.isDisplayed()) {
            firstNameDisp.sendKeys("John");
            firstNameDisp.submit();
        } else {
            Assert.fail();
        }

//        // szukanie lastName
//        WebElement lastName = driver.findElement(By.name("lastName"));
//        lastName.clear();
//        lastName.sendKeys("Wick");
//        lastName.submit();

        //sprawdzanie czy wyświetla lastname
        WebElement lastNameDisp = driver.findElement(By.name("lastName"));
        if (lastNameDisp.isDisplayed()) {
            lastNameDisp.sendKeys("Wick");
            lastNameDisp.submit();
        } else {
            Assert.fail();
        }


//        // szukanie gender
//        genderRadioButtons = driver.findElements(By.className("radio-inline"));
//
//        genderRadioButtons.get(0).click();

        List<WebElement> genderRadioButtons = driver.findElements(By.className("radio-inline"));

        if (genderRadioButtons.get(0).isDisplayed()) {
            genderRadioButtons.get(0).click();
        } else {
            Assert.fail();
        }


//        // szukanie dateOfBirth
//        WebElement dob = driver.findElement(By.name("dob"));
//        dob.clear();
//        dob.sendKeys("01/13/2021");
//        dob.submit();

        //sprawdzanie czy wyświetla dob
        WebElement dobDisp = driver.findElement(By.name("dob"));
        if (dobDisp.isDisplayed()) {
            dobDisp.sendKeys("01/13/2021");
            dobDisp.submit();
        } else {
            Assert.fail();
        }

//        // szukanie adress
//        WebElement address = driver.findElement(By.name("address"));
//        address.clear();
//        address.sendKeys("Czerwoona 16/4");
//        address.submit();

        //sprawdzanie czy wyświetla address
        WebElement addressDisp = driver.findElement(By.name("address"));
        if (addressDisp.isDisplayed()) {
            addressDisp.sendKeys("Czerwoona 16/4");
            addressDisp.submit();
        } else {
            Assert.fail();
        }

//        // szukanie email
//        WebElement email = driver.findElement(By.name("email"));
//        email.clear();
//        email.sendKeys("email@emailowy.dupa");
//        email.submit();

        //sprawdzanie czy wyświetla email
        WebElement emailDisp = driver.findElement(By.name("email"));
        if (emailDisp.isDisplayed()) {
            emailDisp.sendKeys("email@emailowy.dupa");
            emailDisp.submit();
        } else {
            Assert.fail();
        }

//        // szukanie password
//        WebElement password = driver.findElement(By.name("password"));
//        password.clear();
//        password.sendKeys("pierogicyganskie14");
//        password.submit();

        //sprawdzanie czy wyświetla password
        WebElement passwordDisp = driver.findElement(By.name("password"));
        if (passwordDisp.isDisplayed()) {
            passwordDisp.sendKeys("pierogicyganskie14");
            passwordDisp.submit();
        } else {
            Assert.fail();
        }


//        // szukanie company
//        WebElement company = driver.findElement(By.name("company"));
//        company.clear();
//        company.sendKeys("Firma Firmowa");
//        company.submit();


        //sprawdzanie czy wyświetla company
        WebElement companyDisp = driver.findElement(By.name("company"));
        if (companyDisp.isDisplayed()) {
            companyDisp.sendKeys("Firma Firmowa");
            companyDisp.submit();
        } else {
            Assert.fail();
        }

//        // szukanie role
//        WebElement role = driver.findElement(By.name("role"));
//        role.clear();
//        role.sendKeys("QA");
//        role.submit();

        role = new Select(driver.findElement(By.id("role")));
        role.selectByVisibleText("Manager");

//
//
//        // szukanie expectation
//        WebElement expectation = driver.findElement(By.name("expectation"));
//        expectation.clear();
//        expectation.sendKeys("Good teamwork");
//        expectation.submit();

//        // szukanie comment
//        WebElement comment = driver.findElement(By.name("comment"));
//        comment.clear();
//        comment.sendKeys("To jest mój pierwszy automat testowy");
//        comment.submit();

        //sprawdzanie czy wyświetla comment
        WebElement commentDisp = driver.findElement(By.name("comment"));
        if (commentDisp.isDisplayed()) {
            commentDisp.sendKeys("To jest mój pierwszy automat testowy");
            commentDisp.submit();
        } else {
            Assert.fail();


            // szukanie buttonaSubmit
            WebElement submitButton = driver.findElement(By.className("btn btn-primary"));
            submitButton.clear();
            submitButton.submit();


        }
    }

//    @After
//    public void closeBrowser() {
//        driver.quit();
//    }

}



