package br.com.application.name.steps;

import br.com.application.name.commons.BaseTest;
import br.com.application.name.actions.HomeActions;
import cucumber.api.java.pt.Dado;

public class InitTestStep extends BaseTest {
        private HomeActions homeFuncionalidade;

    public InitTestStep() {
        this.homeFuncionalidade = new HomeActions();
    }

    @Dado("^que acesso a pagina inicial do sistema$")
    public void queAcessoAPaginaInicialDoSistema() {

    }
}
