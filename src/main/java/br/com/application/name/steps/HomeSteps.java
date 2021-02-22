package br.com.application.name.steps;

import br.com.application.name.actions.HomeActions;
import cucumber.api.java.pt.E;

public class HomeSteps {

    private HomeActions homeActions;

    public HomeSteps() {
            this.homeActions =  new HomeActions();
    }

    @E("^acesso a tela de registro$")
    public void estouRealizandoOTeste(){
            this.homeActions.registerAccess();
    }
}
