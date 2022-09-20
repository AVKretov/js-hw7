import data from "../fixtures/data.json";
var hall;
describe("UITest", () => {
  it("happyPath", () => {
    cy.visit("http://qamid.tmweb.ru/client/index.php");
    cy.get(".movie-seances__time-block")
      .should("not.be.disabled")
      .first()
      .click();
    cy.get(".movie-seances__hall-title").then((text) => {
      hall = text;
    });
  });
});
console.log(hall);
