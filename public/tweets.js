angular.module('Tweets', ["MyApp"])
  .factory('tweetObject', function($http, $q) {
    var tweets;
    var tweetResults = function(){return tweets;};
    var getTweets = function(args){
      var args = args || {'name': 'beyonce'};
      var deferred = $q.defer();
        $http.get('/refreshTweets', {
            params: args
          })
          .success(function(data, status, headers, config){
            console.log("DATA FETCHED");
            deferred.resolve(data);
            tweets = data;
          })
          .error(function(data, status, headers, config){
            console.log('get error in getTweets');
            deferred.reject();
          });
        return deferred.promise;
    };

    return {getTweets: getTweets,
      tweetResults: tweetResults
    };
  });