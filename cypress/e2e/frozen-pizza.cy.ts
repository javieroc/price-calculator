describe('calculate ice cream sku', () => {
  it('using UI', () => {
    cy.visit('/');
    cy.location('pathname').should('equal', '/');

    cy.contains('h2', 'Frozen Pizza').click();

    cy.get('[name=diameter]').clear().type('5');
    cy.get('[name=quantity]').clear().type('10');
    cy.get('[name=cheese]').select('Mozzarella');
    cy.get('[name=crust]').select('Neapolitan');
    cy.get('input[type=checkbox]').eq(0).check({ force: true });
    cy.get('input[type=checkbox]').eq(2).check({ force: true });
    cy.get('input[type=checkbox]').eq(4).check({ force: true });
    cy.contains('button', 'Calculate').click();

    cy.contains('h2', 'Result').should('have.text', 'Result 14.51');
  });
});
