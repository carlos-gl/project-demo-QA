/// <reference types="cypress" />

describe('test form login', () => {
	before(() => {
		cy.visit('/')
	});

	it('test valid login', () => {
		cy.login(Cypress.env("user_login"), Cypress.env("user_password"))
		// valida que o nome do usuário é o mesmo que foi inputado na tela de login
		cy.get('[id="userName-value"]').should('have.text', Cypress.env("user_login"))
		// valida se está no path correto após feito login
		cy.url().should('eq', 'https://demoqa.com/books')
	});
});