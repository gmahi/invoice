 sap.ui.define(["sap/ui/core/UIComponent",
 	"sap/ui/model/json/JSONModel",
 	"sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel, ResourceModel) {
 	"use strict";
 	return UIComponent.extend("search.Invoice.Component", {
 		metadata: {
 			rootView: {
 				"viewName": "search.Invoice.view.App",
 				"type": 'XML',
 				"async": true,
 				"id": "app"

 			}

 		},

 		init: function () {
 			// call the init function of the parent
 			UIComponent.prototype.init.apply(this, arguments);
 			// Set data model on view.
 			var invInput = {
 				invInput: {
 					invNumber: "",
 					invType: "",
 					invCompanyCode: ""
 				}
 			};

 			var oModel = new JSONModel(invInput);
 			this.setModel(oModel);
 			var i18nModel = new ResourceModel({
 				bundleName: "search.Invoice.i18n.i18n"
 			});

 			this.setModel(i18nModel, 'i18n');
 		}

 	});

 });