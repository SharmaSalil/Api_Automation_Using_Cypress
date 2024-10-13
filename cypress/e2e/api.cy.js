/// <reference types="cypress" />

describe("check", () => {

    it("check api", () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts'
        }).then((response) => {

            let body = JSON.stringify(response.body)
            cy.log(body)
            expect(response.status).to.eq(200)
        });
    })

})