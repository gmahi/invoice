sap.ui.define([
	"search/Invoice/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History"
], function (BaseController, UIComponent, History) {
	"use strict";
	return BaseController.extend("search.Invoice.controller.Invdetail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("invdetail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "inv"
			});
		},

		/*	onNavBack: function () {
				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					var oRouter = UIComponent.getRouterFor(this);
					oRouter.navTo("pohome", {}, true);
				}
			}*/

	});
});