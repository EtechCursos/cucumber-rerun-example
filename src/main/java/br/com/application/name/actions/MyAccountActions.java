package br.com.application.name.actions;

import br.com.application.name.commons.BaseTest;
import br.com.application.name.pages.MyAccountPage;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class MyAccountActions extends BaseTest {

    private MyAccountPage myAccountPage;

    public MyAccountActions() {
        this.myAccountPage = new MyAccountPage(webDriver);
    }

    public boolean retornRegister(){
        wait.until(ExpectedConditions.visibilityOf(this.myAccountPage.getLblMyAccount()));
        return this.myAccountPage.getLblMyAccount().isDisplayed();
    }
}
