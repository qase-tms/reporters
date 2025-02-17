*** Settings ***
Library    ../../resources/examples/steps.py

*** Variables ***
${var1}            1
${var2}            1
${var3}            5

*** Test Cases ***
Parametrized Test One
    [Tags]     qase.params:[var1, var2]
    Check numbers   ${var1}    ${var2}    ${var3}
    Passed Step

Parametrized Test Two
    [Tags]     qase.params:[var1, var2]
    Check numbers   ${var1}    ${var2}    ${var3}
    Passed Step


*** Keywords ***
Check numbers
    [Arguments]    ${var1}    ${var2}      ${var3}
    Should Be Equal As Numbers    ${var1}    ${var2}
    Should Be Equal As Numbers    ${var3}    ${var3}
