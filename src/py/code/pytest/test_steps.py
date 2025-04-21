from qase.pytest import qase
//ANCHOR:syntax
class TestLoginFlow:

    @qase.step("Go to login page")  #step 1
    def go_to_login_page(self):
        self.verify_page_loading()  #Substep for step 1

    @qase.step("Verify page loading")  #definfing substep here
    def verify_page_loading(self):
        assert True, "Page loaded successfully"

    @qase.step("Fill the required fields") #step 2
    def fill_the_required_fields(self):
        self.fill_username() #substep 1 for step2
        self.fill_password() #substep 2 for step 2

    @qase.step("Fill username") #defining substep 1 for step 2
    def fill_username(self):
        assert True, "Username filled"

    @qase.step("Fill password") ##defining substep 2 for step 2
    def fill_password(self):
        assert True, "Password filled"

    @qase.step("Click the login button") #step 3
    def click_login_button(self):
        assert True, "Login button clicked"

    @qase.step("Verify the landing page header") #step 4
    def verify_landing_page_header(self):
        header_text = "Welcome, User!"
        assert header_text == "Welcome, User!", "Header text is incorrect"

    @qase.title("Login Flow")
    def test_login_flow(self):
        self.go_to_login_page()
        self.fill_the_required_fields()
        self.click_login_button()
        self.verify_landing_page_header()


class TestDeleteProject:

    @qase.title("Delete Project")
    def test_delete_project(self):
        """
        Using the 'with' syntax.
        """
        with qase.step("Navigate to projects page"): #step 1
            self.verify_page_loading()

        with qase.step("Select the project to delete"): #step 2
            self.click_delete_button()

        with qase.step("Click the delete button"): #step 3
            assert True, "Delete button clicked"

        with qase.step("Confirm the project deletion"): #step 4
            assert True, "Project deletion confirmed"

        with qase.step("Verify the project was deleted"): #step 5
            self.verify_project_deleted()

    def verify_page_loading(self):
        assert True, "Projects page loaded successfully"

    def click_delete_button(self):
        assert True, "Delete button clicked"

    def verify_project_deleted(self):
        assert True, "Project deleted successfully"
//ANCHOR_END:syntax    