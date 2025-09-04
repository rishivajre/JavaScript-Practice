// navigate
/* user pass submit
& verify */

describe("", () => {
    it ('', ()=>{

        cy.visit('https//:linkedin.com/signin/');
        cy.get('#username').fill('username');
        cy.get('[data-cy = "password"]').fill('password');
        cy.get('.submit').click();

        cy.title().expect('.to.have', 'LinkedIn');
        
        cy.frames();

        const popUp = cy.get('uncaughtException').click()
        
        popUp.each($el =>{
            cy.get()({confirm})
        }) 

        cy.go
    })

})