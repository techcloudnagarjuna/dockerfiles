/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['accUtils',"require", "exports", "knockout","jquery", "ojs/ojbootstrap", "ojs/ojarraydataprovider","services", "ojs/ojknockout", "ojs/ojinputtext", "ojs/ojformlayout","ojs/ojbutton", "ojs/ojarraydataprovider", "ojs/ojlistview", "ojs/ojavatar", "ojs/ojlistitemlayout"],
 function(accUtils,require, exports, ko, $, Bootstrap, ArrayListDataProvider, services) {
    function DashboardViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
    //  debugger;
    //  console.log(services);
       this.data = [];
      
    
    this.dataProvider = new ArrayListDataProvider(this.data, {
        keyAttributes: "dID",
    });
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        this.value = ko.observable("");
        // Implement further logic if needed
      };
      this.buttonAction = (event) => {
        debugger;
        this.data= []
        if(this.value()!==""){
          let searchtxt = this.value();
          /*services.getListDocs(valueStr).then(function (response) {
          
            console.log(response);
                     
            this.dataProvider = new ArrayListDataProvider(response, {
              keyAttributes: "dID",
          });
  
          });*/

          $.ajax({
            url: "http://172.23.211.51:16200/WCCService/resources/wccgeneric/searchresult?querytext=<ftx>" + searchtxt + "</ftx>",
            dataType: 'json',
            method:'POST',
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    var row = $('<tr><td><a href=http://172.23.211.51:16200'+ data[i].URL+'>' + + data[i].dDocTitle + '</td><td>'+ data[i].dDocType + '</td><td>' + data[i].URL + '</td></tr>');
                    $('#dataTableDiv').append(row);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
        } 
        
      //  this.activatedButton(event.currentTarget.id);
        return true;
    };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
