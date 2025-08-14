

import {leftMenuItems, footerMenuItems} from '../fixtures/testdata.js';

describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

    it('navigation buttons exist and are functional', () => {
      Object.values(leftMenuItems).forEach(item => {
        cy.get('ul.leftmenu')
        .find(`a:contains("${item.title}")`)
        .should('have.attr', 'href')
        .and('include', item.url)
      });

      Object.values(footerMenuItems).forEach(item => {
        cy.get('#footerPanel')
        .find(`a:contains("${item.title}")`)
        .should('have.attr', 'href')
        .and('include', item.url)
        });
      
        cy.get('li.home').click();
        cy.url().should('include', 'parabank/index.htm');
      
        cy.get('li.aboutus').click();
        cy.url().should('include', 'parabank/about.htm');
        cy.get('h1').should('contain', 'ParaSoft Demo Website');
      
        cy.get('li.contact').click();
        cy.url().should('include', 'parabank/contact.htm');
        cy.get('h1').should('contain', 'Customer Care');
      })

    });
