describe('ui-components', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=buttoncomponent--primary&args=text:moshe;')
  );
  it('should render the component', () => {
    cy.get('siemensworkshop-button').should('exist');
    cy.click('')
  });
});
