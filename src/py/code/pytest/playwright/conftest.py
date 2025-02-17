import pytest


# Override the browser fixture to always use WebKit
@pytest.fixture(scope="session")
def browser(playwright):
    browser = playwright.webkit.launch()
    yield browser
    browser.close()


# Configure Playwright to record video for all tests
@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    return {
        **browser_context_args,
        "record_video_dir": "./videos",  # Directory where videos will be saved
        "record_video_size": {"width": 1280, "height": 720},  # Video resolution
    }
