beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
///<reference types = "Cypress"/>

describe('our first test', () => {
    it('print price of each item that has one price without dollar sign', () => {
      cy.visit('https://automationteststore.com/') 
    //   cy.get('a[href*="product/product&product_id="]').contains("Flash Bronzer Body Gel").click()
 cy.get('a[href*="rt=product/category&path"]').contains("Hair Care").click();

// cy.get(".fixed_wrapper .prdocutname").each((element,index,list)=>{
// if (element.text().includes("Pantene")) {
//     cy.wrap(element).click()
    
// }


// })

cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as("firstItemText") //alias nickname
        
cy.get("@firstItemText").its('lenght').should('be.greaterThan', 4)
// cy.get('@firstItemText').should('include', 'Pantene')

    });
    
});

