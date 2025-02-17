import random

from qase.robotframework.method import qase
from robot.api.deco import keyword


@keyword("Step 01")
def step01():
    pass


@keyword("Step 02")
def step02():
    pass


@keyword("Passed step")
def passed_step():
    pass


@keyword("Failed step")
def failed_step():
    assert False


@keyword("Generate Random Integer")
def generate_random_integer(lower, upper):
    return random.randint(int(lower), int(upper))


@keyword("Add Integers")
def attach(a: int, b: int):
    qase.attach(
        (str.encode("This is a simple string attachment"), "text/plain", "Inline.txt")
    )
    return str(a + b)
