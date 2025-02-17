from qase.pytest import qase


@qase.muted()
@qase.title("This test shall be marked as 'Muted', in Qase")
def test_qase_title():
    assert True
