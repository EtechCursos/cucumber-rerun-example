package br.com.application.name.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyAccountPage {


    public MyAccountPage(WebDriver webDriver) {
        PageFactory.initElements(webDriver, this);
    }

    @FindBy(id = "center_column")
    private WebElement lblMyAccount;

    public WebElement getLblMyAccount() {
        return lblMyAccount;
    }
}
