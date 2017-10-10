Feature: 1.1: Test the page title
    As a developer
    I want to be able to test if a page has a certain title

    Background:
        Given the site "/" is open
        And   the browser window is 1024 by 768 pixels

    Scenario: 1.1.1: Test if the demo app has the title "Hello World"
        Then the title is "Hello World"
        Then take a screen shot
