import Page from './page'

class MoviesPage extends Page {
    /**
     * define elements
     */
    get username () { return $('#username') }
    get password () { return $('#password') }
    get loginButton () { return $('.btn-success') }
    get successRegister () { return $('.alert-success') }
    get registerLink() {return $('a[href="/register"]')}

    /**
     * define or overwrite page methods
     */

    clickLogin(){
        this.loginButton.click();
    }

    signup(){
        this.loginButton.click();
        
    }

    register(){
        this.registerLink.click();
    }

    getSuccessMsg(){
        this.successRegister.waitForDisplayed({ timeout: 10000 });
        return this.successRegister.getText();
    }
}

export default new MoviesPage()