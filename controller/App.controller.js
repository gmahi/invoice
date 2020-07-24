sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
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

			var oModel = new JSONModel(invInput);
			this.getView().setModel(oModel);
			var i18nModel = new ResourceModel({
				bundleName: "search.Invoice.i18n.i18n"
			});

			this.getView().setModel(i18nModel, 'i18n');
		},
		onSearchInvoices: function () {

			MessageToast.show("Searching Invoice's");
		}
	});
});