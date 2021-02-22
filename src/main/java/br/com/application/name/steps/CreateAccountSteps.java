package br.com.application.name.steps;

import br.com.application.name.commons.SeleniumRobot;
import br.com.application.name.actions.CreateAccountActions;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Quando;

public class CreateAccountSteps {

    private CreateAccountActions createAccountActions;

    public CreateAccountSteps(){
        this.createAccountActions = new CreateAccountActions();
    }

    @Dado("^preencho os dados validos de cadastro$")
    public void preenchoDadosValidosCadastro() {
        this.createAccountActions.preencheFormulario();
    }

    @Quando("^clico no botao \"([^\"]*)\"$")
    public void clicoNoBotao(String botao) {
        SeleniumRobot.clickByText(botao);
    }
}
