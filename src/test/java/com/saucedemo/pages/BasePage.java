package com.saucedemo.pages;

import com.saucedemo.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {


    @FindBy(css = "span[class='title']")
    public WebElement pageSubTitle;

    @FindBy(id = "user-name")
    public WebElement userName;

    @FindBy(id = "password")
    public WebElement Password;

    @FindBy(id = "login-button")
    public WebElement loginButton;



    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    public String getPageSubTitle() {

        return pageSubTitle.getText();
    }
}
