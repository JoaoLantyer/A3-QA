/// <reference types="Cypress"/>

describe('TST004', () => {

     // TST005 - Validação do E-mail
     it('Verificar se o email é válido', () => {
        // Acessando a página de cadastro
        cy.visit("http://127.0.0.1:5500/tela-cadastro/index.html")
        // Preenchendo o campo de e-mail com um valor válido
        cy.get('#email').type("emailfalso@email.com.br")
        // Verificando se o campo de e-mail tem o atributo type configurado como 'email'
        cy.get('#email').should('attr', 'type', 'email')
    })

})