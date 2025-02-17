*** Settings ***
Library    BuiltIn

*** Test Cases ***
Test Addition
    #    Replace id: 1 with a valid Qase Id and uncomment the line below
    #    [Tags]    Q-1
    Evaluate Expression    12 + 2 + 2    16
    Evaluate Expression    2 + -3        -1

Test Subtraction
    #    Replace id: 2 with a valid Qase Id and uncomment the line below
    #    [Tags]    Q-2
    Evaluate Expression    12 - 2 - 2    8
    Evaluate Expression    2 - -3        5

*** Keywords ***
Evaluate Expression
    [Arguments]    ${expression}    ${expected}
    ${result}=    Evaluate    ${expression}
    Should Be Equal As Numbers    ${result}    ${expected}
