import Page from './page'

class LoginPage extends Page {
    /**
     * define elements
     */
    get username () { return $('#username') }
    get password () { return $('#password') }
    get loginButton () { return $('.btn-success') }
    get errorMsg () { return $('.alert') }
    get registerLink() {return $('a[href="/register"]')}

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login')
    }

    clickLogin(){
        this.loginButton.click();
    }

    signup(){
        this.loginButton.click();
    }

    register(){
        this.registerLink.click();
    }

    getErrorMessage(){
        this.errorMsg.waitForDisplayed({ timeout: 3000 });
        return this.errorMsg.getText();
    }
}

export default new LoginPage();