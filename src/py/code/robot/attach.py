import os

from qase.robotframework.method import qase
from robot.api.deco import keyword
from selenium import webdriver
from selenium.common.exceptions import WebDriverException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


@keyword("Capture Screenshot And Attach To Qase")
def capture_and_attach_screenshot(
    driver: webdriver, screenshot_path: str, save_locally: bool = False
):
    """
    Capture a screenshot of the current page in the browser and attach it to Qase.
    """

    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    driver = webdriver.Chrome(options=chrome_options)

    try:
        # Attach screenshot directly to Qase report
        qase.attach(driver.get_screenshot_as_png(), "image/png", "screenshot.png")

        # Save the screenshot locally if requested
        if save_locally:
            driver.save_screenshot(screenshot_path)

        return True

    except WebDriverException as e:
        print(f"Failed to capture screenshot: {str(e)}")
        return False
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return False
    driver.quit()
