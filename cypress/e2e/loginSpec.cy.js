import data from "../fixtures/data.json";

describe("adminLogin", () => {
  beforeEach(() => {
    cy.visit(`${data.url}`);
  });

  it("happyPath", () => {
    cy.get(`${data.emailInput}`).type(`${data.email}`);
    cy.get(`${data.passInput}`).type(`${data.pass}`);
    cy.get(".login__button").click();
    cy.contains("Администраторррская").should("be.visible");
  });
  it("negativePath", () => {
    cy.get(`${data.emailInput}`).type("sdfsdf@df.er");
    cy.get(`${data.passInput}`).type("sdfsdf");
    cy.get(".login__button").click();
    cy.get("body").should("have.text", "Ошибка авторизации!");
  });
});
