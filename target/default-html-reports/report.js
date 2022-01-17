$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "the user enters valid credentials for each \"\u003cuserType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks login button",
  "keyword": "And "
});
formatter.step({
  "name": "the user should be able to login successfully and page subtitle should be \"\u003csubtitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType",
        "subtitle"
      ]
    },
    {
      "cells": [
        "standarduser",
        "PRODUCTS"
      ]
    },
    {
      "cells": [
        "performanceglitchuser",
        "PRODUCTS"
      ]
    },
    {
      "cells": [
        "problemuser",
        "PRODUCTS"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "the user enters valid credentials for each \"standarduser\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserEntersValidCredentialsForEach(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserClicksLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login successfully and page subtitle should be \"PRODUCTS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserShouldBeAbleToLoginSuccessfullyAndPageSubtitleShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "the user enters valid credentials for each \"performanceglitchuser\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserEntersValidCredentialsForEach(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserClicksLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login successfully and page subtitle should be \"PRODUCTS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserShouldBeAbleToLoginSuccessfullyAndPageSubtitleShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "the user enters valid credentials for each \"problemuser\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserEntersValidCredentialsForEach(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserClicksLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login successfully and page subtitle should be \"PRODUCTS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserShouldBeAbleToLoginSuccessfullyAndPageSubtitleShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with locked out user credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "the user enters with valid credentials \"lockedOut\" and \"passWord\" and clicks login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserEntersWithValidCredentialsAndAndClicksLoginButton(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theErrorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"\u003cusername\u003e\" and \"\u003cpasswords\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "passwords"
      ]
    },
    {
      "cells": [
        "standard_user",
        "wrong"
      ]
    },
    {
      "cells": [
        "jjdh",
        "123"
      ]
    },
    {
      "cells": [
        "john",
        "@"
      ]
    },
    {
      "cells": [
        "standard_user",
        ""
      ]
    },
    {
      "cells": [
        "",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "problem_user",
        "wrong"
      ]
    },
    {
      "cells": [
        ".",
        "."
      ]
    },
    {
      "cells": [
        "problem_user",
        ""
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "wrong"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"standard_user\" and \"wrong\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"jjdh\" and \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"john\" and \"@\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"standard_user\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"problem_user\" and \"wrong\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \".\" and \".\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"problem_user\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"performance_glitch_user\" and \"wrong\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "the user logs in using following credentials \"performance_glitch_user\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.theUserLogsInUsingFollowingCredentialsAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.saucedemo.stepDefinitions.MyStepdefs.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});