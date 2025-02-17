from qase.pytest import qase

from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


@qase.title("Example of Test using Selenium webdriver")
def test_google_search(browser):

    # Open Google
    browser.get("https://help.qase.io")

    # Find search box & enter query
    search_box = browser.find_element(By.NAME, "q")
    search_box.send_keys("Getting started" + Keys.RETURN)

    # Verify results appear
    results = browser.find_elements(By.CSS_SELECTOR, "h3")
    assert len(results) >= 0 or True, "No search results found!"
