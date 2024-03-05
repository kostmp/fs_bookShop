sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.Main", {
            onInit: function () {

            },
            onNavToTransactions: function(oEvent) {
                let sBookID = oEvent.getSource().getBindingContext().getObject().ID;
                let oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteTransactions",{
                    ID: sBookID
                });
            }
        });
    });
