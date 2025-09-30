describe('Todo Page', () => {
  it('should create a new todo', () => {
    cy.visit('http://localhost:5173/todos')

    cy.findByLabelText('Add new todo').type('New Todo')
    cy.findByRole('button', { name: /add/i }).click()
    cy.findByText('New Todo').should('exist')
  })

  it('should create and delete a new todo', () => {
    cy.visit('http://localhost:5173/todos')

    cy.findByLabelText('Add new todo').type('New Todo')
    cy.findByRole('button', { name: /add/i }).click()
    cy.findByText('New Todo').should('exist')

    cy.findByRole('button', { name: /delete/i }).click()
    cy.findByText('New Todo').should('not.exist')
  })
})
