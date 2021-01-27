Feature: Google search - one word

  Scenario: User can search any word

    Given an open browser with google.com

    When a keyword selenium is entered in input field

    Then the first result should contain selenium

    And close browser
