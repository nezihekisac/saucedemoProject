package com.saucedemo.pages;

import com.saucedemo.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage {


    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "h3[data-test='error']")
    public WebElement loginError;



   public void login(String userNameStr, String passwordStr) {
        userName.sendKeys(userNameStr);
       Password.sendKeys(passwordStr);
        loginButton.click();

    }
}