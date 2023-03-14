/// <reference types="cypress" />

function allBooks() {
  return cy.request({
    method: 'GET',
    url: 'BookStore/v1/Books',
    failOnStatusCode: false,
  })
}

function specificBook(ISBN) {
  return cy.request({
    method: 'GET',
    url: 'BookStore/v1/Book?ISBN='+ISBN,
    failOnStatusCode: false,
  })
}
  
export { allBooks };
export { specificBook };