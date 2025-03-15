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

import os
from qase.pytest import qase

//ANCHOR:syntax

def test_inline_attachment():
    #Test attaching an inline file.
    qase.attach(
        (str.encode("Sample text attachment"), "text/plain", "Inline-Attachment.txt")
    )
    //# test logic here
    
def test_external_attachment():
    #Test attaching an external file.
    file_path = os.path.join(os.getcwd(), "path/to/test-file.txt")  # Update path
    qase.attach(file_path)
    //# test logic here

@qase.step("Step with attachment")
def step_with_attachment():
    #Step demonstrating an attachment.
    qase.attach(
        (str.encode("Sample text attachment"), "text/plain", "sample.txt")
    )
    //# test logic here

def test_with_step_attachment():
    #Test including a step with an attachment.
    step_with_attachment()
   // # test logic here

//ANCHOR_END:syntax
