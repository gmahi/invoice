sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("search.Invoice.controller.App", {
		onInit: function () {
			// Set data model on view.
			var invInput = {
				invInput: {
					invNumber: "",
					invType: "",
					invCompanyCode: ""
				}
			};

			var oModel = new JSONModel({
				invInput: {
					invNumber: "",
					invType: "",
					invCompanyCode: ""
				}
			});

			this.getView().setModel(oModel);
		},
		onSearchInvoices: function () {

			MessageToast.show("Searching Invoice's");
		}
	});
});