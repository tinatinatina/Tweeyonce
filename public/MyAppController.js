
var MyAppController = angular.module('MyAppController', [ 'ui.bootstrap', 'Tweets', 'myApp.directives']);
 
MyAppController.controller('homeCTRL', ['$scope', '$http', 'tweetObject',
  function ($scope, $http, tweetObject) {

    ///////////////TWEETS////////////////

    if(!tweetObject.tweetResults()){
      var tweetPromise = tweetObject.getTweets();
      tweetPromise.then(function(result){
        $scope.tweets = result.statuses;
        makeMap();
        markMaker($scope.tweets);
      });
    }else{
      $scope.tweets = tweetObject.tweetResults().statuses;
      markMaker($scope.tweets);
    }
    ////////////////////MAP //////////////////////////

    function makeMap(){
      var styles =[
       {
          "featureType": "water",
          "stylers": [
            { "hue": "#00d4ff" },
            { "saturation": -27 },
            { "visibility": "simplified" }
          ]
        },{
          "featureType": "landscape",
          "stylers": [
            { "visibility": "on" },
            { "weight": 8 },
            { "hue": "#c300ff" },
            { "saturation": 100 },
            { "lightness": 39 }
          ]
        },{
          "featureType": "poi",
          "stylers": [
            { "visibility": "on" },
            { "hue": "#a200ff" },
            { "saturation": 87 },
            { "lightness": 36 }
          ]
        }
      ];
      var mapOptions = {
        mapTypeControlOptions: {  
        mapTypeIds: ['Styled']}, 
        zoom: 2,
        center: new google.maps.LatLng(40.0000, -98.0000),
        // disableDefaultUI: true, 
        mapTypeId: 'Styled'
      };
      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
      var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });  
      $scope.map.mapTypes.set('Styled', styledMapType);  
    }
    
    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow({maxWidth: 200});


    function createMarker(info){
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.coordinates.coordinates[1], info.coordinates.coordinates[0]),
            title: info.user.name,
            image: info.user.profile_image_url,
            location: info.place.full_name
        });
        marker.content = '<div class="infoWindowContent">' + info.text + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){

            infoWindow.setContent('<h2 class="marker">' + marker.title + ': '+ marker.location+' </h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker); 
    }

    function markMaker(tweets){
      for (var key in tweets){
        if(tweets[key].coordinates){
          createMarker(tweets[key]);
        }
      }
    }

    $scope.submitSearch = function(search){
      var searchParam = {'name': search};
      var tweetPromise = tweetObject.getTweets(searchParam);
      tweetPromise.then(function(result){
        $scope.tweets = result.statuses;
        makeMap();
        markMaker($scope.tweets);
      });
    };

  }]);

  var ModalDemoCtrl = function ($scope, $modal, $log) {

    $scope.d3OnClick = function(item){
      var modalTweets = [];
      modalTweets.push(item.name, []);
      var userIds = item.users;
      for(var i = 0; i < $scope.tweets.length; i++){
        if(userIds.indexOf($scope.tweets[i].id) !== -1){
          modalTweets[1].push($scope.tweets[i]);
        } 
      }$scope.modalTweets = modalTweets;
      $scope.open($scope.modalTweets);
    };

    $scope.open = function (item) {
      $scope.items = item;
      
      var modalInstance = $modal.open({
        templateUrl: 'views/modal.html',
        controller: ModalInstanceCtrl,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

  };

  var ModalInstanceCtrl = function ($scope, $modalInstance, items, $location) {

    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    // $scope.sendToDetail = function(arg){
    //   var stringArg = ""+arg;
    //   $location.path( "/showDetail/:" + stringArg);
    // };
  };

  // modal end
 
MyAppController.controller('tweetCTRL', ['$scope', '$http', 'tweetObject',
  function ($scope, $http, tweetObject) {
//     if(!tweetObject.tweetResults()){
//       var tweetPromise = tweetObject.getTweets();
//       tweetPromise.then(function(result){
//         $scope.data = result.statuses;
//       });
//     }else{
//       $scope.data = tweetObject.tweetResults().statuses;
//     }
  }]);

MyAppController.controller('mapCTRL', ['$scope', '$http', 'tweetObject',
  function ($scope, $http, tweetObject) {

//     var mapOptions = {
//         zoom: 4,
//         center: new google.maps.LatLng(40.0000, -98.0000),
//         mapTypeId: google.maps.MapTypeId.TERRAIN
//     };

//     $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

//     $scope.markers = [];
    
//     var infoWindow = new google.maps.InfoWindow();
    
//     var createMarker = function (info){
//         var marker = new google.maps.Marker({
//             map: $scope.map,
//             position: new google.maps.LatLng(info.coordinates.coordinates[1], info.coordinates.coordinates[0]),
//             title: info.user.name,
//             image: info.user.profile_image_url,
//             location: info.place.full_name
//         });
//         marker.content = '<div class="infoWindowContent">' + info.text + '</div>';
        
//         google.maps.event.addListener(marker, 'click', function(){

//             infoWindow.setContent('<h2 class="marker">' + marker.title + ': '+ marker.location+' </h2>' + marker.content);
//             infoWindow.open($scope.map, marker);
//         });
        
//         $scope.markers.push(marker);
        
//     };
//     var markMaker = function(tweets){
//       for (var key in tweets){
//         if(tweets[key].coordinates){
//           createMarker(tweets[key]);
//         }
//       }
//     };
//     if(!tweetObject.tweetResults()){
//       var tweetPromise = tweetObject.getTweets();
//       tweetPromise.then(function(result){
//         $scope.tweets = result.statuses;
//         console.log($scope.tweets);
//         markMaker($scope.tweets);
//       });
//     }else{
//       $scope.tweets = tweetObject.tweetResults().statuses;
//       markMaker($scope.tweets);
//     } 
      

//     $scope.openInfoWindow = function(e, selectedMarker){
//         e.preventDefault();
//         google.maps.event.trigger(selectedMarker, 'click');
//     };

  }]);
