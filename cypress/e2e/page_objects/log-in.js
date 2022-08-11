export class Login {
    static writeLoginData(email, passwd) {
        cy.get('#email').type(email);
        cy.get('#passwd').type(passwd);
    }
    static signIn() {
        cy.get('#SubmitLogin').click();
    }
    static isUserLoggedIn() {
        cy.wait(2000);
        cy.get('.logout').should('have.text', '\n\t\t\tSign out\n\t\t');
    }
    static signOut() {
        cy.get('.logout').click();
    }
}