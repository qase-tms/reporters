from qase.pytest import qase


@qase.suite("First suite")
def test_suite():
    assert True


@qase.suite("First suite\tSecond Suite")  # Use `\t` to nest suites.
def test_suite_nesting_1():
    assert True


@qase.suite(
    "First suite.Second Suite.Third Suite"
)  # You can also use the dot notation to nest suites.
def test_suite_nesting_2():
    assert True
