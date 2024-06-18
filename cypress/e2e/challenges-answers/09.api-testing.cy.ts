/// <reference types="cypress" />


describe("Given there is a Star Wars API provided", () => {
    describe("When I search for spaceships", () => {
      it(`should verify the Death Star Hyperdrive`, () => {
        
        cy.request("https://swapi.dev/api/starships").as("deathstar");
        cy.get("@deathstar").then(result => {
          let results = [];
          const arraylength =  result.body.results;
            arraylength.forEach((x) => {
              cy.log('X: ' + x.hyperdrive_rating);
              results.push(x.hyperdrive_rating);
              // expect(x.hyperdrive_rating).to.include('2.0');
            });

            results.forEach((resultItem) => {
              cy.log('resultItem = ' + resultItem);
            })
            expect('2.0').to.be.oneOf(results);

        });
      });
    });
  });
  