describe('Amazon Web', () => {
  
  it('visit amazon web', () => {
    cy.fixture('elements').then((loc)=>{
      cy.searchAnItem(loc.ferrari)
      cy.clickSearchButton()
      cy.verifyResultSet(loc.ferrari)
    }) 
  })
  it('visit amazon web again', () => {
    cy.fixture('elements').then((loc)=>{
      cy.searchAnItem(loc.iphone)
      cy.clickSearchButton()
      cy.verifyResultSet(loc.iphone)
    })  
  })
  it('visit amazon the third time', () => {
    cy.fixture('elements').then((loc)=>{
      cy.searchAnItem(loc.pixel)
      cy.clickSearchButton()
      cy.verifyResultSet(loc.pixel)
    })  
  })
})