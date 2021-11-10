var pageObjects = require("../ListItems.view") ;


describe('masterdetail', function () {

    it('should load the app',function() {
      expect(browser.getTitle()).toBe('Maintain Test Cases for Automated TestPlans');
    });
  
    it('should display the test case details screen',function() {
      element(by.control({
        viewName: 'iscoper/maintaintestcase/view/testPlanDetails.view',
        controlType: 'sap.m.ColumnListItem',
        properties: {
          title: 'Object 10'
        }}))
      .click();
    });


    // it('should display the test case details screen',function() {
    //   element.all(by.control(
    //     {
    //     viewName: 'iscoper/maintaintestcase/view/testPlanDetails.view',
    //     controlType: 'sap.m.ColumnListItem',
    //     id: "tab2"
    //   }))
    //   .first();
    // });

  
    // it('should validate line items',function() {
    //   expect(element.all(by.control({
    //     viewName: 'sap.ui.demo.masterdetail.view.Detail',
    //     controlType:'sap.m.ColumnListItem'}))
    //   .count()).toBe(2);
    // });


  });
