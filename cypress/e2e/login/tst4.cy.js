/// <reference types="Cypress"/>

describe('TST004', () => {

    // TST004 - Requisitos de Complexidade de Senha
    it('Deve verificar se a senha atende aos requisitos de complexidade', () => {
        // Acessando a página de cadastro
        cy.visit("http://127.0.0.1:5500/tela-cadastro/index.html")

        // Testando uma senha sem número
        cy.get('#senha').clear().type('Senha@')
        // Verificando se a propriedade de validade do campo senha é falsa
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', false)

        // Testando uma senha sem letra maiúscula
        cy.get('#senha').clear().type('senha@123')
        // Verificando se a propriedade de validade do campo senha é falsa
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', false)

        // Testando uma senha sem letra minúscula
        cy.get('#senha').clear().type('SENHA@123')
        // Verificando se a propriedade de validade do campo senha é falsa
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', false)

        // Testando uma senha sem caractere especial
        cy.get('#senha').clear().type('Senha123')
        // Verificando se a propriedade de validade do campo senha é falsa
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', false)

        // Testando uma senha que atende a todos os requisitos de complexidade
        cy.get('#senha').clear().type('Senha@123')
        // Verificando se a propriedade de validade do campo senha é verdadeira
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', true)
    })

})