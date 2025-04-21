*** Settings ***
Library    BuiltIn
// ANCHOR:syntax
//*** Test Cases ***
// Title of test case
    [Tags]    Q-1    #Replace id: 1 with a valid Qase Id
//   # test logic here
// ANCHOR_END:syntax
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
