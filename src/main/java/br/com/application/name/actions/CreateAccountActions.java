package br.com.application.name.actions;

import br.com.application.name.commons.BaseTest;
import br.com.application.name.commons.SeleniumRobot;
import br.com.application.name.pages.CreateAccountPage;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class CreateAccountActions extends BaseTest {

    private CreateAccountPage createAccountPage;

    public CreateAccountActions() {
        this.createAccountPage = new CreateAccountPage(webDriver);
    }

    public void preencheFormulario(){
        wait.until(ExpectedConditions.visibilityOf(this.createAccountPage.getRdMr()));
        this.createAccountPage.getRdMr().click();
        this.createAccountPage.getInputFirstName().sendKeys(faker.name().firstName());
        this.createAccountPage.getInputLastName().sendKeys(faker.name().lastName());
        this.createAccountPage.getInputPassword().sendKeys(dataGenerator.getPassword());
        super.propertiesManager.setPropertieValue("PASSWORD", dataGenerator.getPassword());
        this.createAccountPage.getInputAddress().sendKeys("Rua Teste");
        this.createAccountPage.getInputCity().sendKeys("São Paulo");
        SeleniumRobot.selectByindex(3, this.createAccountPage.getSelectState());
        this.createAccountPage.getInputPostalCode().sendKeys("12345");
        SeleniumRobot.selectByindex(1,this.createAccountPage.getSelectCountry());
        this.createAccountPage.getInputPhone().sendKeys("11995356885");
    }
}
