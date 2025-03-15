from qase.pytest import qase

// ANCHOR:syntax
@qase.suite("Main Test Suite")
def test_basic_suite():
    //# test logic here

@qase.suite("Main Test Suite\tSub Suite")  # Use `\t` to create a nested structure
def test_nested_suite_tab():
    //# test logic here

@qase.suite("Main Test Suite.Sub Suite.Inner Suite")  # Dot notation for deeper nesting
def test_nested_suite_dot():
    //# test logic here
// ANCHOR_END:syntax
