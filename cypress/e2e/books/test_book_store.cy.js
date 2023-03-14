/// <reference types="cypress" />

describe('test form book store', () => {
	beforeEach(() => {
		cy.visit('/')
        cy.login(Cypress.env("user_login"), Cypress.env("user_password"))
	});

	it('add book', () => {			
		cy.get('[id="see-book-Speaking JavaScript"]').click()
		cy.xpath('//button[text()="Add To Your Collection"]').click()
		cy.xpath("//span[text()='Profile']").click()
		// valida que o ID do livro é o mesmo que foi adicionado
		cy.xpath('//span[@id="see-book-Speaking JavaScript"]').should('have.id', 'see-book-Speaking JavaScript')
		// valida que não existe outro livro além do adicionado
		cy.xpath('//div[@class="ReactTable -striped -highlight"]/div/div[2]/div[2]/div/div[2]/div/span').should('not.exist')
	});

	it('delete book', () => {
		cy.get('[id="userName-value"]')
		cy.xpath("//span[text()='Profile']").click()
		cy.get('[id="delete-record-undefined"]').click()
		cy.get('[id="closeSmallModal-ok"]').click()
		// valida que o registro foi excluído
		cy.xpath('//div[@class="ReactTable -striped -highlight"]/div/div[2]/div[1]/div/div[2]/div/span').should('not.exist')
		// realiza o logout
		cy.xpath("//button[text()='Log out']").click()
		// valida que o logout foi feito corretamente
		cy.url().should('eq', 'https://demoqa.com/login')
	});
});