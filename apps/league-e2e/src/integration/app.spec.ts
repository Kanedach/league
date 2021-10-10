import {
  getAddInputText,
  getChampionElementsCy,
  getChampionLastPlayedCy,
  getChampionLevelCy,
  getChampionNameCy,
  getChampionPointsCy,
  getGreeting,
  getLeagueFlexCy,
  getLeagueSoloDuoCy,
  getMatchListQueueCy,
  getSearchButton,
  getSummonersNameCy,
} from '../support/app.po';

describe('league', () => {
  beforeEach(() => {
    cy.visit('/'), cy.viewport('macbook-15');
  });

  it('should display Title', () => {
    // Custom command example, see `../support/commands.ts` file
    //cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('League Dashboard');
  });

  it('summoner information is present', () => {
    getAddInputText().type('kanedach');
    getSearchButton().click();
    getSummonersNameCy().contains('Kanedach');
  });

  it('summoner League is present', () => {
    getAddInputText().type('kanedach');
    getSearchButton().click();
    getLeagueSoloDuoCy().should('have.text', 'SILVER III');
    getLeagueFlexCy().should('have.text', 'SILVER II');
  });

  it('champion Mastery is present', () => {
    getAddInputText().type('kanedach');
    getSearchButton().click();
    getChampionElementsCy().find('.column').should('have.length', 4);
    getChampionNameCy().contains('Urgot');
    getChampionLevelCy().contains('7');
    getChampionPointsCy().contains('408,443');
    getChampionLastPlayedCy().contains('Last Played: 01 Sep 21 16:34');
  });

  it('match list is present', () => {
    getAddInputText().type('kanedach');
    getSearchButton().click();
    getMatchListQueueCy().contains('Summoner\'s Rift');
    getMatchListQueueCy().contains('Howling Abyss');
  });
});
