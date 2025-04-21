from qase.pytest import qase

// ANCHOR:syntax
@qase.id(1)  # Please, replace the id (1), with an existing test case Id from your project.
def test_qase_id():
    // //test logic here

@qase.id([2, 3])  # The result of this test case will be posted against the linked test cases.
def test_multiple_qase_id():
    // //test logic here
// ANCHOR_END:syntax