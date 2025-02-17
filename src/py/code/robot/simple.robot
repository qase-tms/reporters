*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${URL}             https://example.com
${BROWSER}         Chrome
${EXPECTED_TITLE}  Example Domain

*** Test Cases ***
Verify Homepage Title
    [Documentation]  Test to verify the title of the homepage.
    Open Browser     ${URL}    ${BROWSER}
    Title Should Be  ${EXPECTED_TITLE}
    Close Browser
