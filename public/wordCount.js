var Words = angular.module('Words', ["MyApp", "Tweets"]);
 //  .factory('wordCount', function() {
 // var text = {}


 // return text;
 //  });
Words.factory('wordCount', ['$q', 'tweetObject', function($q, tweetObject) {

  var getWordCount = function(){
    var deferred = $q.defer();
    var tweetPromise = tweetObject.getTweets();
    tweetPromise.then(function(result){
      var textCount = {};
      var noNoWords = ["the","rt", "", "of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","i","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","its","now","find","long","down","day","did","get","come","made","may","part","http", "amp", "im", "too", "me", "de", "et", "un", "une", "le", "la", "je"];
      var accentsTidy = function(s){
                          var r=s.toLowerCase();
                          r = r.replace(new RegExp("\\s", 'g'),"");
                          r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
                          r = r.replace(new RegExp("æ", 'g'),"ae");
                          r = r.replace(new RegExp("ç", 'g'),"c");
                          r = r.replace(new RegExp("[èéêë]", 'g'),"e");
                          r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
                          r = r.replace(new RegExp("ñ", 'g'),"n");                            
                          r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
                          r = r.replace(new RegExp("œ", 'g'),"oe");
                          r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
                          r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
                          r = r.replace(new RegExp("\\W", 'g'),"");
                          return r;
                  };
      for (var i = 0; i < result.statuses.length; i++) {
        var str = result.statuses[i].text.split(" ");
        for (var k = 0; k < str.length; k++) {
          text = str[k].toLowerCase();
          text = accentsTidy(text);
          if(noNoWords.indexOf(text) === -1){
            if(!textCount[text]){
              textCount[text] = {"name" : text};
              textCount[text].count = 1;
              textCount[text].users = [result.statuses[i].id];

            }else{
              textCount[text].count +=1;
              textCount[text].users.push(result.statuses[i].id);
            }
          }
        }
      }
      for(var key in textCount){
        if(textCount[key].count < 6){
          delete textCount[key];
        }
      }
     console.log(textCount);
     deferred.resolve(textCount);
     // return textCount; 
    });
    console.log("textCount");
    return deferred.promise;
  };

  return {getWordCount: getWordCount};
    

 }]);