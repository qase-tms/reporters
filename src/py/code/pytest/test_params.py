import pytest
from qase.pytest import qase
// ANCHOR:syntax
# First test using parametrization to check different values.
@pytest.mark.parametrize("parameter", ["Value 1", "Value 2"])
def test_with_parameter(parameter: str):
    #Test with different parameter values.
    //# test logic here

@pytest.mark.parametrize(
    "username, password",
    [
        pytest.param("User1", "password1", id="User1 Login"),
        pytest.param("User2", "password2", id="User2 Login"),
    ],
)
def test_group_parameters(username: str, password: str):
    #Test with multiple user credentials.
    //# test logic here
// ANCHOR_END:syntax
