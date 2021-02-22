package br.com.application.name.actions;

import br.com.application.name.commons.BaseTest;
import br.com.application.name.pages.AuthenticationPage;
import br.com.application.name.pages.HomePage;

public class HomeActions extends BaseTest {

    private HomePage homePage;
    private AuthenticationPage authenticationPage;

    public HomeActions(){
        this.homePage = new HomePage(webDriver);
        this.authenticationPage = new AuthenticationPage(webDriver);
    }

    public void registerAccess(){
        this.homePage.getBtLogin().click();
        double x = (Math.random() * ((999 - 0) + 1)) + 0;
        this.authenticationPage.getInputEmailCreate().sendKeys(faker.internet().emailAddress()+(int)x);
        this.authenticationPage.getBtCreateAccount().click();
    }


}
