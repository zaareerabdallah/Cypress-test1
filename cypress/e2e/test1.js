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
       
       cy.visit('https://www.saucedemo.com/')
       cy.get('[data-test="username"]').type("standard_user")
       cy.get('[data-test="password"]').type("secret_sauce")
       cy.get('[data-test="login-button"]').click()
    })


    it('enter data',()=>{
       cy.visit('https://automationteststore.com/')
       cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
       cy.get('#ContactUsFrm_first_name').type("abdallah")
       cy.get("input[id='ContactUsFrm_email']").type("abda.zaareer@gmail.com")
       cy.get('textarea[name="enquiry"]').type("gffbgjkfgnm")
       cy.get('button[title="Submit"]').click()
       
    
    })
   /* it('QA',()=>{
       
       
       
      cy.visit('https://automationteststore.com/')
      
      cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!")
      cy.get('a[title="Continue"]').should('have.property',"title")
      
   })*/
   it('title & url',()=>{
       
    cy.visit('https://automationteststore.com/index.php?rt=content/contact')

    cy.title().should("include","Us")
    cy.url().should("include","contact")
 })
 it('promese',()=>{
       
  cy.visit('https://automationteststore.com/')

  cy.get(".prdocutname").contains("Benefit Bella Bamba").click().then(function(element){
  cy.log(element.text()+ "Has been add")
  })
})
    it('collection price (oneprice)',()=>{
      cy.visit('https://automationteststore.com/')
      cy.get(".thumbnail").as("items");
       cy.get("@items").find(".oneprice").invoke('text').as('itemprice')

       cy.get('@itemprice').then((Pricetext)=>{
        let n = Pricetext.split("$")
        let total =0
          for(let i=0; i<n.length ;i++){
            cy.log(n[i])
            total+=Number(n[i])
          }
        cy.log(total)
       
       })
     })
     it('2class & each',() => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").each((element,index,list)=>{

          if(element.text().includes("Seaweed")){
              cy.wrap(element).click()
          }
      
      })
     });

    it('number elemant correct',()=>{
     cy.visit("https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html?product_list_limit=36")
     cy.get(".product-image-photo").its("length").should("eq",13)
    })


})
