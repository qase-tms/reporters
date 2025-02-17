import pytest
from webdriver_manager.chrome import ChromeDriverManager

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service


@pytest.fixture
def browser():
    """Fixture to initialize and quit WebDriver"""

    # Create Chrome options
    chrome_options = Options()

    # Uncomment the options below to customize the browser behavior:

    # Run in headless mode (no GUI)
    chrome_options.add_argument("--headless")

    # Disable GPU acceleration (recommended for headless mode)
    # chrome_options.add_argument("--disable-gpu")

    # Run Chrome in incognito mode
    # chrome_options.add_argument("--incognito")

    # Disable browser sandboxing (useful in some CI/CD environments)
    # chrome_options.add_argument("--no-sandbox")

    # Ignore certificate errors
    # chrome_options.add_argument("--ignore-certificate-errors")

    # Disable browser notifications
    # chrome_options.add_argument("--disable-notifications")

    # Use a specific window size
    # chrome_options.add_argument("--window-size=1920,1080")

    # Initialize WebDriver with options
    driver = webdriver.Chrome(options=chrome_options)

    # Use this line instead of the previous one if you wish to download the ChromeDriver binary on the fly
    # driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

    driver.maximize_window()

    yield driver

    driver.quit()
