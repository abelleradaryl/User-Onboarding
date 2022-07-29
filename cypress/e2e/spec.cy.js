describe('form', () => {
  beforeEach(() => {
      cy.visit("http://localhost:3000")
  })


  it('Makes sure name input is entered', () => {
      cy.get('input[name="username"]')
      .type('FullName')
      .should('have.value', 'FullName')
  })

  it('Makes sure email input is entered ', () => {
      cy.get('input[type="email"]')
      .type('email@foo.com')
      .should('have.value', 'email@foo.com')
  })

  it('Makes sure password input has a string', () => {
      cy.get('input[type="password"]')
      .type('Password')
      .should('have.value', 'Password')
  })

  it('Makes sure the checkbox works', () => {
      cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
  })

  it('Enters all fields and submits the form', () => {
      cy.get('form')
      .submit()
  })

})