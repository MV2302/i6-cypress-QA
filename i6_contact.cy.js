/// <reference types="Cypress" />


describe('Test Suite', () => {

    it('Launch the website', () => {
    cy.visit('https://i6.io/contact-us')
    })
    
    it('Enter Values in the Field', () => {
    
    cy.get('#First-Name').type('Test', {force: true})
    cy.get('#Last-Name').type('Quality')
    cy.get('#Email').type('aaaa88888')
    cy.get('#Enquiry-2').select('Careers')
    cy.get('#Subscribe-to-Email').check()
    cy.get('input[type="submit"]').eq(0).click()
    cy.get('#email-form').within(() => {
    cy.get('#Company-2').invoke('prop', 'validationMessage')
    .should('equal', 'Please fill in this field.')
    })
    })
    })






    






