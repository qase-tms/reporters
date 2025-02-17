from qase.pytest import qase


@qase.ignore()
@qase.title("This test is executed by Pytest, but not reported to qase")
def test_qase_ignore():
    assert True
