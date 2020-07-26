sap.ui.define([], function () {
	"use strict";
	return {
		readbleInvStatus: function (ioStatus) {
			var resourceBundle = this.getView().getModel('i18n').getResourceBundle();
			switch (ioStatus) {
			case "CONF":
				return resourceBundle.getText("CONF");
			case "PEND":
				return resourceBundle.getText("PEND");
			case "OPEN":
				return resourceBundle.getText("OPEN");
			default:
				return ioStatus;
			}
		}
	};
});