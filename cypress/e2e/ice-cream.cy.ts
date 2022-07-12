describe('calculate ice cream sku', () => {
  it('using UI', () => {
    cy.visit('/');
    cy.location('pathname').should('equal', '/');

    cy.contains('h2', 'Ice Cream').click();

    cy.get('[name=volume]').clear().type('10');
    cy.get('[name=flavor]').select('Vanilla');
    cy.get('[name=milk]').clear().type('3');

    cy.contains('button', 'Calculate').click();

    cy.contains('h2', 'Result').should('have.text', 'Result 94.50');
  });
});
