// Code goes here
var app = angular.module("formApp", ['moment-picker']);

app.controller("ListController", function($http, $log) {
  var controller = this;
  controller.formas = [];
  $http.get("https://evently-nbwns.c9users.io/api/yannick/events")
    //reussi
  .then(function(response){
    $log.log("success", response.data);
    controller.formas = response.data;
    controller.newForma = {
            name:"",
            availableSpots:"",
            datetime: {
                date: "",
                timeStart:"",
                timeEnd:"",
            },
            place:{
                name:"",
                street:"",
                number:"",
                zip:"",
                city:""
            }
        };
  })
  //erreur
  .catch(function(){
     $log.log("fail to connect to the server", response.data);
  })

  controller.addForma= function(){
    $http.post("https://evently-nbwns.c9users.io/api/yannick/events",controller.newForma)
    .then(function(response){
        $log.log("success", controller.newForma);
        controller.formas.push(controller.newForma);
        controller.newForma = {
            name:"",
            availableSpots:"",
            datetime: {
                date: "",
                timeStart:"",
                timeEnd:"",
            },
            place:{
                name:"",
                street:"",
                number:"",
                zip:"",
                city:""
            }
        };//newForma controller end
      })//then end
     .catch(function(){
        $log.log("fail to envoyer oune post", response.data);
     });
  }//addforma end
});//appy end
