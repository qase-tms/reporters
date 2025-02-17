from behave import *


@given("a user is logged into the system")
def step_impl(context):
    pass


@given('the user has an active subscription with plan "{plan}" and status "{status}"')
def step_given_test_with_parameters(context, plan, status):
    pass


@when("the user tries to access a premium feature")
def step_impl(context):
    pass


@then("the feature should be accessible")
def step_impl(context):
    pass


@then("access should be denied with an error message")
def step_impl(context):
    assert False
