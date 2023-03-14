Cypress.Commands.add('login', (user, password) => {
    cy.xpath('//h5[text()="Book Store Application"]').click()
    cy.get('[id="login"]').click()
    cy.get('[id="userName"]').type(user)
    cy.get('[id="password"]').type(password)
    cy.get('[id="login"]').click()
})