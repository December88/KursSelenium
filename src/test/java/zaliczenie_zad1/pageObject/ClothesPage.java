package zaliczenie_zad1.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ClothesPage {

    public ClothesPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }

    private WebDriver driver;

    @FindBy(xpath = "/html/body/main/section/div/div[2]/section/section/div[3]/div/div[1]/article[2]/div/a/img")
    WebElement sweaterButton;

    public void clickOnSweaterThumbnail(){
        sweaterButton.click();
    }


}
