let ColumnListItem = element.all(by.control({
    controlType: "sap.m.ColumnListItem"
}));


// model: "fi1t3rM0d31 (JSONModel)"
// path: "/_BASIC_SEARCH_FIELD"


let firstRow = ColumnListItem.first();

module.exports = createPageObjects({
    ListItems: {
        arrangements: {
            iStartTheApp: function () {
                // app setup
                expect(browser.getTitle()).toBe('Inspection Method');
            }
        },
        actions: {
            iClickTheGoButton: function () {
                expect(goButton.isPresent()).toBeTruthy();
                goButton.click();
            }
        },
        assertions: {
            iShouldSeeTablelisted: function(iCount) {
                expect(ColumnListItem.count()).toBeGreaterThan(iCount);
            }
        }
    }
});
