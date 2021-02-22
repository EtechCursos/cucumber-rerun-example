#language: pt
#encoding: UTF-8
#author: Marcos Barbosa


  Funcionalidade: Cadastro de cliente

    @web @cadastro
    Cenario: Validar sucesso ao cadastrar um cliente

      Dado que acesso a pagina inicial do sistema
      E acesso a tela de registro
      E preencho os dados validos de cadastro
      Quando clico no botao "Register"
      Entao visualizo a tela My Account

    @web @cadastro
    Cenario: Validar sucesso ao cadastrar um cliente

      Dado que acesso a pagina inicial do sistema
      E acesso a tela de registro
      E preencho os dados validos de cadastro
      Quando clico no botao "Registrar"
      Entao visualizo a tela My Account
