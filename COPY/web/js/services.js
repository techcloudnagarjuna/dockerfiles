define(['serviceConfig'], function(serviceConfig) {
    function Services() {
        var METHOD = {
            GET: 'GET',
            POST: 'POST',
            PUT: 'PUT',
            DELETE: 'DELETE',
            PATCH: 'PATCH'
        };

        var envBaseUrl = "http://158.101.1.36:9073/";
        /**
         * The config for managing all services
         */

        var self = this;

        self.registerUsageDetails = (payload) => {
            url = envBaseUrl + servicesList.userAuthService + "/user-usage-details";
          
            return serviceConfig.makeAsyncAjaxCall(url, METHOD.POST, payload);
        }

        self.getListDocs = (searchtxt) => {
            let payload = {};
            var serviceURL = envBaseUrl +"WCCService/resources/wccgeneric/searchresult?querytext=<ftx>"+searchtxt+"</ftx>";
            return serviceConfig.makeAsyncAjaxCall(serviceURL, METHOD.POST,payload);
        };
        
    }
    return new Services();
});