package com.saucedemo.stepDefinitions;

import com.saucedemo.pages.LoginPage;
import com.saucedemo.utilities.BrowserUtils;
import com.saucedemo.utilities.ConfigurationReader;
import com.saucedemo.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class MyStepdefs {

    LoginPage loginPage = new LoginPage();

    @Given("the user is on the login page")
    public void theUserIsOnTheLoginPage() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("the user enters valid credentials for each {string}")
    public void theUserEntersValidCredentialsForEach(String userType) {
        switch (userType) {
            case "standarduser":
                loginPage.userName.sendKeys(ConfigurationReader.get("standard_user_username"));
                loginPage.Password.sendKeys(ConfigurationReader.get("password"));
                break;
            case "problemuser":
                loginPage.userName.sendKeys(ConfigurationReader.get("problem_user_username"));
                loginPage.Password.sendKeys(ConfigurationReader.get("password"));
                break;

            case "performanceglitchuser":
                loginPage.userName.sendKeys(ConfigurationReader.get("performance_glitch_user_username"));
                loginPage.Password.sendKeys(ConfigurationReader.get("password"));
                break;
            default:
                System.out.println("INVALID user type");
                break;

        }

    }

    @And("the user clicks login button")
    public void theUserClicksLoginButton() {
        loginPage.loginButton.click();
    }

    @Then("the user should be able to login successfully and page subtitle should be {string}")
    public void theUserShouldBeAbleToLoginSuccessfullyAndPageSubtitleShouldBe(String expectedSubtitle) {
        BrowserUtils.waitFor(1);
        Assert.assertEquals(expectedSubtitle, loginPage.pageSubTitle.getText());

    }

    @When("the user enters with valid credentials {string} and {string} and clicks login button")
    public void theUserEntersWithValidCredentialsAndAndClicksLoginButton(String lockedOut,String passWord) {
        loginPage.userName.sendKeys(ConfigurationReader.get("locked_out_user_username"));
        loginPage.Password.sendKeys(ConfigurationReader.get("password"));
        loginPage.loginButton.click();
    }

    @Then("the error message should be displayed")
    public void theErrorMessageShouldBeDisplayed() {
        BrowserUtils.waitFor(1);
        Assert.assertTrue(loginPage.loginError.isDisplayed());

    }


    @When("the user logs in using following credentials {string} and {string}")
    public void theUserLogsInUsingFollowingCredentialsAnd(String name, String pass) {
        loginPage.login(name,pass);

    }


    @Then("Error message should be displayed")
    public void errorMessageShouldBeDisplayed() {
        BrowserUtils.waitForVisibility(loginPage.loginError,2);
        Assert.assertTrue(loginPage.loginError.isDisplayed());
    }
}
