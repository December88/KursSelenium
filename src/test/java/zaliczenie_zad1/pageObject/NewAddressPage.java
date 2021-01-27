package zaliczenie_zad1.pageObject;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import zaliczenie_zad1.MyStoreAddNewAddress;

import java.sql.SQLOutput;

public class NewAddressPage {

    private WebDriver driver;

    public WebElement getAliasInput() {
        return aliasInput;
    }

    @FindBy(name = "alias")
    WebElement aliasInput;

    @FindBy(name = "address1")
    WebElement addressInput;

    @FindBy(name = "city")
    WebElement cityInput;

    @FindBy(name = "postcode")
    WebElement postcodeInput;

    @FindBy(name = "phone")
    WebElement phoneInput;

    @FindBy(css = ".btn.btn-primary")
    WebElement saveButton;





    public NewAddressPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }

    public void completeRequiredFields(String alias, String address, String city, String postal_code, String phone){
        aliasInput.sendKeys(alias);
        addressInput.sendKeys(address);
        cityInput.sendKeys(city);
        postcodeInput.sendKeys(postal_code);
        phoneInput.sendKeys(phone);

    }

    public void checkInputs(String alias, String address, String city, String postal_code, String phone){
        System.out.println(alias + address + city + postal_code + phone);


        String aliasValue = aliasInput.getText();
        System.out.println(aliasValue + " z lewej cos powinno byc");


        System.out.println("dupa daup powyzej powinno sie copokazac");

        System.out.println(aliasValue);

//
//        Assert.assertEquals(aliasValue, alias);
//
//        System.out.println(aliasValue);
//
//        String addressValue = addressInput.getText();
//        Assert.assertEquals(addressValue, address);
//        String cityValue = cityInput.getText();
//        Assert.assertEquals(cityValue, city);
//        String postal_codeValue = postcodeInput.getText();
//        Assert.assertEquals(postal_codeValue, postal_code);
//        String phoneValue = phoneInput.getText();
//        Assert.assertEquals(phoneValue, phone);
//
//
//        addressInput.getText();
//        cityInput.getText();
//        postcodeInput.getText();
//        phoneInput.getText();
        System.out.println(aliasInput.getText());

    }






    public void submit(){
        saveButton.click();
    }
}
