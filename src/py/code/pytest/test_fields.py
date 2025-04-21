import pytest
from qase.pytest import qase

def load_markdown_content():
    with open("tests/examples/markdown.md", "r") as file:
        return file.read()

markdown_content = load_markdown_content()

// ANCHOR:syntax

class TestPriority:
    @qase.title("Test case with Priority - Low")
    @qase.priority("low")
    def test_priority_low(self):
        //# test logic here

    @qase.title("Test case with Priority - High")
    @qase.priority("high")
    def test_priority_high(self):
        //# test logic here

class TestSeverity:
    @qase.title("Test case with Severity - Critical")
    @qase.severity("critical")
    def test_severity_critical(self):
        //# test logic here

class TestLayer:
    @qase.title("Test case with Layer - API")
    @qase.layer("api")
    def test_layer_api(self):
        //# test logic here

class TestMetadataFields:
    @qase.title("Test case with Description field")
    @qase.description(markdown_content)
    def test_description(self):
        //# test logic here

    @qase.title("Test case with Preconditions field")
    @qase.preconditions(markdown_content)
    def test_preconditions(self):
        //# test logic here

    @qase.title("Test case with Postconditions field")
    @qase.postconditions(markdown_content)
    def test_postconditions(self):
        //# test logic here
        
class TestAllFields:
    @qase.title("Test case with multiple fields")
    @qase.fields(
        ("severity", "normal"),
        ("priority", "high"),
        ("layer", "unit"),
        ("description", "Example description"),
        ("preconditions", "Precondition example."),
        ("postconditions", "Postcondition example."),
    )
    def test_with_all_fields(self):
        //# test logic here
// ANCHOR_END:syntax
