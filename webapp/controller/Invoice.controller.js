sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"

], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("search.Invoice.controller.App", {
		onInit: function () {

		},
		onSearchInvoices: function () {
			var oBundle = this.getView().getModel('i18n').getResourceBundle();

			MessageToast.show(oBundle.getText("searchInvoice"));
		}
	});
});