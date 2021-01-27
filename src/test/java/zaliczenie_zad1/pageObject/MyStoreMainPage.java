package zaliczenie_zad1.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyStoreMainPage {
    private WebDriver driver;


    @FindBy(id="_desktop_user_info")
    WebElement userInfoButton;


    public MyStoreMainPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    public void goToAuthenticationPage(){
        userInfoButton.click();
    }

}
