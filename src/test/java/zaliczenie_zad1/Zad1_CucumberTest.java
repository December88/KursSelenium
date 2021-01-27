package zaliczenie_zad1;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/cucumber/features/mystore_adding_new_address",
        plugin = {"pretty", "html:out"})


public class Zad1_CucumberTest {

}

