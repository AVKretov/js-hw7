import data from "../fixtures/data.json";
var halls;
describe("UITest", () => {
  it("happyPath", () => {
    cy.loginAdmPage(data.mail, data.pass);
    halls = cy.get(".conf-step__list");
    cy.visit("http://qamid.tmweb.ru/client/index.php");
    cy.get(".movie-seances__hall-title").should("contain", "TEST HALL");
    cy.get(".movie-seances__time-block")
      .should("not.be.disabled")
      .first()
      .click();
  });
});
