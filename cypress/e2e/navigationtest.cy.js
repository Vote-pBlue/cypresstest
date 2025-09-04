

import {leftMenuItems, footerMenuItems, homeMenuItems} from '../fixtures/testdata.js';

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
      
      Object.values(homeMenuItems).forEach(item => {
        cy.get('ul.button')
        .find(`a:contains("${item.title}")`)
        .should('have.attr', 'href')
        .and('include', item.url)

      })

    })

  })
