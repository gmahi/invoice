 sap.ui.define(["sap/ui/core/UIComponent",
 	"sap/ui/model/json/JSONModel",
 	"sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel, ResourceModel) {
 	"use strict";
 	return UIComponent.extend("search.Invoice.Component", {
 		metadata: {
 			manifest: "json"

 		},

 		init: function () {
 			// call the init function of the parent
 			UIComponent.prototype.init.apply(this, arguments);
 			// Set data model on view.
 			var invInput = {
 				invInput: {
 					invNumber: "",
 					invType: "",
 					invCompanyCode: "",
 					plant: ""
 				}
 			};

 			var oModel = new JSONModel(invInput);
 			this.setModel(oModel);
 			this.getRouter().initialize();
 			this.getRouter().attachBypassed(function (oEvent) {
 				var sHash = oEvent.getParameter("hash");
 				console.log("Hash " + sHash + " is invalid.");
 			});

 			this.getRouter().attachRouteMatched(function (oEvent) {
 				var sRouteName = oEvent.getParameter("name");
 				console.log("Route " + sRouteName + " is valid.");
 			});

 		}

 	});

 });