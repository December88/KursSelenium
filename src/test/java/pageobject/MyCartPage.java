package pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyCartPage {

    private WebDriver driver;

    public MyCartPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy( xpath = "/html/body/main/section/div/div/section/div/div[2]/div[1]/div[2]/div/a")
    WebElement proceedToCheckoutButton;

    public void goToCheckout(){
        proceedToCheckoutButton.click();
    }


}
