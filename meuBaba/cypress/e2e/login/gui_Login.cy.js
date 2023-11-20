/// <reference types="Cypress"/>

describe('Teste funcional de login e cadastro', () => {

    // TST001 - Número de caracteres de CPF
    it('Deve limitar o campo de CPF a 11 caracteres', () => {
        cy.visit("http://127.0.0.1:5500/meuBaba/tela-inicial/index.html")
        cy.get('#cpf').type("12345678901234567890")
        cy.get('#cpf').should('have.value', '12345678901')
    })

    // TST002 - Tipo de caracteres para o CPF
    it('Deve aceitar apenas números no campo de CPF', () => {
        cy.visit("http://127.0.0.1:5500/meuBaba/tela-inicial/index.html")
        cy.get('#cpf').type("abcdefghij")
        cy.get('#cpf').should('have.value', '')
    })

    // TST010 - Validação de Aviso de Login Bem Sucedido ou Não
    it('Preenchendo formulário e apertando botão deve efetuar login', () => {
        cy.visit("http://127.0.0.1:5500/meuBaba/tela-inicial/index.html")
        cy.get('#cpf').type("0123456789")
        cy.get('#senha').type("padraosenha123")
        cy.get('#entrar').click()
        cy.get('#bem-vindo').should('contain', 'Login efetuado com sucesso!')
    })

    // TST004 - Requisitos de Complexidade de Senha
    it('Deve verificar se a senha atende aos requisitos de complexidade', () => {
        cy.visit("http://127.0.0.1:5500/meuBaba/tela-cadastro/index.html")

        // Testa uma senha sem número
        cy.get('#senha').clear().type('Senha@')
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', false)

        // Testa uma senha sem letra maiúscula
        cy.get('#senha').clear().type('senha@123')
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', false)

        // Testa uma senha sem letra minúscula
        cy.get('#senha').clear().type('SENHA@123')
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', false)

        // Testa uma senha sem caractere especial
        cy.get('#senha').clear().type('Senha123')
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', false)

        // Testa uma senha que atende a todos os requisitos de complexidade
        cy.get('#senha').clear().type('Senha@123')
        cy.get('#senha').invoke('prop', 'validity').should('have.property', 'valid', true)
    })

    // TST005 - Validação do E-mail
    it('Verificar se o email é válido', () => {
        cy.visit("http://127.0.0.1:5500/meuBaba/tela-cadastro/index.html")
        cy.get('#email').type("emailfalso@email.com.br")
        cy.get('#email').should('attr', 'type', 'email')
    })

})
