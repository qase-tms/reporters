import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


@pytest.fixture
def browser():
    """Fixture to initialize and quit WebDriver"""

    driver = webdriver.Chrome()

    # Use this line instead of the prev if you wish to download the ChromeDriver binary on the fly
    # driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

    driver.maximize_window()

    """Fixture to initialize headless WebDriver"""
    options = Options()
    options.add_argument("--headless")

    yield driver

    driver.quit()
