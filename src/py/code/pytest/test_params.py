import pytest
from qase.pytest import qase


# First test using parametrization to check different values.
@pytest.mark.parametrize("Parameter", ["Value 1", "Value 2"])
def test_with_parameter(Parameter: str):
    """
    This test checks the system's reaction to different parameter values. In this case,
    we test with "Value 1" and "Value 2". The behavior of the system should vary depending
    on the parameter value.
    """

    assert Parameter in ["Value 1", "Value 2"], f"Unexpected parameter: {Parameter}"
    print(f"Test executed with parameter: {Parameter}")


@pytest.mark.parametrize(
    "username, password",
    [
        pytest.param("@alice", "pass123", id="Alice B"),
        pytest.param("@bob", "pass456", id="Bob C"),
    ],
)
def test_group_parameters(username: str, password: str):
    """
    This test simulates logging in with different user credentials. It checks if the login
    process behaves correctly for different users with different usernames and passwords.
    """

    assert isinstance(
        username, str
    ), f"Expected string for username, got {type(username)}"
    assert isinstance(
        password, str
    ), f"Expected string for password, got {type(password)}"

    if username == "@alice":
        assert (
            password == "pass123"
        ), f"Expected password for Alice is 'pass123', got {password}"
    elif username == "@bob":
        assert (
            password == "pass456"
        ), f"Expected password for Bob is 'pass456', got {password}"

    print(f"Test executed for user: {username} with password: {password}")
