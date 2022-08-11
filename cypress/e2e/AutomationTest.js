import { Main } from "./page_objects/main-page";
import { Login } from "./page_objects/log-in";
import { Buy } from "./page_objects/buy";

context('Automation practice', () => {

  beforeEach(() => {
    Main.automationPracticeMainPage();
  })
  describe('Login', () => {
    let data;
    before(() => {
      cy.fixture("login").then((loginData) => {
        data = loginData;
      })
    })

    it('should log in and log out', () => {
      data.forEach(data => {
        Main.goToLogIn();
        Login.writeLoginData(data.email, data.password);
        Login.signIn();
        Login.isUserLoggedIn();
        Login.signOut();
      });
    })
  })
  describe('Add 2 products to cart', () => {
    let data;
    before(() => {
      cy.fixture("login").then((loginData) => {
        data = loginData;
      })
    })

    it('should log in and add 2 products to cart', () => {
        Main.goToLogIn();
        Login.writeLoginData(data[0].email, data[0].password);
        Login.signIn();
        Login.isUserLoggedIn();
        Main.goToDresses();
        Buy.addProductToCart();
        Buy.continueBrowsing();
        Buy.addProductToCart();
        Buy.proceedToCheckout();
        Buy.assertIfCorrect();
    })
  })
  describe('Add 2 products to cart with json', () => {
    let data;
    before(() => {
      cy.fixture("products").then((productsData) => {
        data = productsData;
      })
    })

    it('should log in and add 2 products to cart from json file', () => {
        Main.goToDresses();
        data.forEach(data => {
          Buy.addProductToCartJSON(data.name);
          Buy.continueBrowsing();
        });
        Buy.proceedToCheckout();
        Buy.assertIfCorrect();
    })
  })
})