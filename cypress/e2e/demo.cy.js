/// <reference types="cypress"/>

describe('StackDemo', () => {
    it('SignIn', () => {
      cy.visit('https://bstackdemo.com')
    
      cy.contains('Sign In').click();
       cy.get('#username > .css-yk16xz-control > .css-1hwfws3',{timeout: 60000}).type("demouser{enter}")
      cy.get('#password > .css-yk16xz-control > .css-1hwfws3',{timeout: 60000}).type("testingisfun99{enter}")
      cy.get('#login-btn').click()
      cy.wait(2000)
     
    });
    it('Checkout a product', () => {
      cy.visit('https://bstackdemo.com')
      cy.contains('Add to cart').click()
      cy.get('.buy-btn').click()
      cy.visit('https://bstackdemo.com/checkout')
      cy.get('#firstNameInput').type('Juhi');
      cy.get('#lastNameInput').type('Singh');
      cy.get('#addressLine1Input').type('Chennai')
      cy.get('#provinceInput').type('TN')
      cy.get('#postCodeInput').type('600087')
      cy.get('#checkout-shipping-continue').click()
      cy.wait(2000)
      cy.get('.button').click()
    
    })


    it('Logout ', () => {
      cy.wait(2000)
      cy.get('#logout').click()
      
    })
    })
