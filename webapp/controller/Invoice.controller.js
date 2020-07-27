sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function (Controller, MessageToast, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("search.Invoice.controller.App", {
		formatter: formatter,
		onInit: function () {

		},
		onSearchInvoices: function () {
			var oBundle = this.getView().getModel('i18n').getResourceBundle();

			MessageToast.show(oBundle.getText("searchInvoice"));
			//build Filter Array
			var aFilter = [];
			let inputData = JSON.parse(this.getView().getModel().getJSON()).invInput;
			if (inputData.invCompanyCode) {
				aFilter.push(new Filter("Bukrs", FilterOperator.Contains, inputData.invCompanyCode));
			}
			if (inputData.plant) {
				aFilter.push(new Filter("Plant", FilterOperator.Contains, inputData.plant));
			}
			if (inputData.invNumber) {
				aFilter.push(new Filter("Vbeln", FilterOperator.Contains, inputData.invNumber));
			}

			if (inputData.invType) {
				aFilter.push(new Filter("Type", FilterOperator.Contains, inputData.invType));
			}

			//filter binding
			var oList = this.byId("invList");
			var oBinding = oList.getBinding('items');
			oBinding.filter(aFilter);

		},

		handleSortPress: function () {
			var oList = this.byId("invList");
			var oBinding = oList.getBinding("items");
			var aSorter = [];
			aSorter.push(new sap.ui.model.Sorter("Bukrs", false, false));
			oBinding.sort(aSorter);
		},
		handleGroupPress: function () {
			var oList = this.byId("invList");
			var oBinding = oList.getBinding("items");
			var aSorter = [];
			aSorter.push(new sap.ui.model.Sorter("Bukrs", false, true));
			oBinding.sort(aSorter);
		},

		showDetail: function (oEvent) {
			var oitem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("invdetail", {
				invoicePath: window.encodeURIComponent(oitem.getBindingContext('inv').getPath().substr(1))
			});
		}

	});
});