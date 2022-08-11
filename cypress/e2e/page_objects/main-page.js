export class Main {
    static automationPracticeMainPage() {
        cy.visit("http://automationpractice.com/index.php")
    }
    static goToLogIn() {
        cy.wait(3000);
        cy.get(".login").click();
    }
    static goToDresses() {
        cy.wait(3000);
        cy.get(".sf-menu > :nth-child(2) > .sf-with-ul").click();
    }
    
}
