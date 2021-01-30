package zaliczenie_zad1.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchResultsPage {

    private WebDriver driver;

    @FindBy (xpath = "//*[@id=\"js-product-list\"]/div[1]/article[1]/div/a/img")
    WebElement clickOnSweater;

    public SearchResultsPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }


    public void chooseSweater(){
        clickOnSweater.click();
    }
}
