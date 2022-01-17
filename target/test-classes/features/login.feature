@login
Feature:

  Background:
    Given the user is on the login page

  @test1
  Scenario Outline: Login with valid credentials
    When the user enters valid credentials for each "<userType>"
    And the user clicks login button
    Then the user should be able to login successfully and page subtitle should be "<subtitle>"

    Examples:
      | userType              | subtitle |
      | standarduser          | PRODUCTS |
      | performanceglitchuser | PRODUCTS |
      | problemuser           | PRODUCTS |

  @test2
  Scenario: Login with locked out user credentials
    When the user enters with valid credentials "lockedOut" and "passWord" and clicks login button
    Then the error message should be displayed

  @test3
  Scenario Outline: Login with invalid credentials
    When the user logs in using following credentials "<username>" and "<passwords>"
    Then Error message should be displayed

    Examples:
      | username                | passwords    |
      | standard_user           | wrong        |
      | jjdh                    | 123          |
      | john                    | @            |
      | standard_user           |              |
      |                         | secret_sauce |
      |                         |              |
      | problem_user            | wrong        |
      |.                        |.             |
      | problem_user            |              |
      | performance_glitch_user | wrong        |
      | performance_glitch_user |              |







