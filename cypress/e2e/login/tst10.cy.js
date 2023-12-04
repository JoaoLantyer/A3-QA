/// <reference types="Cypress"/>

describe('TST010', () => {

     // TST010 - Validação de Aviso de Login Bem Sucedido ou Não
     it('Preenchendo formulário e apertando botão deve efetuar login', () => {
        // Acessando a página de login
        cy.visit("http://127.0.0.1:5500/tela-inicial/index.html")
        // Preenchendo o campo CPF
        cy.get('#cpf').type("0123456789")
        // Preenchendo o campo senha
        cy.get('#senha').type("Padrao@senha123")
        // Clicando no botão de entrar
        cy.get('#entrar').click()
        // Verificando se a mensagem de sucesso aparece na tela
        cy.get('#bem-vindo').should('contain', 'Login efetuado com sucesso!')
    })

})