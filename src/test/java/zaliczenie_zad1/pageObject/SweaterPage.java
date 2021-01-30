package zaliczenie_zad1.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SweaterPage {


    private WebDriver driver;

    public SweaterPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }

    @FindBy(id = "group_1")
    WebElement choosingSizeRadioButton;


    @FindBy(name = "qty")
    WebElement quantity;

    @FindBy(xpath ="//*[@id=\"add-to-cart-or-refresh\"]/div[2]/div/div[2]/button")
    WebElement addToCartButton;

    @FindBy( xpath = "/html/body/div[1]/div/div/div[2]/div/div[2]/div/div/a")
    WebElement proceedToCheckoutButton;



    public void chooseSize() {
        choosingSizeRadioButton.click();
        choosingSizeRadioButton.sendKeys("M");
        choosingSizeRadioButton.click();


    }

    public void setQuantity(String quantity) {
        this.quantity.clear();
        this.quantity.sendKeys(quantity);
    }
    public void addToCart(){
        addToCartButton.click();
    }

    public void goToCheckout(){
        proceedToCheckoutButton.click();
    }



}
