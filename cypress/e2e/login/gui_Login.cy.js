/// <reference types="Cypress"/>

// Definindo um conjunto de testes chamada 'Teste funcional de login e cadastro'
describe('Teste funcional de login e cadastro', () => {

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

     // TST002 - Tipo de caracteres para o CPF
    it('Deve aceitar apenas números no campo de CPF', () => {
        // Acessando a página de login novamente
        cy.visit("http://127.0.0.1:5500/tela-inicial/index.html")
        // Tentando digitar letras no campo CPF
        cy.get('#cpf').type("abcdefghij")
        // Verificando se o campo CPF rejeitou as letras e está vazio
        cy.get('#cpf').should('have.value', '')
    })

     // TST010 - Validação de Aviso de Login Bem Sucedido ou Não
    it('Preenchendo formulário e apertando botão deve efetuar login', () => {
        // Acessando a página de login
        cy.visit("http://127.0.0.1:5500/tela-inicial/index.html")
        // Preenchendo o campo CPF
        cy.get('#cpf').type("0123456789")
        // Preenchendo o campo senha
        cy.get('#senha').type("padraosenha123")
        // Clicando no botão de entrar
        cy.get('#entrar').click()
        // Verificando se a mensagem de sucesso aparece na tela
        cy.get('#bem-vindo').should('contain', 'Login efetuado com sucesso!')
    })

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