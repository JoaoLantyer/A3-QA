/// <reference types="Cypress"/>

describe('TST001', () => {

    // TST001 - Número de caracteres de CPF
   // Testando se o campo de CPF está limitando a entrada para 11 caracteres
   it('Deve limitar o campo de CPF a 11 caracteres', () => {
       // Acessando a página de login
       cy.visit("http://127.0.0.1:5500/tela-inicial/index.html")
       // Digitando uma sequência de 20 dígitos no campo CPF
       cy.get('#cpf').type("12345678901234567890")
       // Verifica se apenas os primeiros 11 dígitos foram aceitos
       cy.get('#cpf').should('have.value', '12345678901')
   })

})