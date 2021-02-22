package br.com.application.name.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AuthenticationPage {


    public AuthenticationPage(WebDriver webDriver) {
        PageFactory.initElements(webDriver, this);
    }

    @FindBy(id = "email_create")
    private WebElement inputEmailCreate;

    @FindBy(id = "SubmitCreate")
    private WebElement btCreateAccount;

    public WebElement getInputEmailCreate() {
        return inputEmailCreate;
    }

    public WebElement getBtCreateAccount() {
        return btCreateAccount;
    }
}
