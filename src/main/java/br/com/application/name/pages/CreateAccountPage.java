package br.com.application.name.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage {

    public CreateAccountPage(WebDriver webDriver) {
        PageFactory.initElements(webDriver, this);
    }

    @FindBy(id = "id_gender1")
    private WebElement rdMr;

    @FindBy(id = "customer_firstname")
    private WebElement inputFirstName;

    @FindBy(id = "customer_lastname")
    private WebElement inputLastName;

    @FindBy(id = "postcode")
    private WebElement inputPostalCode;

    @FindBy(id = "passwd")
    private WebElement inputPassword;

    @FindBy(id = "days")
    private WebElement selectDateBirth;

    @FindBy(id = "address1")
    private WebElement inputAddress;

    @FindBy(id = "city")
    private WebElement inputCity;

    @FindBy(id = "id_state")
    private WebElement SelectState;

    @FindBy(id = "id_country")
    private WebElement SelectCountry;

    @FindBy(id = "phone_mobile")
    private WebElement inputPhone;

    @FindBy(id = "alias")
    private WebElement inputAddressAlias;

    @FindBy(id = "submitAccount")
    private WebElement btRegister;

    public WebElement getRdMr() {
        return rdMr;
    }

    public WebElement getInputLastName() {
        return inputLastName;
    }

    public WebElement getInputFirstName() {
        return inputFirstName;
    }

    public WebElement getInputPostalCode() {
        return inputPostalCode;
    }

    public WebElement getInputPassword() {
        return inputPassword;
    }

    public WebElement getSelectDateBirth() {
        return selectDateBirth;
    }

    public WebElement getInputAddress() {
        return inputAddress;
    }

    public WebElement getInputCity() {
        return inputCity;
    }

    public WebElement getSelectState() {
        return SelectState;
    }

    public WebElement getSelectCountry() {
        return SelectCountry;
    }

    public WebElement getInputPhone() {
        return inputPhone;
    }

    public WebElement getInputAddressAlias() {
        return inputAddressAlias;
    }

    public WebElement getBtRegister() {
        return btRegister;
    }
}
