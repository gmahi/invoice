sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"../model/formatter"

], function (Controller, MessageToast, formatter) {
	"use strict";
	return Controller.extend("search.Invoice.controller.App", {
		formatter: formatter,
		onInit: function () {

		},
		onSearchInvoices: function () {
			var oBundle = this.getView().getModel('i18n').getResourceBundle();

			MessageToast.show(oBundle.getText("searchInvoice"));
		}
	});
});