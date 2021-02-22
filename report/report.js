$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#encoding: UTF-8"
    },
    {
      "line": 3,
      "value": "#author: Marcos Barbosa"
    }
  ],
  "line": 6,
  "name": "Cadastro de cliente",
  "description": "",
  "id": "cadastro-de-cliente",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 10824601501,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validar sucesso ao cadastrar um cliente",
  "description": "",
  "id": "cadastro-de-cliente;validar-sucesso-ao-cadastrar-um-cliente",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@web"
    },
    {
      "line": 8,
      "name": "@cadastro"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que acesso a pagina inicial do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "acesso a tela de registro",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencho os dados validos de cadastro",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clico no botao \"Register\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "visualizo a tela My Account",
  "keyword": "Entao "
});
formatter.match({
  "location": "InitTestStep.queAcessoAPaginaInicialDoSistema()"
});
formatter.result({
  "duration": 721879800,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.estouRealizandoOTeste()"
});
formatter.result({
  "duration": 2743057600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.preenchoDadosValidosCadastro()"
});
formatter.result({
  "duration": 3388342700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 16
    }
  ],
  "location": "CreateAccountSteps.clicoNoBotao(String)"
});
formatter.result({
  "duration": 3081643200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.visualizoATelaDeMyAccount()"
});
formatter.result({
  "duration": 61478000,
  "status": "passed"
});
formatter.after({
  "duration": 829550099,
  "status": "passed"
});
formatter.before({
  "duration": 7552313301,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validar sucesso ao cadastrar um cliente",
  "description": "",
  "id": "cadastro-de-cliente;validar-sucesso-ao-cadastrar-um-cliente",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 17,
      "name": "@web"
    },
    {
      "line": 17,
      "name": "@cadastro"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "que acesso a pagina inicial do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "acesso a tela de registro",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencho os dados validos de cadastro",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "clico no botao \"Registrar\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "visualizo a tela My Account",
  "keyword": "Entao "
});
formatter.match({
  "location": "InitTestStep.queAcessoAPaginaInicialDoSistema()"
});
formatter.result({
  "duration": 186000,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.estouRealizandoOTeste()"
});
formatter.result({
  "duration": 2048953899,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.preenchoDadosValidosCadastro()"
});
formatter.result({
  "duration": 2660334599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registrar",
      "offset": 16
    }
  ],
  "location": "CreateAccountSteps.clicoNoBotao(String)"
});
formatter.result({
  "duration": 28329399,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Registrar\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027DESKTOP-PFU7T82\u0027, ip: \u0027172.18.160.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\mpbar\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63301}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4544608ee14a317466b6b07fa3791c44\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Registrar\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat br.com.application.name.commons.SeleniumRobot.clickByText(SeleniumRobot.java:171)\r\n\tat br.com.application.name.steps.CreateAccountSteps.clicoNoBotao(CreateAccountSteps.java:23)\r\n\tat ✽.Quando clico no botao \"Registrar\"(Cadastro.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountSteps.visualizoATelaDeMyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 665182200,
  "status": "passed"
});
formatter.before({
  "duration": 7103808500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validar sucesso ao cadastrar um cliente",
  "description": "",
  "id": "cadastro-de-cliente;validar-sucesso-ao-cadastrar-um-cliente",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 17,
      "name": "@web"
    },
    {
      "line": 17,
      "name": "@cadastro"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "que acesso a pagina inicial do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "acesso a tela de registro",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencho os dados validos de cadastro",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "clico no botao \"Registrar\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "visualizo a tela My Account",
  "keyword": "Entao "
});
formatter.match({
  "location": "InitTestStep.queAcessoAPaginaInicialDoSistema()"
});
formatter.result({
  "duration": 139100,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.estouRealizandoOTeste()"
});
formatter.result({
  "duration": 3511662301,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.preenchoDadosValidosCadastro()"
});
formatter.result({
  "duration": 3771425900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registrar",
      "offset": 16
    }
  ],
  "location": "CreateAccountSteps.clicoNoBotao(String)"
});
formatter.result({
  "duration": 14641600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Registrar\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027DESKTOP-PFU7T82\u0027, ip: \u0027172.18.160.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\mpbar\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63332}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8fbbc5772d5e7ec1802f9409f77aeef6\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Registrar\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat br.com.application.name.commons.SeleniumRobot.clickByText(SeleniumRobot.java:171)\r\n\tat br.com.application.name.steps.CreateAccountSteps.clicoNoBotao(CreateAccountSteps.java:23)\r\n\tat ✽.Quando clico no botao \"Registrar\"(Cadastro.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountSteps.visualizoATelaDeMyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 727843500,
  "status": "passed"
});
});