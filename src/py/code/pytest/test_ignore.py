from qase.pytest import qase


@qase.ignore()
@qase.title("This test is executed by Pytest, but not reported to qase")
def test_qase_ignore():
    assert True

from qase.pytest import qase

// ANCHOR:syntax
@qase.ignore()
@qase.title("This test runs in Pytest but is not reported to Qase")
def test_ignored_by_qase():
    //# test logic here
// ANCHOR_END:syntax
