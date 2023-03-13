/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(["ojs/ojcore", "knockout", "jquery",  "appController"],
    function(oj, ko, $, app) {

        var controller = new AbortController();
        var signal = controller.signal;
        let appobj = app;

        /**
         *
         * @pamallik {String} endPoint
         * @pamallik {String} method
         * @pamallik {String} localJson
         */

        function ServiceConfig(params) {
            var self = this;
            var router;
            self.callHTTPServices = function(requestUrl, method, payload, type, loader) {
                router = oj.Router.rootInstance;
                if (true) {
                    if (requestUrl.indexOf("login") == -1 && requestUrl.indexOf("logout") == -1) {
                       // commonUtil.setIdleTimeOut();
                    }
                    return new Promise(function(resolve, reject) {
                        $("#loading").show();
                        let headerContent;
                        if (type == "FILE") {
                            headerContent = {
                                //'Auth-Token': commonUtil.getCookie("authToken")
                            }
                        } else {
                            headerContent = {
                                'Content-Type': "application/json",
                              //  'Auth-Token': commonUtil.getCookie("authToken"),
                               // 'authKey': commonUtil.getCookie("authToken")
                            }
                        }

                        fetch(requestUrl, {
                                method: method,
                                signal: signal,
                                headers: headerContent,
                                body: (type == "FILE" ? payload : JSON.stringify(payload)),
                                dataType: 'json'
                            })
                            .then(function(response) {
                              //  debugger;
                               
                               
                              //  alert(response.status+"statusText="+response.statusText+" statusType==="+response.type+" URL=="+response.url+"==payload==="+JSON.stringify(payload));
                                // debugger;
                              
                               
                                if (response.status === 500) {
                                     $("#loading").hide();
                                  //  return false;
                                }
                                if (response.status === 401) {

                                    if (requestUrl.indexOf("login") == -1 && requestUrl.indexOf("logout") == -1) {
                                       // commonUtil.commonLogout();
                                        document.getElementById('authorizationPopUp').open();
                                    }
                                    $("#loading").hide();
                                    resolve(response.json());

                                } else {
                                    
                                    if (requestUrl.indexOf("login") == -1 && requestUrl.indexOf("logout") == -1) {
                                        // commonUtil.setCookie("authToken", headers.get("REFRESH_TOKEN"))

                                    }
                                    resolve(response.json());
                                    if(loader==undefined || loader==null){
                                         if (requestUrl.indexOf("fetch-epod") == -1){
                                         $("#loading").hide();
                                        }else{
                                            $("#loading").show(); 
                                        }
                                    }else if(loader==true){
                                         $("#loading").show(); 
                                    }
                                    
                                }
                            }).catch(function(err) {
                               // alert(err+"==payload==="+JSON.stringify(payload));
                                $("#loading").hide();
                                reject(err);
                            });
                    });
                }
            }


            /**
             * Cancel all prevuous ajax call
             */

            self.cancelAjaxCall = function() {
                controller.abort();
                controller = new AbortController();
                signal = controller.signal;
            }
            self.makeAsyncAjaxCall = function(requestUrl, method, payload) {
                    $.ajax({
                        url: requestUrl,
                        type: method,
                        data: JSON.stringify(payload),
                        async: true,
                        headers: {
                            'Content-Type': 'application/json',
                          //  'AUTH_TOKEN': commonUtil.getCookie("authToken")
                        },
                        success: function(resultData) {

                        },
                        error: function(errorThrown) {

                        }

                    });
                }
                /**
                 * 
                 * @param {String} parameter 
                 * @param {String} value 
                 */
            function setDefaultParameter(parameter, value) {
                if (parameter === null || parameter === undefined || parameter == "") {
                    return value;
                }
                return parameter;
            }
        }

        return new ServiceConfig();

    });