() => {
  cy.visit(baseUrl + "/main.html");
  cy.window().then(win => {
    const Animal = win.Animal;
    const Cat = win.Cat;
    const Dog = win.Dog;

    cy.stub(win.console, "log").as("consoleLog");

    const species = "Siamese";
    const myCat = new Cat(species);

    myCat.makeSound();
    cy.get("@consoleLog").should("be.calledWith", `The ${species} makes a sound`);

    myCat.purr();
    cy.get("@consoleLog").should("be.calledWith", "purr");

    const dogSpecies = "Golden Retriever";
    const myDog = new Dog(dogSpecies);

    myDog.makeSound();
    cy.get("@consoleLog").should("be.calledWith", `The ${dogSpecies} makes a sound`);

    myDog.bark();
    cy.get("@consoleLog").should("be.calledWith", "woof");
  });
}
