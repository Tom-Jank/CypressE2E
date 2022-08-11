export class Buy {
    static addProductToCart() {
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
    }
    static continueBrowsing() {
        cy.wait(3000);
        cy.get('.continue > span').click()
    }
    static proceedToCheckout() {
        cy.get('.button-container > .button-medium > span').click();
    }
    static assertIfCorrect() {
        cy.get('[title="View my shopping cart"] > .ajax_cart_quantity').should('have.text', '2');
    }
    static addProductToCartJSON(name) {
        cy.get('#center_column').find(".product-container").contains(name).parents('.product-container').contains('Add to cart').click();
    }
}