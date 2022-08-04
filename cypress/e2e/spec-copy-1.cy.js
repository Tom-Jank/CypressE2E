describe('Login Test', function () {
  //do this before each test
  beforeEach(function () {
      //  cy.visit('http://automationpractice.com/index.php?');
      //  cy.get('.login').click();
      cy.server()
      cy.fixture('login').as('data').then((data) => {
      cy.route('GET', 'login, data')
    })
  })
  // first test bad data
  it('Test Case1', function () {
    cy.visit('http://automationpractice.com/index.php?');
    cy.get('.login').click();
    cy.get('#email').clear().type(this.data[0].email)
    cy.get('#passwd').clear().type(this.data[0].password)
    cy.get("#SubmitLogin").click();
  });
  // second test good data
  it('Test Case2', function () {
    cy.get('.login').click();
    cy.get('#email').clear().type(this.data[1].email)
    cy.get('#passwd').clear().type(this.data[1].password)
    cy.get("#SubmitLogin").click();
  });

  /*
  it('Add to cart from JSON', function () {
    cy.get(this.prodcts[0].id).click();
    cy.get('.continue', {timeout:7000}).should('be.visible').click({force:true});
    cy.get(this.prodcts[1].id).click();
    cy.get('.button-container > .button-medium > span', {timeout:7000}).should('be.visible').click({force:true});
  }); */
});
describe('Buying test', function () {
  beforeEach(function () {
    //  cy.visit('http://automationpractice.com/index.php?');
    //  cy.get('.login').click();
    cy.server()
    cy.fixture('products').as('data').then((data) => {
    cy.route('GET', 'login, data')
  })
})
//Te Waity teoretycznie nie potrzebne ale naspamowałem bo czasami mi się stronka wieszała jak za szybko klikał
it('Add to cart', function () {
  // GO TO DRESSES
  cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();
  // ADD PRINTED DRESS TO CARD
  cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
  cy.wait(4000)
  cy.get('.continue', {timeout:7000}).should('be.visible').click({force:true});
  cy.wait(2000)
  // ADD PRINTED DRESS 2 TO CARD
  cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
  cy.wait(4000)
  cy.get('.continue', {timeout:7000}).should('be.visible').click({force:true});
  cy.wait(2000)
  cy.get(this.data[0].id, {timeout:7000}).click();
  cy.wait(4000)
  cy.get('.continue', {timeout:7000}).should('be.visible').click({force:true});
  cy.wait(2000)
  cy.get(this.data[1].id, {timeout:7000}).click();
  cy.get('.button-container > .button-medium > span', {timeout:7000}).should('be.visible').click({force:true});
  cy.wait(4000)
});
});
