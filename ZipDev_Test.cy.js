/// <reference types="cypress" />

describe('ZipDev_Test', () => {
    beforeEach(() => {
    })

    it.only('ZipDev_Test', () => {

        cy.visit('https://www.primefaces.org/primereact-v5/#/datatable/selection')
        cy.scrollTo('center')

        // with cy.contains I search the "h5 with the title= Checkbox"
        // with the find td I search a row that contains "zz21cz3c1"
        // with the parent I tried to find the "father" to go from the class "p-selection-column" to "p-checkbox-box"
        // for a reason I dont know, the ".check()" does not worked, but it worked with a ".click()"
        // almost all the elements have the same class name, so its necessary filter by the table 
        cy.contains('h5', 'Checkbox').parent().find('td').contains('zz21cz3c1').parent().find('.p-selection-column .p-checkbox-box').click(); 
        
        cy.log('UI TEST SUCCESS')
    })
})

