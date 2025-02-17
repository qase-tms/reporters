Feature: Table feature
  It is a table feature

  Scenario Outline: Table scenario
    Given I have a table with <rows> rows and <columns> columns
    Then the table should have <rows> rows and <columns> columns

    Examples:
      | rows | columns |
      | 1    | 2       |
      | 2    | 3       |
      | 3    | 4       |
