import data from "../fixtures/data.json";

describe("adminLogin", () => {
  beforeEach(() => {
    cy.visit(`${data.url}`);
  });

  it("happyPath", () => {
    cy.loginAdmPage(data.mail, data.pass);
    cy.contains("Администраторррская").should("be.visible");
  });
  it("negativePath", () => {
    cy.get(`${data.emailInput}`).type("sdfsdf@df.er");
    cy.get(`${data.passInput}`).type("sdfsdf");
    cy.get(".login__button").click();
    cy.get("body").should("have.text", "Ошибка авторизации!");
  });
});
