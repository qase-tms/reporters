from qase.pytest import qase


@qase.title("This shall be the title of the test case")
def test_qase_title():
    assert True
