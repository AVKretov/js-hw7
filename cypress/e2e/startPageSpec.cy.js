describe("StartPage", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get(".page-nav .page-nav__day").should("have.length", 7);
  });
});
