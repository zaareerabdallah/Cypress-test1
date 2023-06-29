/// <reference types = "Cypress" />
beforeEach(()=>{
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload();
});
describe(" login ",()=>{
    it('test in username &password is correcte',()=>{
       
       
       
       cy.visit('https://automationteststore.com/')
       
       cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!")
       cy.get('a[title="Continue"]').should('have.property',"title")
       
    })
})
