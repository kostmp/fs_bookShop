sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.Transactions", {
            onInit: function () {   
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteTransactions").attachPatternMatched(this._onObjectMatched, this);
            } ,   
            _onObjectMatched: function(oEvent) {
                let sBookId = oEvent.getParameter("arguments").ID;
                console.log(sBookId);
                this.getView().bindElement({
                    path: "/Books(" + sBookId + ")", 
                    parameters: {
                        expand: "customer" // Assuming you want to display customer details in transactions
                    }
                });
            }
    });
    })