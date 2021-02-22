package br.com.runTest;

import br.com.application.name.commons.BaseTest;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(
		jsonReport = "target/cucumber.json",
		retryCount = 1,
		detailedReport = true,
		detailedAggregatedReport = true,
		overviewReport = true,
		coverageReport = true,
		jsonUsageReport = "target/cucumber-usage.json",
		usageReport = true,
		includeCoverageTags = {"@cadastro"},
		outputFolder = "target")

@CucumberOptions(strict = true,
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		plugin = { "pretty:STDOUT",
				"html:report",
				"json:target/cucumber.json",
				"usage:target/cucumber-usage.json",
				"junit:target/cucumber-results.xml",
				"rerun:target/rerun.txt"},
		features = { ".//src//test//resources//features//" },
		glue = {"br.com.application.name.steps",
				"br.com.application.name.configuration" },
		tags = {"@cadastro"})

public class RunTest extends BaseTest {

}






//@RunWith(ExtendedCucumber.class)
