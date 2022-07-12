describe('calculate ice cream sku', () => {
  it('using UI', () => {
    cy.visit('/');
    cy.location('pathname').should('equal', '/');
  });
});
