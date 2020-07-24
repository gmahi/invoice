sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("search.Invoice.controller.App", {
		onInit: function () {

		},
		onSearchInvoices: function () {

			MessageToast.show("Searching Invoice's");
		}
	});
});