import * as GETBooks from '../requests/getbooks.request';

describe('GET Books', () => {
  it('Listar todos os livros', () => {
    GETBooks.allBooks().should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.not.null;
  })
  });

  it('Listar um livro específico existente', () => {
    GETBooks.specificBook('9781593277574').should((response) => {
    expect(response.status).to.eq(200);
    })
  });

	it('Listar um livro específico inixistente', () => {
    GETBooks.specificBook('9781593277573').should((response) => {
    expect(response.status).to.eq(400);
		expect(response.body.message).to.eq("ISBN supplied is not available in Books Collection!")
    })
  });

});