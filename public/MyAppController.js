
var MyAppController = angular.module('MyAppController', ['Tweets', 'myApp.directives']);
 
MyAppController.controller('homeCTRL', ['$scope', '$http', 'tweetObject',
  function ($scope, $http, tweetObject) {
    // var tweetPromise = tweetObject.getTweets();
    // tweetPromise.then(function(result){
    
    //     $scope.data = tweetObject.statuses;
   // } 
 
  }]);
 
MyAppController.controller('tweetCTRL', ['$scope', '$http', 'tweetObject',
  function ($scope, $http, tweetObject) {
    if(!tweetObject.tweetResults()){
      var tweetPromise = tweetObject.getTweets();
      tweetPromise.then(function(result){
        $scope.data = result.statuses;
      });
    }else{
      $scope.data = tweetObject.tweetResults().statuses;
    }
  }]);

MyAppController.controller('mapCTRL', ['$scope', '$http', 'tweetObject',
  function ($scope, $http, tweetObject) {

    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(40.0000, -98.0000),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
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
        
    };
    var markMaker = function(tweets){
      for (var key in tweets){
        if(tweets[key].coordinates){
          createMarker(tweets[key]);
        }
      }
    };
    if(!tweetObject.tweetResults()){
      var tweetPromise = tweetObject.getTweets();
      tweetPromise.then(function(result){
        $scope.tweets = result.statuses;
        console.log($scope.tweets);
        markMaker($scope.tweets);
      });
    }else{
      $scope.tweets = tweetObject.tweetResults().statuses;
      markMaker($scope.tweets);
    } 
      

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };

  }]);
