Feature: New account creation

  Scenario: New account
    Given user is on the main page
    And user goes to the authentication page
    When user completes email box with la1l1alpa@lalala.com
    And user clicks on create an account button
    When user completes first name Artur, last name December and password qwerty12345
    And user clicks on register button
    Then success message is displayed
#    And close browser2