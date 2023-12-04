/// <reference types="Cypress"/>

describe('TST002', () => {

     // TST002 - Tipo de caracteres para o CPF
     it('Deve aceitar apenas números no campo de CPF', () => {
        // Acessando a página de login novamente
        cy.visit("http://127.0.0.1:5500/tela-inicial/index.html")
        // Tentando digitar letras no campo CPF
        cy.get('#cpf').type("abcdefghij")
        // Verificando se o campo CPF rejeitou as letras e está vazio
        cy.get('#cpf').should('have.value', '')
    })

})