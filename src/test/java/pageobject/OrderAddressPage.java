package pageobject;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.File;

public class OrderAddressPage {

    private WebDriver driver;

    public OrderAddressPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    @FindBy(name = "confirm-addresses")
    WebElement confirmAddress;

    @FindBy(id = "hook-display-before-carrier")
    WebElement shippingMethodMenuUnfolding;

    @FindBy(name = "delivery_option[7521]")
    WebElement prestaShopRadioButton;

    @FindBy(name = "confirmDeliveryOption")
    WebElement shippingMethodConfirmation;

    @FindBy(id = "checkout-payment-step")
    WebElement paymentMethodUnfolding;

    @FindBy(id = "payment-option-1")
    WebElement paymentMethodByCheck;

    @FindBy(id = "conditions_to_approve[terms-and-conditions]")
    WebElement termsConditions;

    @FindBy(xpath = "//*[@id=\"payment-confirmation\"]/div[1]/button")
    WebElement orderWithObligationToPayButton;

    WebElement screenShotSave;


    public void addressCofirmation() {
        confirmAddress.click();
    }

    public void choosingShippingMethodPrestaShop() {
//        shippingMethodMenuUnfolding.click();
//        System.out.println("zaraz click na presta shop");
//        prestaShopRadioButton.click();
        System.out.println("zaraz klikanie confirmacji shippingu");
        shippingMethodConfirmation.click();


    }


    public void choosingPaymentMethodByCheck() {
//        paymentMethodUnfolding.click();
        paymentMethodByCheck.click();
        termsConditions.click();
        orderWithObligationToPayButton.click();


    }
//
//    void takeSnashot(driver, "C://test.png") {
//
//    }
//
//    public static void takeSnapShot() throws Exception{
//
//        //Convert web driver object to TakeScreenshot
//
//        TakesScreenshot scrShot =((TakesScreenshot));
//
//
//        //Call getScreenshotAs method to create image file
//
//        File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);
//
//        //Move image file to new destination
//
//        File DestFile=new File("C:\\file.png");
//
//        //Copy file at destination
//
//        FileUtils.copyFile(SrcFile, DestFile);
//
//    }

}




//    public void savingSceenShot(){
//        screenShotSave.sendKeys(Keys.);
//    }




