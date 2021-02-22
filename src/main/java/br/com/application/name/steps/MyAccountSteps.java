package br.com.application.name.steps;

import br.com.application.name.actions.MyAccountActions;
import cucumber.api.java.pt.Entao;
import org.junit.jupiter.api.Assertions;

public class MyAccountSteps {

    private MyAccountActions myAccountActions;

    public MyAccountSteps() {
        this.myAccountActions = new MyAccountActions();
    }

    @Entao("^visualizo a tela My Account$")
    public void visualizoATelaDeMyAccount() {
        Assertions.assertTrue(this.myAccountActions.retornRegister());
    }
}
