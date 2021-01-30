package zaliczenie_zad1.pageObject;

import net.bytebuddy.asm.Advice;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPage {

    private WebDriver driver;

    @FindBy(className = "account")
    WebElement userName;

    @FindBy(id = "identity-link")
    WebElement infoButton;

    @FindBy(id = "addresses-link")
    WebElement addressButton;

    @FindBy(id = "category-3")
    WebElement clothesButton;

    @FindBy(name = "s")
    WebElement searchBox;

    public AccountPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    public String getLoggedUserName(){
        return userName.getText();
    }

    public void goToInformation(){
        infoButton.click();
    }

    public void goToAddress(){
        addressButton.click();
    }

    public void goToClothes(){
        clothesButton.click();
    }

    public void typeInSearchBox(){
        searchBox.clear();
        searchBox.sendKeys("Hummingbird Printed Sweater" + Keys.ENTER);


    }




}
