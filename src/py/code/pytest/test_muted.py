from qase.pytest import qase
//ANCHOR:syntax
@qase.muted()
@qase.title("This test shall be marked as 'Muted', in Qase")
def test_qase_title():
    //#test logic here
//ANCHOR_END:syntax