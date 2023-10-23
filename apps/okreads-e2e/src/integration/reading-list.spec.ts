describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });
  
  it('Then: I can mark a book as finished', () => {
    // Open the reading list
    
    cy.get('[data-testing="toggle-reading-list"]').click();
  
   //click on finished check 
    cy.get('[data-testing="mark-as-finished-button"]').first().click({ force: true });
  
   //check for the text
    cy.get('[data-testing="finished-container"]').first().should('contain.text', 'Read on');
  });
});
