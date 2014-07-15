
var MyAppController = angular.module('MyAppController', [ 'ui.bootstrap', 'Tweets', 'myApp.directives', 'Words']);
 
MyAppController.controller('homeCTRL', ['$scope', '$http', 'tweetObject', 'wordCount',
  function ($scope, $http, tweetObject, wordCount) {

    ///////////////TWEETS////////////////
    $scope.search = "";
    makeMap();
    $scope.d3Data = [];
    function makeRequest(searchParam){
      wordCount.getTweetInfo(searchParam).then(function(result){
        $scope.tweets = result.statuses;
        markMaker($scope.tweets);
        wordCount.getWordCount().then(function(wordResult){
          var newData = [];

          for (var key in wordResult){
            newData.push(wordResult[key]);
          }
          newData.sort(function(a, b){
            return (a.count - b.count);
          });
        
          $scope.d3Data = newData;
        });
      });
    }
    makeRequest();

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

    function deleteMarkers(){
      for (var i = 0; i < $scope.markers.length; i++) {
      $scope.markers[i].setMap(null);
      }
      $scope.markers = [];
    }
    //////////////SEARCH//////////////////////////
    $scope.submitSearch = function(search){
      $scope.search=" for " + search;
      deleteMarkers();
      $scope.inputBar.$setPristine();
      var searchParam = {'name': search};
      makeRequest(searchParam);
    };

  }]);

  //////////////// MODAL //////////////////////////
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

  };


