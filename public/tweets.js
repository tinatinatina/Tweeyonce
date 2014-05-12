angular.module('Tweets', ["MyApp"])
  .factory('tweetObject', function($http, $q) {
  var tweets;
  var tweetResults = function(){return tweets;}
  var getTweets = function(){
    var deferred = $q.defer();
      $http.get('/refreshTweets')
        .success(function(data, status, headers, config){
          console.log("DATA FETCHED")
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
 



// var tweets = {
//   "statuses":  [
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:30 +0000 2014",
//       "id": 450716284058345500,
//       "id_str": "450716284058345472",
//       "text": "OMG NO I'M EMBARASSED NO FEMALE SINGER SLAYS BEYONCÉ JUST NO I FEEL BAD FOR YOU PEOPLE COMPARING QUEEN B",
//       "source": "<a href='http://twitter.com/download/iphone' rel='nofollow'>Twitter for iPhone</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 1313287099,
//         "id_str": "1313287099",
//         "name": "Jayoncé",
//         "screen_name": "stinakarlsssson",
//         "location": "",
//         "description": "",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 17,
//         "friends_count": 35,
//         "listed_count": 0,
//         "created_at": "Fri Mar 29 10:07:33 +0000 2013",
//         "favourites_count": 1508,
//         "utc_offset": null,
//         "time_zone": null,
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 2295,
//         "lang": "sv",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/445175387078017024/eI6M4NcE_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/445175387078017024/eI6M4NcE_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/1313287099/1394973187",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "C0DEED",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": true,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  []
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:29 +0000 2014",
//       "id": 450716280186621950,
//       "id_str": "450716280186621952",
//       "text": "RT @VH1PNUT: NIGGAS OUT HERE TWERKIN .... THATS WHAT HAPPENS WHEN NIGGAS HAVE NO DAD AN GROW UP OFF BEYONCE",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 233345109,
//         "id_str": "233345109",
//         "name": "vanessa salazar",
//         "screen_name": "vanessakins96",
//         "location": "",
//         "description": "Whatever you do, do it passionately. Let your heart be your guide, but your mind be your anchor.",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 196,
//         "friends_count": 216,
//         "listed_count": 0,
//         "created_at": "Mon Jan 03 00:28:33 +0000 2011",
//         "favourites_count": 1175,
//         "utc_offset": null,
//         "time_zone": null,
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 9105,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/431276030561509377/oudWyhFQ_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/431276030561509377/oudWyhFQ_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/233345109/1371281368",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "C0DEED",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": true,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 18:53:14 +0000 2014",
//         "id": 450707407011086340,
//         "id_str": "450707407011086336",
//         "text": "NIGGAS OUT HERE TWERKIN .... THATS WHAT HAPPENS WHEN NIGGAS HAVE NO DAD AN GROW UP OFF BEYONCE",
//         "source": "<a href='https://twitter.com/download/android' rel='nofollow'>Twitter for  Android</a>",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 121472727,
//           "id_str": "121472727",
//           "name": "PEGEE ",
//           "screen_name": "VH1PNUT",
//           "location": "VH1 PSYCHIATRIC WARD ",
//           "description": "A MODEL IS A POKEMON THAT HASN'T EVOLVED INTO A PROSTITUTE YET ....  ERIKPEGEE@GMAIL. COM",
//           "url": null,
//           "entities":  {
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 71813,
//           "friends_count": 1723,
//           "listed_count": 412,
//           "created_at": "Tue Mar 09 16:14:19 +0000 2010",
//           "favourites_count": 1526,
//           "utc_offset": -18000,
//           "time_zone": "Central Time (US & Canada)",
//           "geo_enabled": true,
//           "verified": false,
//           "statuses_count": 167397,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "07090B",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/691817182/de147790a8f8403af034d192fc92c9cb.jpeg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/691817182/de147790a8f8403af034d192fc92c9cb.jpeg",
//           "profile_background_tile": true,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/450151179889418240/SQLL-p_3_normal.jpeg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/450151179889418240/SQLL-p_3_normal.jpeg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/121472727/1380138323",
//           "profile_link_color": "C34242",
//           "profile_sidebar_border_color": "FFFFFF",
//           "profile_sidebar_fill_color": "C9C9C9",
//           "profile_text_color": "1C1F23",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 105,
//         "favorite_count": 50,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [],
//           "user_mentions":  []
//         },
//         "favorited": false,
//         "retweeted": false,
//         "lang": "en"
//       },
//       "retweet_count": 105,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "VH1PNUT",
//             "name": "PEGEE ",
//             "id": 121472727,
//             "id_str": "121472727",
//             "indices":  [
//               3,
//               11
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:29 +0000 2014",
//       "id": 450716280023437300,
//       "id_str": "450716280023437312",
//       "text": "RT @TooMuchSwagCeo: When Beyonce Says 'I Been Drinking Watermelon' = I been sucking dick, and he came in my mouth and i swallowed. Enjoy yo…",
//       "source": "<a href='http://twitter.com/download/iphone' rel='nofollow'>Twitter for iPhone</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 232221967,
//         "id_str": "232221967",
//         "name": "",
//         "screen_name": "hxxrrystyls",
//         "location": "",
//         "description": "",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 3808,
//         "friends_count": 3650,
//         "listed_count": 20,
//         "created_at": "Thu Dec 30 15:29:10 +0000 2010",
//         "favourites_count": 9795,
//         "utc_offset": -16200,
//         "time_zone": "Caracas",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 124575,
//         "lang": "es",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "FFFFFF",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000025459817/8c8cab2a750efbc05417b37cd7dd6437.png",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000025459817/8c8cab2a750efbc05417b37cd7dd6437.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/437251333565870080/fJrA2uIi_normal.png",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/437251333565870080/fJrA2uIi_normal.png",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/232221967/1393083802",
//         "profile_link_color": "000000",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "FFFFFF",
//         "profile_text_color": "000000",
//         "profile_use_background_image": false,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 19:27:52 +0000 2014",
//         "id": 450716124863148000,
//         "id_str": "450716124863148032",
//         "text": "When Beyonce Says 'I Been Drinking Watermelon' = I been sucking dick, and he came in my mouth and i swallowed. Enjoy your Watermelon lol",
//         "source": "web",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 346763751,
//           "id_str": "346763751",
//           "name": "shaun gordon",
//           "screen_name": "TooMuchSwagCeo",
//           "location": "Fort Lauderdale ",
//           "description": "I Have A Great Life And Work For What I Got #NoHandOuts\r\n\r\nOfficial Instagram Account @RealShaunGordon\r\n\r\nhttps://t.co/FKZWaLpC2v",
//           "url": "https://t.co/uSZZpEWIMO",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "https://t.co/uSZZpEWIMO",
//                   "expanded_url": "https://twitter.com/TooMuchSwagCeo",
//                   "display_url": "twitter.com/TooMuchSwagCeo",
//                   "indices":  [
//                     0,
//                     23
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  [
//                  {
//                   "url": "https://t.co/FKZWaLpC2v",
//                   "expanded_url": "https://www.facebook.com/RealShaunG",
//                   "display_url": "facebook.com/RealShaunG",
//                   "indices":  [
//                     106,
//                     129
//                   ]
//                 }
//               ]
//             }
//           },
//           "protected": false,
//           "followers_count": 61550,
//           "friends_count": 40818,
//           "listed_count": 346,
//           "created_at": "Mon Aug 01 20:10:23 +0000 2011",
//           "favourites_count": 4620,
//           "utc_offset": -14400,
//           "time_zone": "Eastern Time (US & Canada)",
//           "geo_enabled": true,
//           "verified": true,
//           "statuses_count": 65145,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "C0DEED",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/451495235/me_clean",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/451495235/me_clean",
//           "profile_background_tile": true,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/440961515084992512/_jsPNmC__normal.jpeg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/440961515084992512/_jsPNmC__normal.jpeg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/346763751/1395353991",
//           "profile_link_color": "0084B4",
//           "profile_sidebar_border_color": "000000",
//           "profile_sidebar_fill_color": "DDEEF6",
//           "profile_text_color": "333333",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 1,
//         "favorite_count": 0,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [],
//           "user_mentions":  []
//         },
//         "favorited": false,
//         "retweeted": false,
//         "lang": "en"
//       },
//       "retweet_count": 1,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "TooMuchSwagCeo",
//             "name": "shaun gordon",
//             "id": 346763751,
//             "id_str": "346763751",
//             "indices":  [
//               3,
//               18
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "fr"
//       },
//       "created_at": "Mon Mar 31 19:28:28 +0000 2014",
//       "id": 450716276927627260,
//       "id_str": "450716276927627265",
//       "text": "Beyoncé and Jayz are decade apart plus 2.",
//       "source": "<a href='http://twitter.com/download/iphone' rel='nofollow'>Twitter for iPhone</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 103651570,
//         "id_str": "103651570",
//         "name": "Lavish",
//         "screen_name": "TheLavishOne",
//         "location": "Boston",
//         "description": "I just want to live a lavish life. Mind set sail to dreams full speed ahead. Count your blessings.\r\nMusic:http://t.co/URaTKE0Dta",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  [
//                {
//                 "url": "http://t.co/URaTKE0Dta",
//                 "expanded_url": "http://www.soundcloud.com/thelavish-1",
//                 "display_url": "soundcloud.com/thelavish-1",
//                 "indices":  [
//                   106,
//                   128
//                 ]
//               }
//             ]
//           }
//         },
//         "protected": false,
//         "followers_count": 137,
//         "friends_count": 91,
//         "listed_count": 1,
//         "created_at": "Sun Jan 10 19:56:36 +0000 2010",
//         "favourites_count": 163,
//         "utc_offset": -14400,
//         "time_zone": "Eastern Time (US & Canada)",
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 1326,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "131516",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/450118853993824257/XnoKH7jB.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/450118853993824257/XnoKH7jB.jpeg",
//         "profile_background_tile": true,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/450173834491342848/AjoRnDnr_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/450173834491342848/AjoRnDnr_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/103651570/1392956802",
//         "profile_link_color": "009999",
//         "profile_sidebar_border_color": "000000",
//         "profile_sidebar_fill_color": "EFEFEF",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  []
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "fr"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:28 +0000 2014",
//       "id": 450716275510358000,
//       "id_str": "450716275510358016",
//       "text": "@owlerr #Beyonce #CrazyFrog Come on internet. come on! #keepthefaith #onelove #brainspillage",
//       "source": "web",
//       "truncated": false,
//       "in_reply_to_status_id": 450715465346986000,
//       "in_reply_to_status_id_str": "450715465346985984",
//       "in_reply_to_user_id": 112996237,
//       "in_reply_to_user_id_str": "112996237",
//       "in_reply_to_screen_name": "owlerr",
//       "user":  {
//         "id": 112996237,
//         "id_str": "112996237",
//         "name": "Chrid",
//         "screen_name": "owlerr",
//         "location": "",
//         "description": "Stop looking, get a life",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 34,
//         "friends_count": 100,
//         "listed_count": 0,
//         "created_at": "Wed Feb 10 10:44:56 +0000 2010",
//         "favourites_count": 1,
//         "utc_offset": 3600,
//         "time_zone": "Casablanca",
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 108,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/378800000351029585/91815b89aaba83d82c84bf284dccdb6d_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000351029585/91815b89aaba83d82c84bf284dccdb6d_normal.jpeg",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "C0DEED",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": true,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [
//            {
//             "text": "Beyonce",
//             "indices":  [
//               8,
//               16
//             ]
//           },
//            {
//             "text": "CrazyFrog",
//             "indices":  [
//               17,
//               27
//             ]
//           },
//            {
//             "text": "keepthefaith",
//             "indices":  [
//               55,
//               68
//             ]
//           },
//            {
//             "text": "onelove",
//             "indices":  [
//               69,
//               77
//             ]
//           },
//            {
//             "text": "brainspillage",
//             "indices":  [
//               78,
//               92
//             ]
//           }
//         ],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "owlerr",
//             "name": "Chrid",
//             "id": 112996237,
//             "id_str": "112996237",
//             "indices":  [
//               0,
//               7
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "fr"
//       },
//       "created_at": "Mon Mar 31 19:28:28 +0000 2014",
//       "id": 450716275309031400,
//       "id_str": "450716275309031424",
//       "text": "C'st vraiment une belle femme Beyonce qd mm",
//       "source": "web",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 1026793699,
//         "id_str": "1026793699",
//         "name": "N™",
//         "screen_name": "Mlle__Manon_",
//         "location": "Ile de France",
//         "description": "12 J U I L L E T 2013♥ #TeamMa2x #Maxmyzers.❤ ; Anaïs mon bébé❤️",
//         "url": "https://t.co/pYzyIa7xme",
//         "entities":  {
//           "url":  {
//             "urls":  [
//                {
//                 "url": "https://t.co/pYzyIa7xme",
//                 "expanded_url": "https://www.facebook.com/manon.courdavault.9",
//                 "display_url": "facebook.com/manon.courdava…",
//                 "indices":  [
//                   0,
//                   23
//                 ]
//               }
//             ]
//           },
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 565,
//         "friends_count": 228,
//         "listed_count": 1,
//         "created_at": "Fri Dec 21 17:15:23 +0000 2012",
//         "favourites_count": 1080,
//         "utc_offset": 10800,
//         "time_zone": "Athens",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 8943,
//         "lang": "fr",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "471447",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000014992757/80bd50d459989d1f93a927a87940631f.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000014992757/80bd50d459989d1f93a927a87940631f.jpeg",
//         "profile_background_tile": true,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/447864065600536576/_oQMYDms_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/447864065600536576/_oQMYDms_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/1026793699/1388548778",
//         "profile_link_color": "ED39D8",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "000000",
//         "profile_text_color": "000000",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  []
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "fr"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:27 +0000 2014",
//       "id": 450716269743206400,
//       "id_str": "450716269743206400",
//       "text": "RT @BeyonceLite: VOTE for Beyoncé at the '14 MTV VMAs Japan! #BestRnBVideo #BestFemaleVideo \n#BestAlbumOfTheYear http://t.co/rgYZf4MqEb",
//       "source": "<a href='http://twitter.com/download/iphone' rel='nofollow'>Twitter for iPhone</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 847171088,
//         "id_str": "847171088",
//         "name": "Bow down Bitches∞",
//         "screen_name": "bw_obey",
//         "location": "walkin on the moon wit my idol",
//         "description": "I tryin live my life and dont be dying dreamer. #Beyhive #SoldierOfLove etc",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 3181,
//         "friends_count": 3210,
//         "listed_count": 3,
//         "created_at": "Wed Sep 26 10:43:55 +0000 2012",
//         "favourites_count": 2274,
//         "utc_offset": 7200,
//         "time_zone": "Warsaw",
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 7866,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "030302",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000165975648/vtaNZ9iz.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000165975648/vtaNZ9iz.jpeg",
//         "profile_background_tile": true,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/442404310304186368/gaVaTUC6_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/442404310304186368/gaVaTUC6_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/847171088/1370732595",
//         "profile_link_color": "786A55",
//         "profile_sidebar_border_color": "000000",
//         "profile_sidebar_fill_color": "12291F",
//         "profile_text_color": "547B61",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 19:28:00 +0000 2014",
//         "id": 450716155981070340,
//         "id_str": "450716155981070336",
//         "text": "VOTE for Beyoncé at the '14 MTV VMAs Japan! #BestRnBVideo #BestFemaleVideo \n#BestAlbumOfTheYear http://t.co/rgYZf4MqEb",
//         "source": "web",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 63166035,
//           "id_str": "63166035",
//           "name": "Beyoncé Lite",
//           "screen_name": "BeyonceLite",
//           "location": "Worldwide",
//           "description": "'BEYONCÉ' The Visual Album. 14 songs 17 videos available now on iTunes http://t.co/swx0rLyrZW",
//           "url": "http://t.co/O0ORK5XyQG",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/O0ORK5XyQG",
//                   "expanded_url": "http://Beyonce.com",
//                   "display_url": "Beyonce.com",
//                   "indices":  [
//                     0,
//                     22
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/swx0rLyrZW",
//                   "expanded_url": "http://smartURL.it/beyoncevisualalbum",
//                   "display_url": "smartURL.it/beyoncevisuala…",
//                   "indices":  [
//                     71,
//                     93
//                   ]
//                 }
//               ]
//             }
//           },
//           "protected": false,
//           "followers_count": 191418,
//           "friends_count": 490,
//           "listed_count": 803,
//           "created_at": "Wed Aug 05 15:41:05 +0000 2009",
//           "favourites_count": 173,
//           "utc_offset": -25200,
//           "time_zone": "Pacific Time (US & Canada)",
//           "geo_enabled": true,
//           "verified": false,
//           "statuses_count": 37417,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "000000",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000154514236/q0G6Jw9y.jpeg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000154514236/q0G6Jw9y.jpeg",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/450630411526234112/yMSKsKhL_normal.png",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/450630411526234112/yMSKsKhL_normal.png",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/63166035/1393465406",
//           "profile_link_color": "FF7FC8",
//           "profile_sidebar_border_color": "FFFFFF",
//           "profile_sidebar_fill_color": "FFF7CC",
//           "profile_text_color": "0C3E53",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 5,
//         "favorite_count": 2,
//         "entities":  {
//           "hashtags":  [
//              {
//               "text": "BestRnBVideo",
//               "indices":  [
//                 44,
//                 57
//               ]
//             },
//              {
//               "text": "BestFemaleVideo",
//               "indices":  [
//                 58,
//                 74
//               ]
//             },
//              {
//               "text": "BestAlbumOfTheYear",
//               "indices":  [
//                 76,
//                 95
//               ]
//             }
//           ],
//           "symbols":  [],
//           "urls":  [
//              {
//               "url": "http://t.co/rgYZf4MqEb",
//               "expanded_url": "http://www.mtvjapan.com/vmaj2014/best-female-video/",
//               "display_url": "mtvjapan.com/vmaj2014/best-…",
//               "indices":  [
//                 96,
//                 118
//               ]
//             }
//           ],
//           "user_mentions":  []
//         },
//         "favorited": false,
//         "retweeted": false,
//         "possibly_sensitive": false,
//         "lang": "en"
//       },
//       "retweet_count": 5,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [
//            {
//             "text": "BestRnBVideo",
//             "indices":  [
//               61,
//               74
//             ]
//           },
//            {
//             "text": "BestFemaleVideo",
//             "indices":  [
//               75,
//               91
//             ]
//           },
//            {
//             "text": "BestAlbumOfTheYear",
//             "indices":  [
//               93,
//               112
//             ]
//           }
//         ],
//         "symbols":  [],
//         "urls":  [
//            {
//             "url": "http://t.co/rgYZf4MqEb",
//             "expanded_url": "http://www.mtvjapan.com/vmaj2014/best-female-video/",
//             "display_url": "mtvjapan.com/vmaj2014/best-…",
//             "indices":  [
//               113,
//               135
//             ]
//           }
//         ],
//         "user_mentions":  [
//            {
//             "screen_name": "BeyonceLite",
//             "name": "Beyoncé Lite",
//             "id": 63166035,
//             "id_str": "63166035",
//             "indices":  [
//               3,
//               15
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:27 +0000 2014",
//       "id": 450716269432819700,
//       "id_str": "450716269432819712",
//       "text": "RT @slayedjustin: 'change your icons to shots' 'change your icons to pattie' 'change your icons to beyonce' http://t.co/MjhVJBTPzv",
//       "source": "web",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 2368791602,
//         "id_str": "2368791602",
//         "name": "manalmahboulista",
//         "screen_name": "manilamahboula",
//         "location": "",
//         "description": "",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 8,
//         "friends_count": 32,
//         "listed_count": 0,
//         "created_at": "Sun Mar 02 12:14:38 +0000 2014",
//         "favourites_count": 5,
//         "utc_offset": null,
//         "time_zone": null,
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 15,
//         "lang": "fr",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/441149820145651712/tj7bTJAa.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/441149820145651712/tj7bTJAa.jpeg",
//         "profile_background_tile": true,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/440160583871000577/zjDqdiUO_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/440160583871000577/zjDqdiUO_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/2368791602/1393777498",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 18:04:52 +0000 2014",
//         "id": 450695234037362700,
//         "id_str": "450695234037362688",
//         "text": "change your icons to shots' 'change your icons to pattie' 'change your icons to beyonce' http://t.co/MjhVJBTPzv",
//         "source": "web",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 214620489,
//           "id_str": "214620489",
//           "name": "i dont recall",
//           "screen_name": "slayedjustin",
//           "location": "11/03/13 ",
//           "description": "i hear.... cunt?",
//           "url": "http://t.co/PCKP5x1Vtz",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/PCKP5x1Vtz",
//                   "expanded_url": "http://dieinyousarms.tumblr.com",
//                   "display_url": "dieinyousarms.tumblr.com",
//                   "indices":  [
//                     0,
//                     22
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 155063,
//           "friends_count": 29473,
//           "listed_count": 241,
//           "created_at": "Thu Nov 11 20:58:42 +0000 2010",
//           "favourites_count": 1694,
//           "utc_offset": 3600,
//           "time_zone": "Lisbon",
//           "geo_enabled": false,
//           "verified": false,
//           "statuses_count": 33201,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "FFFFFF",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/693376040/f9ee108fff45139c80bb0be366992dd6.jpeg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/693376040/f9ee108fff45139c80bb0be366992dd6.jpeg",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/450694883808800768/pVRbueoa_normal.png",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/450694883808800768/pVRbueoa_normal.png",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/214620489/1395531046",
//           "profile_link_color": "808080",
//           "profile_sidebar_border_color": "FFFFFF",
//           "profile_sidebar_fill_color": "B4DDC3",
//           "profile_text_color": "DD5A3C",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 34,
//         "favorite_count": 17,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [],
//           "user_mentions":  [],
//           "media":  [
//              {
//               "id": 450695234045751300,
//               "id_str": "450695234045751296",
//               "indices":  [
//                 90,
//                 112
//               ],
//               "media_url": "http://pbs.twimg.com/media/BkEw7W9CMAAgOUG.jpg",
//               "media_url_https": "https://pbs.twimg.com/media/BkEw7W9CMAAgOUG.jpg",
//               "url": "http://t.co/MjhVJBTPzv",
//               "display_url": "pic.twitter.com/MjhVJBTPzv",
//               "expanded_url": "http://twitter.com/slayedjustin/status/450695234037362688/photo/1",
//               "type": "photo",
//               "sizes":  {
//                 "large":  {
//                   "w": 598,
//                   "h": 343,
//                   "resize": "fit"
//                 },
//                 "medium":  {
//                   "w": 598,
//                   "h": 343,
//                   "resize": "fit"
//                 },
//                 "thumb":  {
//                   "w": 150,
//                   "h": 150,
//                   "resize": "crop"
//                 },
//                 "small":  {
//                   "w": 340,
//                   "h": 195,
//                   "resize": "fit"
//                 }
//               }
//             }
//           ]
//         },
//         "favorited": false,
//         "retweeted": false,
//         "possibly_sensitive": false,
//         "lang": "en"
//       },
//       "retweet_count": 34,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "slayedjustin",
//             "name": "i dont recall",
//             "id": 214620489,
//             "id_str": "214620489",
//             "indices":  [
//               3,
//               16
//             ]
//           }
//         ],
//         "media":  [
//            {
//             "id": 450695234045751300,
//             "id_str": "450695234045751296",
//             "indices":  [
//               108,
//               130
//             ],
//             "media_url": "http://pbs.twimg.com/media/BkEw7W9CMAAgOUG.jpg",
//             "media_url_https": "https://pbs.twimg.com/media/BkEw7W9CMAAgOUG.jpg",
//             "url": "http://t.co/MjhVJBTPzv",
//             "display_url": "pic.twitter.com/MjhVJBTPzv",
//             "expanded_url": "http://twitter.com/slayedjustin/status/450695234037362688/photo/1",
//             "type": "photo",
//             "sizes":  {
//               "large":  {
//                 "w": 598,
//                 "h": 343,
//                 "resize": "fit"
//               },
//               "medium":  {
//                 "w": 598,
//                 "h": 343,
//                 "resize": "fit"
//               },
//               "thumb":  {
//                 "w": 150,
//                 "h": 150,
//                 "resize": "crop"
//               },
//               "small":  {
//                 "w": 340,
//                 "h": 195,
//                 "resize": "fit"
//               }
//             }
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "fr"
//       },
//       "created_at": "Mon Mar 31 19:28:25 +0000 2014",
//       "id": 450716260868063200,
//       "id_str": "450716260868063232",
//       "text": "RT @miilkkk: BEYONCE http://t.co/cnOKqFOk4E",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 58139661,
//         "id_str": "58139661",
//         "name": "Abenaa",
//         "screen_name": "_Abenaa_",
//         "location": "Ariel",
//         "description": "God. Family. Making the most of the challenges life throws at me.   Purple&Black.     100% saved",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 1287,
//         "friends_count": 743,
//         "listed_count": 8,
//         "created_at": "Sun Jul 19 06:16:58 +0000 2009",
//         "favourites_count": 2325,
//         "utc_offset": 3600,
//         "time_zone": "London",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 32293,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "131516",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000140342174/4Rt25gos.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000140342174/4Rt25gos.jpeg",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/450713803463065600/Zg34ieGk_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/450713803463065600/Zg34ieGk_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/58139661/1386013639",
//         "profile_link_color": "009999",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "EFEFEF",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "fr"
//         },
//         "created_at": "Fri Mar 28 01:15:38 +0000 2014",
//         "id": 449354091357937660,
//         "id_str": "449354091357937665",
//         "text": "BEYONCE http://t.co/cnOKqFOk4E",
//         "source": "web",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 57838735,
//           "id_str": "57838735",
//           "name": "Milk ",
//           "screen_name": "miilkkk",
//           "location": "NYC",
//           "description": "Living the PRICK life and laughing...BECOME A PRICK #Proudprick planetyeeloy@gmail.com",
//           "url": "http://t.co/yWNVouNvou",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/yWNVouNvou",
//                   "expanded_url": "http://www.pricklypoison.com/",
//                   "display_url": "pricklypoison.com",
//                   "indices":  [
//                     0,
//                     22
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 730498,
//           "friends_count": 49213,
//           "listed_count": 2804,
//           "created_at": "Sat Jul 18 03:11:55 +0000 2009",
//           "favourites_count": 77,
//           "utc_offset": -25200,
//           "time_zone": "Pacific Time (US & Canada)",
//           "geo_enabled": true,
//           "verified": false,
//           "statuses_count": 59853,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "030303",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000166704644/i_kvPgmq.png",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000166704644/i_kvPgmq.png",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/1661162069/MILKk_normal.jpg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/1661162069/MILKk_normal.jpg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/57838735/1389502461",
//           "profile_link_color": "B30000",
//           "profile_sidebar_border_color": "FFFFFF",
//           "profile_sidebar_fill_color": "120D0C",
//           "profile_text_color": "F21308",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 294,
//         "favorite_count": 671,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [],
//           "user_mentions":  [],
//           "media":  [
//              {
//               "id": 449354091366326300,
//               "id_str": "449354091366326272",
//               "indices":  [
//                 8,
//                 30
//               ],
//               "media_url": "http://pbs.twimg.com/media/BjxtKlJCIAAAgto.jpg",
//               "media_url_https": "https://pbs.twimg.com/media/BjxtKlJCIAAAgto.jpg",
//               "url": "http://t.co/cnOKqFOk4E",
//               "display_url": "pic.twitter.com/cnOKqFOk4E",
//               "expanded_url": "http://twitter.com/miilkkk/status/449354091357937665/photo/1",
//               "type": "photo",
//               "sizes":  {
//                 "large":  {
//                   "w": 500,
//                   "h": 498,
//                   "resize": "fit"
//                 },
//                 "thumb":  {
//                   "w": 150,
//                   "h": 150,
//                   "resize": "crop"
//                 },
//                 "medium":  {
//                   "w": 500,
//                   "h": 498,
//                   "resize": "fit"
//                 },
//                 "small":  {
//                   "w": 340,
//                   "h": 339,
//                   "resize": "fit"
//                 }
//               }
//             }
//           ]
//         },
//         "favorited": false,
//         "retweeted": false,
//         "possibly_sensitive": true,
//         "lang": "fr"
//       },
//       "retweet_count": 294,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "miilkkk",
//             "name": "Milk ",
//             "id": 57838735,
//             "id_str": "57838735",
//             "indices":  [
//               3,
//               11
//             ]
//           }
//         ],
//         "media":  [
//            {
//             "id": 449354091366326300,
//             "id_str": "449354091366326272",
//             "indices":  [
//               21,
//               43
//             ],
//             "media_url": "http://pbs.twimg.com/media/BjxtKlJCIAAAgto.jpg",
//             "media_url_https": "https://pbs.twimg.com/media/BjxtKlJCIAAAgto.jpg",
//             "url": "http://t.co/cnOKqFOk4E",
//             "display_url": "pic.twitter.com/cnOKqFOk4E",
//             "expanded_url": "http://twitter.com/miilkkk/status/449354091357937665/photo/1",
//             "type": "photo",
//             "sizes":  {
//               "large":  {
//                 "w": 500,
//                 "h": 498,
//                 "resize": "fit"
//               },
//               "thumb":  {
//                 "w": 150,
//                 "h": 150,
//                 "resize": "crop"
//               },
//               "medium":  {
//                 "w": 500,
//                 "h": 498,
//                 "resize": "fit"
//               },
//               "small":  {
//                 "w": 340,
//                 "h": 339,
//                 "resize": "fit"
//               }
//             }
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "fr"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:24 +0000 2014",
//       "id": 450716256081965060,
//       "id_str": "450716256081965056",
//       "text": "RT @UnforgetfuI: BEYONCE DOESNT HAVE A THIGH GAP BUT SHES CONSIDERED THE MOST BEAUTIFUL WOMAN IN THE WORLD. REMEMBER THAT WHEN YOU FEEL BAD…",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 1312464284,
//         "id_str": "1312464284",
//         "name": "♡♡♡",
//         "screen_name": "jessica_chin14",
//         "location": "",
//         "description": "",
//         "url": "http://t.co/9yPjCVNZkW",
//         "entities":  {
//           "url":  {
//             "urls":  [
//                {
//                 "url": "http://t.co/9yPjCVNZkW",
//                 "expanded_url": "http://ask.fm/jessicachin14",
//                 "display_url": "ask.fm/jessicachin14",
//                 "indices":  [
//                   0,
//                   22
//                 ]
//               }
//             ]
//           },
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 203,
//         "friends_count": 321,
//         "listed_count": 0,
//         "created_at": "Fri Mar 29 03:32:42 +0000 2013",
//         "favourites_count": 701,
//         "utc_offset": null,
//         "time_zone": null,
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 3852,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/439877139773808640/H-mV3tpJ_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/439877139773808640/H-mV3tpJ_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/1312464284/1393787699",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "C0DEED",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": true,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 19:12:02 +0000 2014",
//         "id": 450712138605002750,
//         "id_str": "450712138605002753",
//         "text": "BEYONCE DOESNT HAVE A THIGH GAP BUT SHES CONSIDERED THE MOST BEAUTIFUL WOMAN IN THE WORLD. REMEMBER THAT WHEN YOU FEEL BAD ABOUT YOURSELF.",
//         "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 1145439776,
//           "id_str": "1145439776",
//           "name": "♡",
//           "screen_name": "UnforgetfuI",
//           "location": "",
//           "description": "I tweet my thoughts in 140 characters or less.",
//           "url": "http://t.co/f23gslYoPD",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/f23gslYoPD",
//                   "expanded_url": "http://www.teensdigest.com/",
//                   "display_url": "teensdigest.com",
//                   "indices":  [
//                     0,
//                     22
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 103483,
//           "friends_count": 38183,
//           "listed_count": 118,
//           "created_at": "Sun Feb 03 15:21:02 +0000 2013",
//           "favourites_count": 45,
//           "utc_offset": -14400,
//           "time_zone": "Eastern Time (US & Canada)",
//           "geo_enabled": false,
//           "verified": false,
//           "statuses_count": 13122,
//           "lang": "en-gb",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "FFFFFF",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/889042329/f5859f61d035083155d1e844dc44ae63.jpeg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/889042329/f5859f61d035083155d1e844dc44ae63.jpeg",
//           "profile_background_tile": true,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/378800000791813040/18a90876e6a88e4fa093bca6e7fe3b51_normal.jpeg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000791813040/18a90876e6a88e4fa093bca6e7fe3b51_normal.jpeg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/1145439776/1381274544",
//           "profile_link_color": "40A5ED",
//           "profile_sidebar_border_color": "FFFFFF",
//           "profile_sidebar_fill_color": "DDEEF6",
//           "profile_text_color": "333333",
//           "profile_use_background_image": false,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 22,
//         "favorite_count": 57,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [],
//           "user_mentions":  []
//         },
//         "favorited": false,
//         "retweeted": false,
//         "lang": "en"
//       },
//       "retweet_count": 22,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "UnforgetfuI",
//             "name": "♡",
//             "id": 1145439776,
//             "id_str": "1145439776",
//             "indices":  [
//               3,
//               15
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:23 +0000 2014",
//       "id": 450716253158924300,
//       "id_str": "450716253158924289",
//       "text": "RT @BeyonceLite: .@Beyonce is nominated for 3 MTV Video Music Awards Japan 2014. Congrats B! http://t.co/wZVUAVBAfr http://t.co/NOwhCb6tXC",
//       "source": "web",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 15537928,
//         "id_str": "15537928",
//         "name": "Kenya Queen♔",
//         "screen_name": "Kenyaq",
//         "location": "H-Town Vicious #UNT",
//         "description": "",
//         "url": "http://t.co/hGtM9NxK9u",
//         "entities":  {
//           "url":  {
//             "urls":  [
//                {
//                 "url": "http://t.co/hGtM9NxK9u",
//                 "expanded_url": "http://drama-itchqueen.blogspot.com",
//                 "display_url": "drama-itchqueen.blogspot.com",
//                 "indices":  [
//                   0,
//                   22
//                 ]
//               }
//             ]
//           },
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 247,
//         "friends_count": 297,
//         "listed_count": 3,
//         "created_at": "Tue Jul 22 21:54:50 +0000 2008",
//         "favourites_count": 644,
//         "utc_offset": -14400,
//         "time_zone": "America/New_York",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 28326,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "642D8B",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/626217001/a8y2ui7yydhf3ofxy8yg.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/626217001/a8y2ui7yydhf3ofxy8yg.jpeg",
//         "profile_background_tile": true,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/439724335809703936/cfH86wfG_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/439724335809703936/cfH86wfG_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/15537928/1359000486",
//         "profile_link_color": "C34242",
//         "profile_sidebar_border_color": "BFBFBF",
//         "profile_sidebar_fill_color": "C9C9C9",
//         "profile_text_color": "1C1F23",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 19:11:26 +0000 2014",
//         "id": 450711985483567100,
//         "id_str": "450711985483567104",
//         "text": ".@Beyonce is nominated for 3 MTV Video Music Awards Japan 2014. Congrats B! http://t.co/wZVUAVBAfr http://t.co/NOwhCb6tXC",
//         "source": "web",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 63166035,
//           "id_str": "63166035",
//           "name": "Beyoncé Lite",
//           "screen_name": "BeyonceLite",
//           "location": "Worldwide",
//           "description": "'BEYONCÉ' The Visual Album. 14 songs 17 videos available now on iTunes http://t.co/swx0rLyrZW",
//           "url": "http://t.co/O0ORK5XyQG",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/O0ORK5XyQG",
//                   "expanded_url": "http://Beyonce.com",
//                   "display_url": "Beyonce.com",
//                   "indices":  [
//                     0,
//                     22
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/swx0rLyrZW",
//                   "expanded_url": "http://smartURL.it/beyoncevisualalbum",
//                   "display_url": "smartURL.it/beyoncevisuala…",
//                   "indices":  [
//                     71,
//                     93
//                   ]
//                 }
//               ]
//             }
//           },
//           "protected": false,
//           "followers_count": 191418,
//           "friends_count": 490,
//           "listed_count": 803,
//           "created_at": "Wed Aug 05 15:41:05 +0000 2009",
//           "favourites_count": 173,
//           "utc_offset": -25200,
//           "time_zone": "Pacific Time (US & Canada)",
//           "geo_enabled": true,
//           "verified": false,
//           "statuses_count": 37417,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "000000",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000154514236/q0G6Jw9y.jpeg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000154514236/q0G6Jw9y.jpeg",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/450630411526234112/yMSKsKhL_normal.png",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/450630411526234112/yMSKsKhL_normal.png",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/63166035/1393465406",
//           "profile_link_color": "FF7FC8",
//           "profile_sidebar_border_color": "FFFFFF",
//           "profile_sidebar_fill_color": "FFF7CC",
//           "profile_text_color": "0C3E53",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 76,
//         "favorite_count": 66,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [
//              {
//               "url": "http://t.co/wZVUAVBAfr",
//               "expanded_url": "http://gyao.yahoo.co.jp/vmaj2014/nominee/#shareworth",
//               "display_url": "gyao.yahoo.co.jp/vmaj2014/nomin…",
//               "indices":  [
//                 76,
//                 98
//               ]
//             }
//           ],
//           "user_mentions":  [
//              {
//               "screen_name": "Beyonce",
//               "name": "Beyoncé Knowles",
//               "id": 31239408,
//               "id_str": "31239408",
//               "indices":  [
//                 1,
//                 9
//               ]
//             }
//           ],
//           "media":  [
//              {
//               "id": 450711985491955700,
//               "id_str": "450711985491955713",
//               "indices":  [
//                 99,
//                 121
//               ],
//               "media_url": "http://pbs.twimg.com/media/BkFAKa9CUAEKmK-.png",
//               "media_url_https": "https://pbs.twimg.com/media/BkFAKa9CUAEKmK-.png",
//               "url": "http://t.co/NOwhCb6tXC",
//               "display_url": "pic.twitter.com/NOwhCb6tXC",
//               "expanded_url": "http://twitter.com/BeyonceLite/status/450711985483567104/photo/1",
//               "type": "photo",
//               "sizes":  {
//                 "large":  {
//                   "w": 898,
//                   "h": 600,
//                   "resize": "fit"
//                 },
//                 "small":  {
//                   "w": 340,
//                   "h": 227,
//                   "resize": "fit"
//                 },
//                 "thumb":  {
//                   "w": 150,
//                   "h": 150,
//                   "resize": "crop"
//                 },
//                 "medium":  {
//                   "w": 600,
//                   "h": 401,
//                   "resize": "fit"
//                 }
//               }
//             }
//           ]
//         },
//         "favorited": false,
//         "retweeted": false,
//         "possibly_sensitive": false,
//         "lang": "en"
//       },
//       "retweet_count": 76,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [
//            {
//             "url": "http://t.co/wZVUAVBAfr",
//             "expanded_url": "http://gyao.yahoo.co.jp/vmaj2014/nominee/#shareworth",
//             "display_url": "gyao.yahoo.co.jp/vmaj2014/nomin…",
//             "indices":  [
//               93,
//               115
//             ]
//           }
//         ],
//         "user_mentions":  [
//            {
//             "screen_name": "BeyonceLite",
//             "name": "Beyoncé Lite",
//             "id": 63166035,
//             "id_str": "63166035",
//             "indices":  [
//               3,
//               15
//             ]
//           },
//            {
//             "screen_name": "Beyonce",
//             "name": "Beyoncé Knowles",
//             "id": 31239408,
//             "id_str": "31239408",
//             "indices":  [
//               18,
//               26
//             ]
//           }
//         ],
//         "media":  [
//            {
//             "id": 450711985491955700,
//             "id_str": "450711985491955713",
//             "indices":  [
//               116,
//               138
//             ],
//             "media_url": "http://pbs.twimg.com/media/BkFAKa9CUAEKmK-.png",
//             "media_url_https": "https://pbs.twimg.com/media/BkFAKa9CUAEKmK-.png",
//             "url": "http://t.co/NOwhCb6tXC",
//             "display_url": "pic.twitter.com/NOwhCb6tXC",
//             "expanded_url": "http://twitter.com/BeyonceLite/status/450711985483567104/photo/1",
//             "type": "photo",
//             "sizes":  {
//               "large":  {
//                 "w": 898,
//                 "h": 600,
//                 "resize": "fit"
//               },
//               "small":  {
//                 "w": 340,
//                 "h": 227,
//                 "resize": "fit"
//               },
//               "thumb":  {
//                 "w": 150,
//                 "h": 150,
//                 "resize": "crop"
//               },
//               "medium":  {
//                 "w": 600,
//                 "h": 401,
//                 "resize": "fit"
//               }
//             }
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "iso_language_code": "it",
//         "result_type": "recent"
//       },
//       "created_at": "Mon Mar 31 19:28:22 +0000 2014",
//       "id": 450716251699298300,
//       "id_str": "450716251699298304",
//       "text": "Potrei seriamente stare tutto il giorno ad ascoltare tutti gli album di Beyoncé ripetutemente, she's da queen 👑 💎",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 1026674047,
//         "id_str": "1026674047",
//         "name": "Rebecca",
//         "screen_name": "sheneedsciastin",
//         "location": "dancing with cory",
//         "description": "E quando mi manchi, è come se mi mancasse parte di me — Italy, 15",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 1215,
//         "friends_count": 927,
//         "listed_count": 3,
//         "created_at": "Fri Dec 21 16:04:08 +0000 2012",
//         "favourites_count": 2582,
//         "utc_offset": -10800,
//         "time_zone": "Atlantic Time (Canada)",
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 17732,
//         "lang": "it",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "FFFFFF",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000053503199/6cc2e1b207e1c93116764afc4ac11689.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000053503199/6cc2e1b207e1c93116764afc4ac11689.jpeg",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/449191804207104000/h5Suoz34_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/449191804207104000/h5Suoz34_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/1026674047/1395930644",
//         "profile_link_color": "000000",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": false,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  []
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "it"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:21 +0000 2014",
//       "id": 450716247382970400,
//       "id_str": "450716247382970368",
//       "text": "RT @Canyounot_1D: #youknowyourefromtwitterwhen \n\nYou're one of the first people to rt/fav a celebrities tweet and you instantly feel like B…",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 634320354,
//         "id_str": "634320354",
//         "name": ":(",
//         "screen_name": "xcyNdyx",
//         "location": "Oxnard, CA",
//         "description": "AUSTIN MAHONE YOU GUYS EMBLEM3 :) MIW 5SOS CTE Just a girl that doesn't have any luck.",
//         "url": "http://t.co/xMEIuSz6L6",
//         "entities":  {
//           "url":  {
//             "urls":  [
//                {
//                 "url": "http://t.co/xMEIuSz6L6",
//                 "expanded_url": "http://instagram.com/xcyndy",
//                 "display_url": "instagram.com/xcyndy",
//                 "indices":  [
//                   0,
//                   22
//                 ]
//               }
//             ]
//           },
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 1000,
//         "friends_count": 1018,
//         "listed_count": 7,
//         "created_at": "Fri Jul 13 02:57:14 +0000 2012",
//         "favourites_count": 7043,
//         "utc_offset": -25200,
//         "time_zone": "Arizona",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 8914,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/430565824332435456/hO64AsX3_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/430565824332435456/hO64AsX3_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/634320354/1395204562",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "C0DEED",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": true,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 18:01:07 +0000 2014",
//         "id": 450694292663963650,
//         "id_str": "450694292663963648",
//         "text": "#youknowyourefromtwitterwhen \n\nYou're one of the first people to rt/fav a celebrities tweet and you instantly feel like Beyoncé",
//         "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 1867565869,
//           "id_str": "1867565869",
//           "name": "♡THANK YOU LUKE♡",
//           "screen_name": "Canyounot_1D",
//           "location": "Location: Probably in bed",
//           "description": "1D ☆ 5SOS met and hugged 4/4 + Luke/4 ☆ Janoskians 2/5 ☆ Why is peter pan always flying, Bc he neverlands HAHAHA im too funny!",
//           "url": "https://t.co/giurmaIg8D",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "https://t.co/giurmaIg8D",
//                   "expanded_url": "https://twitter.com/canyounot_1d/status/430445506889015296",
//                   "display_url": "twitter.com/canyounot_1d/s…",
//                   "indices":  [
//                     0,
//                     23
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 12832,
//           "friends_count": 10168,
//           "listed_count": 15,
//           "created_at": "Sun Sep 15 12:26:01 +0000 2013",
//           "favourites_count": 5769,
//           "utc_offset": 3600,
//           "time_zone": "Casablanca",
//           "geo_enabled": false,
//           "verified": false,
//           "statuses_count": 1709,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "9AE4E8",
//           "profile_background_image_url": "http://abs.twimg.com/images/themes/theme16/bg.gif",
//           "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme16/bg.gif",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/448508074916347904/VS3b4a9B_normal.jpeg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/448508074916347904/VS3b4a9B_normal.jpeg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/1867565869/1395767678",
//           "profile_link_color": "0084B4",
//           "profile_sidebar_border_color": "BDDCAD",
//           "profile_sidebar_fill_color": "DDFFCC",
//           "profile_text_color": "333333",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 11,
//         "favorite_count": 9,
//         "entities":  {
//           "hashtags":  [
//              {
//               "text": "youknowyourefromtwitterwhen",
//               "indices":  [
//                 0,
//                 28
//               ]
//             }
//           ],
//           "symbols":  [],
//           "urls":  [],
//           "user_mentions":  []
//         },
//         "favorited": false,
//         "retweeted": false,
//         "lang": "en"
//       },
//       "retweet_count": 11,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [
//            {
//             "text": "youknowyourefromtwitterwhen",
//             "indices":  [
//               18,
//               46
//             ]
//           }
//         ],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "Canyounot_1D",
//             "name": "♡THANK YOU LUKE♡",
//             "id": 1867565869,
//             "id_str": "1867565869",
//             "indices":  [
//               3,
//               16
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:20 +0000 2014",
//       "id": 450716241393885200,
//       "id_str": "450716241393885184",
//       "text": "RT @michaelianblack: The second season of 'House of Cards' is so unrealistic: not a single appearance by Jay-Z and Beyonce at the White Hou…",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 46202219,
//         "id_str": "46202219",
//         "name": "Bill Schultz",
//         "screen_name": "iamBillSchultz",
//         "location": "Cook County",
//         "description": "Listen up, tens. A five is tweeting.",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 477,
//         "friends_count": 502,
//         "listed_count": 12,
//         "created_at": "Wed Jun 10 19:32:30 +0000 2009",
//         "favourites_count": 1454,
//         "utc_offset": -18000,
//         "time_zone": "Central Time (US & Canada)",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 8630,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "000000",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/236857446/xad7c51f60e6df6463bd134514fff753.png",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/236857446/xad7c51f60e6df6463bd134514fff753.png",
//         "profile_background_tile": true,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/430499692154077184/Ak0bzhMs_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/430499692154077184/Ak0bzhMs_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/46202219/1391474098",
//         "profile_link_color": "6C8E8A",
//         "profile_sidebar_border_color": "BFBFBF",
//         "profile_sidebar_fill_color": "C9C9C9",
//         "profile_text_color": "101E30",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 02:27:50 +0000 2014",
//         "id": 450459425313407000,
//         "id_str": "450459425313406976",
//         "text": "The second season of 'House of Cards' is so unrealistic: not a single appearance by Jay-Z and Beyonce at the White House.",
//         "source": "web",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 21035409,
//           "id_str": "21035409",
//           "name": "Michael Ian Black",
//           "screen_name": "michaelianblack",
//           "location": "",
//           "description": "New Head of Westboro Baptist Church",
//           "url": "http://t.co/4jg7uTrfhY",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/4jg7uTrfhY",
//                   "expanded_url": "http://michaelianblack.net",
//                   "display_url": "michaelianblack.net",
//                   "indices":  [
//                     0,
//                     22
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 1930935,
//           "friends_count": 491,
//           "listed_count": 19801,
//           "created_at": "Mon Feb 16 22:15:15 +0000 2009",
//           "favourites_count": 277,
//           "utc_offset": -14400,
//           "time_zone": "Eastern Time (US & Canada)",
//           "geo_enabled": false,
//           "verified": true,
//           "statuses_count": 28280,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": true,
//           "profile_background_color": "C6E2EE",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/28544372/15rUYi.jpg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/28544372/15rUYi.jpg",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/2939795944/adcb295964a40db925f92ae1183a4b67_normal.jpeg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/2939795944/adcb295964a40db925f92ae1183a4b67_normal.jpeg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/21035409/1386906460",
//           "profile_link_color": "1F98C7",
//           "profile_sidebar_border_color": "C6E2EE",
//           "profile_sidebar_fill_color": "DAECF4",
//           "profile_text_color": "663B12",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 690,
//         "favorite_count": 922,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [],
//           "user_mentions":  []
//         },
//         "favorited": false,
//         "retweeted": false,
//         "lang": "en"
//       },
//       "retweet_count": 690,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "michaelianblack",
//             "name": "Michael Ian Black",
//             "id": 21035409,
//             "id_str": "21035409",
//             "indices":  [
//               3,
//               19
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "pt"
//       },
//       "created_at": "Mon Mar 31 19:28:20 +0000 2014",
//       "id": 450716239938478100,
//       "id_str": "450716239938478080",
//       "text": "Beyoncé foi indicada em três categorias no MTV VMA JAPÃO .\n\nA diva foi indicada nas categorias:  \n\n- Melhor Vídeo... http://t.co/7lBNfkrGEY",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 1227719017,
//         "id_str": "1227719017",
//         "name": "Beyoncé Brazil",
//         "screen_name": "Beyonce_Brz",
//         "location": "",
//         "description": "",
//         "url": "http://t.co/TcgKjlAK66",
//         "entities":  {
//           "url":  {
//             "urls":  [
//                {
//                 "url": "http://t.co/TcgKjlAK66",
//                 "expanded_url": "http://www.beyoncebrz.blogspot.com.br",
//                 "display_url": "beyoncebrz.blogspot.com.br",
//                 "indices":  [
//                   0,
//                   22
//                 ]
//               }
//             ]
//           },
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 36,
//         "friends_count": 3,
//         "listed_count": 0,
//         "created_at": "Thu Feb 28 14:48:43 +0000 2013",
//         "favourites_count": 2,
//         "utc_offset": -10800,
//         "time_zone": "Brasilia",
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 3867,
//         "lang": "pt",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "040505",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/446451886996996096/ftDMdjXL.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/446451886996996096/ftDMdjXL.jpeg",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/446453645924515840/E6k3i5FH_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/446453645924515840/E6k3i5FH_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/1227719017/1395279094",
//         "profile_link_color": "E85AD7",
//         "profile_sidebar_border_color": "000000",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [
//            {
//             "url": "http://t.co/7lBNfkrGEY",
//             "expanded_url": "http://fb.me/6nuNKJQfA",
//             "display_url": "fb.me/6nuNKJQfA",
//             "indices":  [
//               117,
//               139
//             ]
//           }
//         ],
//         "user_mentions":  []
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "pt"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:19 +0000 2014",
//       "id": 450716237635780600,
//       "id_str": "450716237635780608",
//       "text": "RT @CED_LUVS_BEY: Best one! 🙌 RT @SamMcgrath_IV: Beyoncé, how many times did you win a Grammy? http://t.co/JcQ8KiuVXC”",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 165855970,
//         "id_str": "165855970",
//         "name": "Charlie C ",
//         "screen_name": "kayswizz11",
//         "location": "Cloud 9",
//         "description": "T.R.U.T.H",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 268,
//         "friends_count": 292,
//         "listed_count": 1,
//         "created_at": "Mon Jul 12 18:28:42 +0000 2010",
//         "favourites_count": 162,
//         "utc_offset": 3600,
//         "time_zone": "London",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 8070,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "FFFFFF",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000180357211/imMZoILG.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000180357211/imMZoILG.jpeg",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/439142794230517760/txhl1ZCr_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/439142794230517760/txhl1ZCr_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/165855970/1395605503",
//         "profile_link_color": "404040",
//         "profile_sidebar_border_color": "333333",
//         "profile_sidebar_fill_color": "000000",
//         "profile_text_color": "999999",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 16:16:39 +0000 2014",
//         "id": 450668003471134700,
//         "id_str": "450668003471134720",
//         "text": "Best one! 🙌 RT @SamMcgrath_IV: Beyoncé, how many times did you win a Grammy? http://t.co/JcQ8KiuVXC”",
//         "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//         "truncated": false,
//         "in_reply_to_status_id": 450667228195995650,
//         "in_reply_to_status_id_str": "450667228195995648",
//         "in_reply_to_user_id": 183068676,
//         "in_reply_to_user_id_str": "183068676",
//         "in_reply_to_screen_name": "SamMcgrath_IV",
//         "user":  {
//           "id": 396186632,
//           "id_str": "396186632",
//           "name": "CED_LUVS_BEY",
//           "screen_name": "CED_LUVS_BEY",
//           "location": "beyonceland",
//           "description": "I love everything beyonce and just a funny down to earth person #beyhive #pisces #teamspurs #teamjanet",
//           "url": "http://t.co/5COXwA6us4",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/5COXwA6us4",
//                   "expanded_url": "http://Cedric9481.tumblr.com",
//                   "display_url": "Cedric9481.tumblr.com",
//                   "indices":  [
//                     0,
//                     22
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 4245,
//           "friends_count": 3384,
//           "listed_count": 20,
//           "created_at": "Sat Oct 22 21:50:39 +0000 2011",
//           "favourites_count": 1251,
//           "utc_offset": -18000,
//           "time_zone": "Quito",
//           "geo_enabled": false,
//           "verified": false,
//           "statuses_count": 179020,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "131516",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/656999277/4h1f9lv0z0buzhkg7vrh.png",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/656999277/4h1f9lv0z0buzhkg7vrh.png",
//           "profile_background_tile": true,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/449857494903705600/_busauAc_normal.jpeg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/449857494903705600/_busauAc_normal.jpeg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/396186632/1395693301",
//           "profile_link_color": "009999",
//           "profile_sidebar_border_color": "EEEEEE",
//           "profile_sidebar_fill_color": "EFEFEF",
//           "profile_text_color": "333333",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 8,
//         "favorite_count": 6,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [
//              {
//               "url": "http://t.co/JcQ8KiuVXC",
//               "expanded_url": "http://vine.co/v/MOjOza9PHVp",
//               "display_url": "vine.co/v/MOjOza9PHVp",
//               "indices":  [
//                 77,
//                 99
//               ]
//             }
//           ],
//           "user_mentions":  [
//              {
//               "screen_name": "SamMcgrath_IV",
//               "name": "***Samantha♡",
//               "id": 183068676,
//               "id_str": "183068676",
//               "indices":  [
//                 15,
//                 29
//               ]
//             }
//           ]
//         },
//         "favorited": false,
//         "retweeted": false,
//         "possibly_sensitive": false,
//         "lang": "en"
//       },
//       "retweet_count": 8,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [
//            {
//             "url": "http://t.co/JcQ8KiuVXC",
//             "expanded_url": "http://vine.co/v/MOjOza9PHVp",
//             "display_url": "vine.co/v/MOjOza9PHVp",
//             "indices":  [
//               95,
//               117
//             ]
//           }
//         ],
//         "user_mentions":  [
//            {
//             "screen_name": "CED_LUVS_BEY",
//             "name": "CED_LUVS_BEY",
//             "id": 396186632,
//             "id_str": "396186632",
//             "indices":  [
//               3,
//               16
//             ]
//           },
//            {
//             "screen_name": "SamMcgrath_IV",
//             "name": "***Samantha♡",
//             "id": 183068676,
//             "id_str": "183068676",
//             "indices":  [
//               33,
//               47
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "pt"
//       },
//       "created_at": "Mon Mar 31 19:28:18 +0000 2014",
//       "id": 450716234708164600,
//       "id_str": "450716234708164609",
//       "text": "o jay-z eh tao feio como que a beyoncé casou e teve uma filha com esse homem agora entendo o ditado “o amor é cego“ porque olha.......",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 2337304086,
//         "id_str": "2337304086",
//         "name": "coraline",
//         "screen_name": "zainocivo",
//         "location": "",
//         "description": "SOFREDORA. AMO AS IRMÃS LARRY SHIPPERS. NAO NECESSARIAMENTE NESSA ORDEM. CANCER DO FANDOM E ODIADA POR TODOS",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 561,
//         "friends_count": 299,
//         "listed_count": 12,
//         "created_at": "Mon Feb 10 21:52:22 +0000 2014",
//         "favourites_count": 172,
//         "utc_offset": -7200,
//         "time_zone": "Mid-Atlantic",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 7042,
//         "lang": "pt",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/449003616112611328/MyslNh8i.png",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/449003616112611328/MyslNh8i.png",
//         "profile_background_tile": true,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/449320286291099648/HiD-GSWp_normal.png",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/449320286291099648/HiD-GSWp_normal.png",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/2337304086/1395961161",
//         "profile_link_color": "03222E",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo":  {
//         "type": "Point",
//         "coordinates":  [
//           -30.04571143,
//           -51.22062241
//         ]
//       },
//       "coordinates":  {
//         "type": "Point",
//         "coordinates":  [
//           -51.22062241,
//           -30.04571143
//         ]
//       },
//       "place":  {
//         "id": "894146230dd1d42d",
//         "url": "https://api.twitter.com/1.1/geo/id/894146230dd1d42d.json",
//         "place_type": "city",
//         "name": "Porto Alegre",
//         "full_name": "Porto Alegre, Rio Grande do Sul",
//         "country_code": "BR",
//         "country": "Brasil",
//         "contained_within":  [],
//         "bounding_box":  {
//           "type": "Polygon",
//           "coordinates":  [
//              [
//                [
//                 -51.3061478,
//                 -30.2688069
//               ],
//                [
//                 -51.012471,
//                 -30.2688069
//               ],
//                [
//                 -51.012471,
//                 -29.9306357
//               ],
//                [
//                 -51.3061478,
//                 -29.9306357
//               ]
//             ]
//           ]
//         },
//         "attributes":  {}
//       },
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  []
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "pt"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:18 +0000 2014",
//       "id": 450716233714110460,
//       "id_str": "450716233714110464",
//       "text": "RT @BlLLIONAIRES: BEYONCE'S ENGAGEMENT RING IS RIDICULOUS!!! 😱💎😍 http://t.co/RoYce4helQ",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 2450284433,
//         "id_str": "2450284433",
//         "name": "TDB_BDB",
//         "screen_name": "tdb_anlow",
//         "location": "",
//         "description": "#TDB #E4DARVELL #Y.O.L.O #Acoholic #Dope #M'sNigga #FuckAOPP #3M #BDB #FreeBARRY",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 12,
//         "friends_count": 167,
//         "listed_count": 1,
//         "created_at": "Mon Mar 31 17:28:10 +0000 2014",
//         "favourites_count": 0,
//         "utc_offset": null,
//         "time_zone": null,
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 119,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
//         "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "C0DEED",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": true,
//         "default_profile_image": true,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Sat Mar 29 22:53:54 +0000 2014",
//         "id": 450043197100523500,
//         "id_str": "450043197100523520",
//         "text": "BEYONCE'S ENGAGEMENT RING IS RIDICULOUS!!! 😱💎😍 http://t.co/RoYce4helQ",
//         "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 331380967,
//           "id_str": "331380967",
//           "name": "",
//           "screen_name": "BlLLIONAIRES",
//           "location": "B I L L I O N A I R E S",
//           "description": "Bringing you stunning pictures of things we all wish we could afford.",
//           "url": null,
//           "entities":  {
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 332440,
//           "friends_count": 18564,
//           "listed_count": 358,
//           "created_at": "Fri Jul 08 02:44:54 +0000 2011",
//           "favourites_count": 8,
//           "utc_offset": -14400,
//           "time_zone": "Eastern Time (US & Canada)",
//           "geo_enabled": false,
//           "verified": false,
//           "statuses_count": 11183,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "FFFFFF",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000058567408/3f0b4a3e6b7d5b22c94df988101e0496.jpeg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000058567408/3f0b4a3e6b7d5b22c94df988101e0496.jpeg",
//           "profile_background_tile": true,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/447073858881720320/vCNZ-Fg3_normal.jpeg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/447073858881720320/vCNZ-Fg3_normal.jpeg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/331380967/1394312866",
//           "profile_link_color": "302F30",
//           "profile_sidebar_border_color": "FFFFFF",
//           "profile_sidebar_fill_color": "FFFFFF",
//           "profile_text_color": "000000",
//           "profile_use_background_image": false,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 86,
//         "favorite_count": 89,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [
//              {
//               "url": "http://t.co/RoYce4helQ",
//               "expanded_url": "http://pics-photo.us/1jFuxQk",
//               "display_url": "pics-photo.us/1jFuxQk",
//               "indices":  [
//                 47,
//                 69
//               ]
//             }
//           ],
//           "user_mentions":  []
//         },
//         "favorited": false,
//         "retweeted": false,
//         "possibly_sensitive": false,
//         "lang": "en"
//       },
//       "retweet_count": 86,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [
//            {
//             "url": "http://t.co/RoYce4helQ",
//             "expanded_url": "http://pics-photo.us/1jFuxQk",
//             "display_url": "pics-photo.us/1jFuxQk",
//             "indices":  [
//               65,
//               87
//             ]
//           }
//         ],
//         "user_mentions":  [
//            {
//             "screen_name": "BlLLIONAIRES",
//             "name": "",
//             "id": 331380967,
//             "id_str": "331380967",
//             "indices":  [
//               3,
//               16
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:17 +0000 2014",
//       "id": 450716229423337500,
//       "id_str": "450716229423337472",
//       "text": "Remember when being added to a list used to make everyone feel like Beyonce lol",
//       "source": "web",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 574743019,
//         "id_str": "574743019",
//         "name": "",
//         "screen_name": "demixkidrauhl",
//         "location": "mystic falls",
//         "description": "they're my light in the dark",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 37273,
//         "friends_count": 14965,
//         "listed_count": 165,
//         "created_at": "Tue May 08 19:45:38 +0000 2012",
//         "favourites_count": 1277,
//         "utc_offset": 3600,
//         "time_zone": "London",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 44770,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "FFFFFF",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/450068805469753344/wndm12Qg.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/450068805469753344/wndm12Qg.jpeg",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/449639627612094464/nv4-gb0t_normal.png",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/449639627612094464/nv4-gb0t_normal.png",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/574743019/1396037685",
//         "profile_link_color": "000000",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 1,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  []
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "fr"
//       },
//       "created_at": "Mon Mar 31 19:28:16 +0000 2014",
//       "id": 450716223169654800,
//       "id_str": "450716223169654784",
//       "text": "RT @Mens_Carter: “@CaligiuriAdrien: Marine Le Pen & moi. :D <3 http://t.co/mXgH0bjGeI”WESH T SERIEUX TOI ? A CROIRE IL A VU BEYONCE JUSKA I…",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 804379232,
//         "id_str": "804379232",
//         "name": "SBVII.",
//         "screen_name": "khloechn",
//         "location": "France ",
//         "description": "230214",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 153,
//         "friends_count": 71,
//         "listed_count": 0,
//         "created_at": "Wed Sep 05 11:10:19 +0000 2012",
//         "favourites_count": 25,
//         "utc_offset": 10800,
//         "time_zone": "Athens",
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 4272,
//         "lang": "fr",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "FFFFFF",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000156380889/XZbcGURg.jpeg",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000156380889/XZbcGURg.jpeg",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/448198036389654528/4bs0dh57_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/448198036389654528/4bs0dh57_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/804379232/1395693221",
//         "profile_link_color": "000000",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": false,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "fr"
//         },
//         "created_at": "Sun Mar 30 20:34:47 +0000 2014",
//         "id": 450370575786340350,
//         "id_str": "450370575786340352",
//         "text": "“@CaligiuriAdrien: Marine Le Pen & moi. :D <3 http://t.co/mXgH0bjGeI”WESH T SERIEUX TOI ? A CROIRE IL A VU BEYONCE JUSKA IL A MIS EN PP MDR",
//         "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//         "truncated": false,
//         "in_reply_to_status_id": 444435032137302000,
//         "in_reply_to_status_id_str": "444435032137302016",
//         "in_reply_to_user_id": 1715801288,
//         "in_reply_to_user_id_str": "1715801288",
//         "in_reply_to_screen_name": "CaligiuriAdrien",
//         "user":  {
//           "id": 1093169982,
//           "id_str": "1093169982",
//           "name": "東京",
//           "screen_name": "Mens_Carter",
//           "location": "Tokyo , Japan",
//           "description": "27/07/12 (meet ambassade de france ) Obtention des papiers francais . Meilleurs tweets en FAVORIS . #TeamMensCarter",
//           "url": "https://t.co/FtJKch7N48",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "https://t.co/FtJKch7N48",
//                   "expanded_url": "https://twitter.com/mens_carter/status/370593364951199745",
//                   "display_url": "twitter.com/mens_carter/st…",
//                   "indices":  [
//                     0,
//                     23
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 11486,
//           "friends_count": 6127,
//           "listed_count": 25,
//           "created_at": "Tue Jan 15 20:35:42 +0000 2013",
//           "favourites_count": 1447,
//           "utc_offset": 7200,
//           "time_zone": "Paris",
//           "geo_enabled": true,
//           "verified": false,
//           "statuses_count": 63989,
//           "lang": "fr",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "C0DEED",
//           "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//           "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/445684376811368449/x8rxfAQ8_normal.jpeg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/445684376811368449/x8rxfAQ8_normal.jpeg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/1093169982/1392842593",
//           "profile_link_color": "0084B4",
//           "profile_sidebar_border_color": "C0DEED",
//           "profile_sidebar_fill_color": "DDEEF6",
//           "profile_text_color": "333333",
//           "profile_use_background_image": true,
//           "default_profile": true,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 392,
//         "favorite_count": 59,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [],
//           "user_mentions":  [
//              {
//               "screen_name": "CaligiuriAdrien",
//               "name": "Adrien Caligiuri",
//               "id": 1715801288,
//               "id_str": "1715801288",
//               "indices":  [
//                 1,
//                 17
//               ]
//             }
//           ],
//           "media":  [
//              {
//               "id": 444435031973695500,
//               "id_str": "444435031973695488",
//               "indices":  [
//                 53,
//                 75
//               ],
//               "media_url": "http://pbs.twimg.com/media/BirzTo6IEAAmoKj.jpg",
//               "media_url_https": "https://pbs.twimg.com/media/BirzTo6IEAAmoKj.jpg",
//               "url": "http://t.co/mXgH0bjGeI",
//               "display_url": "pic.twitter.com/mXgH0bjGeI",
//               "expanded_url": "http://twitter.com/CaligiuriAdrien/status/444435032137302016/photo/1",
//               "type": "photo",
//               "sizes":  {
//                 "medium":  {
//                   "w": 600,
//                   "h": 450,
//                   "resize": "fit"
//                 },
//                 "large":  {
//                   "w": 1024,
//                   "h": 768,
//                   "resize": "fit"
//                 },
//                 "thumb":  {
//                   "w": 150,
//                   "h": 150,
//                   "resize": "crop"
//                 },
//                 "small":  {
//                   "w": 340,
//                   "h": 255,
//                   "resize": "fit"
//                 }
//               },
//               "source_status_id": 444435032137302000,
//               "source_status_id_str": "444435032137302016"
//             }
//           ]
//         },
//         "favorited": false,
//         "retweeted": false,
//         "possibly_sensitive": false,
//         "lang": "fr"
//       },
//       "retweet_count": 392,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "Mens_Carter",
//             "name": "東京",
//             "id": 1093169982,
//             "id_str": "1093169982",
//             "indices":  [
//               3,
//               15
//             ]
//           },
//            {
//             "screen_name": "CaligiuriAdrien",
//             "name": "Adrien Caligiuri",
//             "id": 1715801288,
//             "id_str": "1715801288",
//             "indices":  [
//               18,
//               34
//             ]
//           }
//         ],
//         "media":  [
//            {
//             "id": 444435031973695500,
//             "id_str": "444435031973695488",
//             "indices":  [
//               70,
//               92
//             ],
//             "media_url": "http://pbs.twimg.com/media/BirzTo6IEAAmoKj.jpg",
//             "media_url_https": "https://pbs.twimg.com/media/BirzTo6IEAAmoKj.jpg",
//             "url": "http://t.co/mXgH0bjGeI",
//             "display_url": "pic.twitter.com/mXgH0bjGeI",
//             "expanded_url": "http://twitter.com/CaligiuriAdrien/status/444435032137302016/photo/1",
//             "type": "photo",
//             "sizes":  {
//               "medium":  {
//                 "w": 600,
//                 "h": 450,
//                 "resize": "fit"
//               },
//               "large":  {
//                 "w": 1024,
//                 "h": 768,
//                 "resize": "fit"
//               },
//               "thumb":  {
//                 "w": 150,
//                 "h": 150,
//                 "resize": "crop"
//               },
//               "small":  {
//                 "w": 340,
//                 "h": 255,
//                 "resize": "fit"
//               }
//             },
//             "source_status_id": 444435032137302000,
//             "source_status_id_str": "444435032137302016"
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "fr"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:15 +0000 2014",
//       "id": 450716219742904300,
//       "id_str": "450716219742904321",
//       "text": "RT @Polite_INSANITY: JayZ should write a book on how he got Beyonce, men will buy it faster than women bought  'Think like a man, Act like …",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 436777887,
//         "id_str": "436777887",
//         "name": "Marie♔",
//         "screen_name": "ms_shillingi",
//         "location": "Anywhere i ♡ to be",
//         "description": "♚A Conglomerate of Eminence♚ ★God's Beloved★♥That Sweet Taboo♥☆iMuseYou☆",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 1028,
//         "friends_count": 456,
//         "listed_count": 4,
//         "created_at": "Wed Dec 14 15:26:09 +0000 2011",
//         "favourites_count": 8505,
//         "utc_offset": 10800,
//         "time_zone": "Nairobi",
//         "geo_enabled": true,
//         "verified": false,
//         "statuses_count": 18061,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "A843F0",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme10/bg.gif",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme10/bg.gif",
//         "profile_background_tile": true,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/441122543685365760/kafSg997_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/441122543685365760/kafSg997_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/436777887/1393864439",
//         "profile_link_color": "FF0000",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "7AC3EE",
//         "profile_text_color": "3D1957",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 19:26:18 +0000 2014",
//         "id": 450715729776893950,
//         "id_str": "450715729776893952",
//         "text": "JayZ should write a book on how he got Beyonce, men will buy it faster than women bought  'Think like a man, Act like a woman'.",
//         "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 458580678,
//           "id_str": "458580678",
//           "name": "MγκΘ",
//           "screen_name": "Polite_INSANITY",
//           "location": "kampala",
//           "description": "Therapist for women traumatized by weave theft | Awful poet | Gamer | Cartoonist | Arsenal | system ya Mpa Nkuwe",
//           "url": null,
//           "entities":  {
//             "description":  {
//               "urls":  []
//             }
//           },
//           "protected": false,
//           "followers_count": 464,
//           "friends_count": 466,
//           "listed_count": 4,
//           "created_at": "Sun Jan 08 18:35:19 +0000 2012",
//           "favourites_count": 1665,
//           "utc_offset": 7200,
//           "time_zone": "Cairo",
//           "geo_enabled": false,
//           "verified": false,
//           "statuses_count": 12583,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "666166",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000122210069/febe0f26e8ff74e656288f9d381f90b9.jpeg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000122210069/febe0f26e8ff74e656288f9d381f90b9.jpeg",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/450223106913992704/yst9wL3J_normal.jpeg",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/450223106913992704/yst9wL3J_normal.jpeg",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/458580678/1392305180",
//           "profile_link_color": "0A1585",
//           "profile_sidebar_border_color": "000000",
//           "profile_sidebar_fill_color": "EFEFEF",
//           "profile_text_color": "333333",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 2,
//         "favorite_count": 0,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [],
//           "user_mentions":  []
//         },
//         "favorited": false,
//         "retweeted": false,
//         "lang": "en"
//       },
//       "retweet_count": 2,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "Polite_INSANITY",
//             "name": "MγκΘ",
//             "id": 458580678,
//             "id_str": "458580678",
//             "indices":  [
//               3,
//               19
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:14 +0000 2014",
//       "id": 450716216336740350,
//       "id_str": "450716216336740352",
//       "text": "RT @BeyonceLite: VOTE for Beyoncé at the '14 MTV VMAs Japan! #BestRnBVideo #BestFemaleVideo \n#BestAlbumOfTheYear http://t.co/rgYZf4MqEb",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 2296366733,
//         "id_str": "2296366733",
//         "name": "☪",
//         "screen_name": "camilabaes",
//         "location": "",
//         "description": "The past can hurt,but you can either run from it or learn from it.",
//         "url": "http://t.co/01hngL8Fpa",
//         "entities":  {
//           "url":  {
//             "urls":  [
//                {
//                 "url": "http://t.co/01hngL8Fpa",
//                 "expanded_url": "http://25.media.tumblr.com/087dac57e84d2bda2b51bf48b950ac3c/tumblr_n1q9thCNv01t1631yo2_r1_400.gif",
//                 "display_url": "25.media.tumblr.com/087dac57e84d2b…",
//                 "indices":  [
//                   0,
//                   22
//                 ]
//               }
//             ]
//           },
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 327,
//         "friends_count": 358,
//         "listed_count": 0,
//         "created_at": "Tue Jan 21 23:05:07 +0000 2014",
//         "favourites_count": 356,
//         "utc_offset": null,
//         "time_zone": null,
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 1070,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/450483771075493888/0syM0BCK_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/450483771075493888/0syM0BCK_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/2296366733/1396238676",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "C0DEED",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": true,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 19:28:00 +0000 2014",
//         "id": 450716155981070340,
//         "id_str": "450716155981070336",
//         "text": "VOTE for Beyoncé at the '14 MTV VMAs Japan! #BestRnBVideo #BestFemaleVideo \n#BestAlbumOfTheYear http://t.co/rgYZf4MqEb",
//         "source": "web",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 63166035,
//           "id_str": "63166035",
//           "name": "Beyoncé Lite",
//           "screen_name": "BeyonceLite",
//           "location": "Worldwide",
//           "description": "'BEYONCÉ' The Visual Album. 14 songs 17 videos available now on iTunes http://t.co/swx0rLyrZW",
//           "url": "http://t.co/O0ORK5XyQG",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/O0ORK5XyQG",
//                   "expanded_url": "http://Beyonce.com",
//                   "display_url": "Beyonce.com",
//                   "indices":  [
//                     0,
//                     22
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/swx0rLyrZW",
//                   "expanded_url": "http://smartURL.it/beyoncevisualalbum",
//                   "display_url": "smartURL.it/beyoncevisuala…",
//                   "indices":  [
//                     71,
//                     93
//                   ]
//                 }
//               ]
//             }
//           },
//           "protected": false,
//           "followers_count": 191418,
//           "friends_count": 490,
//           "listed_count": 803,
//           "created_at": "Wed Aug 05 15:41:05 +0000 2009",
//           "favourites_count": 173,
//           "utc_offset": -25200,
//           "time_zone": "Pacific Time (US & Canada)",
//           "geo_enabled": true,
//           "verified": false,
//           "statuses_count": 37417,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "000000",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000154514236/q0G6Jw9y.jpeg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000154514236/q0G6Jw9y.jpeg",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/450630411526234112/yMSKsKhL_normal.png",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/450630411526234112/yMSKsKhL_normal.png",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/63166035/1393465406",
//           "profile_link_color": "FF7FC8",
//           "profile_sidebar_border_color": "FFFFFF",
//           "profile_sidebar_fill_color": "FFF7CC",
//           "profile_text_color": "0C3E53",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 5,
//         "favorite_count": 2,
//         "entities":  {
//           "hashtags":  [
//              {
//               "text": "BestRnBVideo",
//               "indices":  [
//                 44,
//                 57
//               ]
//             },
//              {
//               "text": "BestFemaleVideo",
//               "indices":  [
//                 58,
//                 74
//               ]
//             },
//              {
//               "text": "BestAlbumOfTheYear",
//               "indices":  [
//                 76,
//                 95
//               ]
//             }
//           ],
//           "symbols":  [],
//           "urls":  [
//              {
//               "url": "http://t.co/rgYZf4MqEb",
//               "expanded_url": "http://www.mtvjapan.com/vmaj2014/best-female-video/",
//               "display_url": "mtvjapan.com/vmaj2014/best-…",
//               "indices":  [
//                 96,
//                 118
//               ]
//             }
//           ],
//           "user_mentions":  []
//         },
//         "favorited": false,
//         "retweeted": false,
//         "possibly_sensitive": false,
//         "lang": "en"
//       },
//       "retweet_count": 5,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [
//            {
//             "text": "BestRnBVideo",
//             "indices":  [
//               61,
//               74
//             ]
//           },
//            {
//             "text": "BestFemaleVideo",
//             "indices":  [
//               75,
//               91
//             ]
//           },
//            {
//             "text": "BestAlbumOfTheYear",
//             "indices":  [
//               93,
//               112
//             ]
//           }
//         ],
//         "symbols":  [],
//         "urls":  [
//            {
//             "url": "http://t.co/rgYZf4MqEb",
//             "expanded_url": "http://www.mtvjapan.com/vmaj2014/best-female-video/",
//             "display_url": "mtvjapan.com/vmaj2014/best-…",
//             "indices":  [
//               113,
//               135
//             ]
//           }
//         ],
//         "user_mentions":  [
//            {
//             "screen_name": "BeyonceLite",
//             "name": "Beyoncé Lite",
//             "id": 63166035,
//             "id_str": "63166035",
//             "indices":  [
//               3,
//               15
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:14 +0000 2014",
//       "id": 450716215342686200,
//       "id_str": "450716215342686208",
//       "text": "RT @BeyonceLite: .@Beyonce is nominated for 3 MTV Video Music Awards Japan 2014. Congrats B! http://t.co/wZVUAVBAfr http://t.co/NOwhCb6tXC",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 476811143,
//         "id_str": "476811143",
//         "name": "Aisha",
//         "screen_name": "Moussa987",
//         "location": "Sydney, Australia",
//         "description": "Living to drag and stan for the King herself! @Beyonce slayed me on the 1/11/13!!!! #Beyhive #Proudtobeabulldog",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 1356,
//         "friends_count": 1227,
//         "listed_count": 13,
//         "created_at": "Sat Jan 28 14:30:16 +0000 2012",
//         "favourites_count": 8284,
//         "utc_offset": 39600,
//         "time_zone": "Sydney",
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 55296,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/445560579596374016/Ck3rw_z-_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/445560579596374016/Ck3rw_z-_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/476811143/1395808014",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "C0DEED",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": true,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweeted_status":  {
//         "metadata":  {
//           "result_type": "recent",
//           "iso_language_code": "en"
//         },
//         "created_at": "Mon Mar 31 19:11:26 +0000 2014",
//         "id": 450711985483567100,
//         "id_str": "450711985483567104",
//         "text": ".@Beyonce is nominated for 3 MTV Video Music Awards Japan 2014. Congrats B! http://t.co/wZVUAVBAfr http://t.co/NOwhCb6tXC",
//         "source": "web",
//         "truncated": false,
//         "in_reply_to_status_id": null,
//         "in_reply_to_status_id_str": null,
//         "in_reply_to_user_id": null,
//         "in_reply_to_user_id_str": null,
//         "in_reply_to_screen_name": null,
//         "user":  {
//           "id": 63166035,
//           "id_str": "63166035",
//           "name": "Beyoncé Lite",
//           "screen_name": "BeyonceLite",
//           "location": "Worldwide",
//           "description": "'BEYONCÉ' The Visual Album. 14 songs 17 videos available now on iTunes http://t.co/swx0rLyrZW",
//           "url": "http://t.co/O0ORK5XyQG",
//           "entities":  {
//             "url":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/O0ORK5XyQG",
//                   "expanded_url": "http://Beyonce.com",
//                   "display_url": "Beyonce.com",
//                   "indices":  [
//                     0,
//                     22
//                   ]
//                 }
//               ]
//             },
//             "description":  {
//               "urls":  [
//                  {
//                   "url": "http://t.co/swx0rLyrZW",
//                   "expanded_url": "http://smartURL.it/beyoncevisualalbum",
//                   "display_url": "smartURL.it/beyoncevisuala…",
//                   "indices":  [
//                     71,
//                     93
//                   ]
//                 }
//               ]
//             }
//           },
//           "protected": false,
//           "followers_count": 191418,
//           "friends_count": 490,
//           "listed_count": 803,
//           "created_at": "Wed Aug 05 15:41:05 +0000 2009",
//           "favourites_count": 173,
//           "utc_offset": -25200,
//           "time_zone": "Pacific Time (US & Canada)",
//           "geo_enabled": true,
//           "verified": false,
//           "statuses_count": 37417,
//           "lang": "en",
//           "contributors_enabled": false,
//           "is_translator": false,
//           "is_translation_enabled": false,
//           "profile_background_color": "000000",
//           "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000154514236/q0G6Jw9y.jpeg",
//           "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000154514236/q0G6Jw9y.jpeg",
//           "profile_background_tile": false,
//           "profile_image_url": "http://pbs.twimg.com/profile_images/450630411526234112/yMSKsKhL_normal.png",
//           "profile_image_url_https": "https://pbs.twimg.com/profile_images/450630411526234112/yMSKsKhL_normal.png",
//           "profile_banner_url": "https://pbs.twimg.com/profile_banners/63166035/1393465406",
//           "profile_link_color": "FF7FC8",
//           "profile_sidebar_border_color": "FFFFFF",
//           "profile_sidebar_fill_color": "FFF7CC",
//           "profile_text_color": "0C3E53",
//           "profile_use_background_image": true,
//           "default_profile": false,
//           "default_profile_image": false,
//           "following": false,
//           "follow_request_sent": false,
//           "notifications": false
//         },
//         "geo": null,
//         "coordinates": null,
//         "place": null,
//         "contributors": null,
//         "retweet_count": 76,
//         "favorite_count": 66,
//         "entities":  {
//           "hashtags":  [],
//           "symbols":  [],
//           "urls":  [
//              {
//               "url": "http://t.co/wZVUAVBAfr",
//               "expanded_url": "http://gyao.yahoo.co.jp/vmaj2014/nominee/#shareworth",
//               "display_url": "gyao.yahoo.co.jp/vmaj2014/nomin…",
//               "indices":  [
//                 76,
//                 98
//               ]
//             }
//           ],
//           "user_mentions":  [
//              {
//               "screen_name": "Beyonce",
//               "name": "Beyoncé Knowles",
//               "id": 31239408,
//               "id_str": "31239408",
//               "indices":  [
//                 1,
//                 9
//               ]
//             }
//           ],
//           "media":  [
//              {
//               "id": 450711985491955700,
//               "id_str": "450711985491955713",
//               "indices":  [
//                 99,
//                 121
//               ],
//               "media_url": "http://pbs.twimg.com/media/BkFAKa9CUAEKmK-.png",
//               "media_url_https": "https://pbs.twimg.com/media/BkFAKa9CUAEKmK-.png",
//               "url": "http://t.co/NOwhCb6tXC",
//               "display_url": "pic.twitter.com/NOwhCb6tXC",
//               "expanded_url": "http://twitter.com/BeyonceLite/status/450711985483567104/photo/1",
//               "type": "photo",
//               "sizes":  {
//                 "large":  {
//                   "w": 898,
//                   "h": 600,
//                   "resize": "fit"
//                 },
//                 "small":  {
//                   "w": 340,
//                   "h": 227,
//                   "resize": "fit"
//                 },
//                 "thumb":  {
//                   "w": 150,
//                   "h": 150,
//                   "resize": "crop"
//                 },
//                 "medium":  {
//                   "w": 600,
//                   "h": 401,
//                   "resize": "fit"
//                 }
//               }
//             }
//           ]
//         },
//         "favorited": false,
//         "retweeted": false,
//         "possibly_sensitive": false,
//         "lang": "en"
//       },
//       "retweet_count": 76,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [
//            {
//             "url": "http://t.co/wZVUAVBAfr",
//             "expanded_url": "http://gyao.yahoo.co.jp/vmaj2014/nominee/#shareworth",
//             "display_url": "gyao.yahoo.co.jp/vmaj2014/nomin…",
//             "indices":  [
//               93,
//               115
//             ]
//           }
//         ],
//         "user_mentions":  [
//            {
//             "screen_name": "BeyonceLite",
//             "name": "Beyoncé Lite",
//             "id": 63166035,
//             "id_str": "63166035",
//             "indices":  [
//               3,
//               15
//             ]
//           },
//            {
//             "screen_name": "Beyonce",
//             "name": "Beyoncé Knowles",
//             "id": 31239408,
//             "id_str": "31239408",
//             "indices":  [
//               18,
//               26
//             ]
//           }
//         ],
//         "media":  [
//            {
//             "id": 450711985491955700,
//             "id_str": "450711985491955713",
//             "indices":  [
//               116,
//               138
//             ],
//             "media_url": "http://pbs.twimg.com/media/BkFAKa9CUAEKmK-.png",
//             "media_url_https": "https://pbs.twimg.com/media/BkFAKa9CUAEKmK-.png",
//             "url": "http://t.co/NOwhCb6tXC",
//             "display_url": "pic.twitter.com/NOwhCb6tXC",
//             "expanded_url": "http://twitter.com/BeyonceLite/status/450711985483567104/photo/1",
//             "type": "photo",
//             "sizes":  {
//               "large":  {
//                 "w": 898,
//                 "h": 600,
//                 "resize": "fit"
//               },
//               "small":  {
//                 "w": 340,
//                 "h": 227,
//                 "resize": "fit"
//               },
//               "thumb":  {
//                 "w": 150,
//                 "h": 150,
//                 "resize": "crop"
//               },
//               "medium":  {
//                 "w": 600,
//                 "h": 401,
//                 "resize": "fit"
//               }
//             }
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "possibly_sensitive": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "en"
//       },
//       "created_at": "Mon Mar 31 19:28:13 +0000 2014",
//       "id": 450716212104658940,
//       "id_str": "450716212104658944",
//       "text": "@aaroncarpenter_  I WANT TO BE CALLED BEAUTIFUL AND GET A SMILEY FACE BUT NOOO IM NOT BEYONCE ENOUGH",
//       "source": "<a href='http://twitter.com/download/android' rel='nofollow'>Twitter for Android</a>",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": 1088207396,
//       "in_reply_to_user_id_str": "1088207396",
//       "in_reply_to_screen_name": "aaroncarpenter_",
//       "user":  {
//         "id": 1965690684,
//         "id_str": "1965690684",
//         "name": "Aaron please.☀️",
//         "screen_name": "BeyonceNiamxx",
//         "location": "",
//         "description": "•Niall Horan• His excistince is enough for me.. ♡8-22-14♡ ☆0/5 0/4☆ [ Im just a teenage dirtbag bby ] Magcon Sweg.",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 386,
//         "friends_count": 421,
//         "listed_count": 3,
//         "created_at": "Wed Oct 16 23:50:09 +0000 2013",
//         "favourites_count": 831,
//         "utc_offset": -14400,
//         "time_zone": "Eastern Time (US & Canada)",
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 6253,
//         "lang": "en-gb",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "C0DEED",
//         "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/447916908864475136/seLsmOAP_normal.jpeg",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/447916908864475136/seLsmOAP_normal.jpeg",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/1965690684/1395626689",
//         "profile_link_color": "0084B4",
//         "profile_sidebar_border_color": "C0DEED",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": true,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  [
//            {
//             "screen_name": "aaroncarpenter_",
//             "name": "Aaron Carpenter",
//             "id": 1088207396,
//             "id_str": "1088207396",
//             "indices":  [
//               0,
//               16
//             ]
//           }
//         ]
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "en"
//     },
//      {
//       "metadata":  {
//         "result_type": "recent",
//         "iso_language_code": "fr"
//       },
//       "created_at": "Mon Mar 31 19:28:12 +0000 2014",
//       "id": 450716209504587800,
//       "id_str": "450716209504587776",
//       "text": "j'écoute pas du Beyoncé avant",
//       "source": "web",
//       "truncated": false,
//       "in_reply_to_status_id": null,
//       "in_reply_to_status_id_str": null,
//       "in_reply_to_user_id": null,
//       "in_reply_to_user_id_str": null,
//       "in_reply_to_screen_name": null,
//       "user":  {
//         "id": 1538249700,
//         "id_str": "1538249700",
//         "name": "beer",
//         "screen_name": "thugbiebur",
//         "location": "justin's follow",
//         "description": "J-6",
//         "url": null,
//         "entities":  {
//           "description":  {
//             "urls":  []
//           }
//         },
//         "protected": false,
//         "followers_count": 5280,
//         "friends_count": 503,
//         "listed_count": 56,
//         "created_at": "Sat Jun 22 08:43:03 +0000 2013",
//         "favourites_count": 9349,
//         "utc_offset": 10800,
//         "time_zone": "Athens",
//         "geo_enabled": false,
//         "verified": false,
//         "statuses_count": 76097,
//         "lang": "en",
//         "contributors_enabled": false,
//         "is_translator": false,
//         "is_translation_enabled": false,
//         "profile_background_color": "F7F7F7",
//         "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000082194083/3540802cacf2cd0b15cdb57a2a8cda88.png",
//         "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000082194083/3540802cacf2cd0b15cdb57a2a8cda88.png",
//         "profile_background_tile": false,
//         "profile_image_url": "http://pbs.twimg.com/profile_images/450691843211018241/ffe4dXaE_normal.png",
//         "profile_image_url_https": "https://pbs.twimg.com/profile_images/450691843211018241/ffe4dXaE_normal.png",
//         "profile_banner_url": "https://pbs.twimg.com/profile_banners/1538249700/1396088907",
//         "profile_link_color": "9A869C",
//         "profile_sidebar_border_color": "FFFFFF",
//         "profile_sidebar_fill_color": "DDEEF6",
//         "profile_text_color": "333333",
//         "profile_use_background_image": true,
//         "default_profile": false,
//         "default_profile_image": false,
//         "following": false,
//         "follow_request_sent": false,
//         "notifications": false
//       },
//       "geo": null,
//       "coordinates": null,
//       "place": null,
//       "contributors": null,
//       "retweet_count": 0,
//       "favorite_count": 0,
//       "entities":  {
//         "hashtags":  [],
//         "symbols":  [],
//         "urls":  [],
//         "user_mentions":  []
//       },
//       "favorited": false,
//       "retweeted": false,
//       "lang": "fr"
//     }
//   ],
//   "search_metadata":  {
//     "completed_in": 0.059,
//     "max_id": 450716284058345500,
//     "max_id_str": "450716284058345472",
//     "next_results": "?max_id=450716209504587775&q=beyonce&count=25&include_entities=1",
//     "query": "beyonce",
//     "refresh_url": "?since_id=450716284058345472&q=beyonce&include_entities=1",
//     "count": 25,
//     "since_id": 0,
//     "since_id_str": "0"
//   }
// }
    // return tweets;
  });