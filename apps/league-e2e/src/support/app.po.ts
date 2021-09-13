export const getGreeting = () => cy.get('h2');
export const getAddInputText = () => cy.get('input#search');
export const getSearchButton = () => cy.get('button')

// Summoner
export const getSummonersNameCy = () => cy.get('[cy-test-data="summonerName"]')

// League
export const getLeagueSoloDuoCy = () => cy.get('[cy-test-data="league-component-RANKED_SOLO_5x5-rank"]')
export const getLeagueFlexCy = () => cy.get('[cy-test-data="league-component-RANKED_FLEX_SR-rank"]')

// Campion-Masterie
export const getChampionElementsCy = () => cy.get('[cy-test-data="championMasteries-component"]')
export const getChampionNameCy = () => cy.get('[cy-test-data="championMasteries-champion-name"]')
export const getChampionLevelCy = () => cy.get('[cy-test-data="championMasteries-champion-level"]')
export const getChampionPointsCy = () => cy.get('[cy-test-data="championMasteries-champion-points"]')
export const getChampionLastPlayedCy = () => cy.get('[cy-test-data="championMasteries-champion-lastPlayed"]')

//Match-List
export const getMatchListButtonCy = () => cy.get('[cy-test-data="matchListButton"]')
export const getMatchListQueueCy = () => cy.get('[cy-test-data="matchListQueue"]')
