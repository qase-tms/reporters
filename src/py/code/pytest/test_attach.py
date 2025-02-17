import os

from qase.pytest import qase


def test_inline_attachment():
    qase.attach(
        (
            str.encode("This is a simple string attachment"),
            "text/plain",
            "Inline-Attachment.txt",
        )
    )
    assert 1 == 1


def test_external_attachment():
    current_directory = os.getcwd()
    qase.attach(
        f"{current_directory}/tests/examples/attachments/test-file.txt",
    )
    assert 1 == 1


@qase.step("A step with attachment")
def step_with_attachment():
    qase.attach(
        (str.encode("This is a simple string attachment"), "text/plain", "simple.txt")
    )
    pass


def test_with_step_attachment():
    step_with_attachment()
    assert 1 == 1
