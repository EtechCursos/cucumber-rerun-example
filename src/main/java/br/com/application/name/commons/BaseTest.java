package br.com.application.name.commons;

import br.com.application.name.enums.Web;
import br.com.application.name.interfaces.WebApplication;
import com.github.javafaker.Faker;
import cucumber.api.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class BaseTest {

	protected static WebDriver webDriver;
	protected static WebDriverWait wait;
	protected static Faker faker = new Faker();
	protected static DataGenerator dataGenerator = new DataGenerator();
	protected PropertiesManager propertiesManager = new PropertiesManager();
	private WebApplication webApplication;

	/**
	 * Inicializa o {@code WebDriver} e o {@code WebDriverWait}
	 */
	protected void initializeWebApplication() {
		if(getOsName().toLowerCase().contains("win")){
			webApplication = Web.CHROME_WINDOWS;
			webDriver = webApplication.getDriver();
			webDriver.manage().window().maximize();
		} else{
			webApplication = Web.CHROME;
			webDriver = webApplication.getDriver();
			webDriver.manage().window().fullscreen();
		}
		webDriver.get(PropertiesManager.getPropertiesValue("URL_QA"));
		wait = new WebDriverWait(webDriver, 20);
	}

	/**
	 * fecha o driver web
	 */
	protected static void closeWeb() {
		webDriver.quit();
	}

	/**
	 * tira prints
	 * 
	 * @param driver
	 * @return
	 */
	private String takeScreenshot(WebDriver driver) {
		return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BASE64);
	}

	public String getOsName(){
		return System.getProperty("os.name");
	}

}
