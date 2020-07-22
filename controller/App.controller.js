sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("search.Invoice.controller.App", {
		onSearchInvoice: function () {

			MessageToast.show("Searching Invoice's");
		}
	});
});