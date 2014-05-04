var http = require('http');
var async = require('async');

exports.start = function(){

  Count.count(function(err, num){
    for ( num; num < 42330; num++ ) {

      var game = {
        name: '',
        description: '',
        concepts: [],
        themes: [],
        game_platforms: [],
        genres: [],
        characters: [],
        primary_image: '',
        rating: '',
        original_release_date: '',
        gb_url: '',
        developers: [],
        images: []
      };

      var url = 'http://www.giantbomb.com/api/game/' + num + '/?api_key=97aa330b6c4a3276eb9ea1de316d031713a8040e&format=json';

      http.get(url, function(res) {

          var body = '';

          res.on('data', function(chunk) {
              body += chunk;
          });

          res.on('end', function() {
            var gbresponse = JSON.parse(body);


            if ( gbresponse.results.name !== null && gbresponse.results.name !== undefined ) {
              game.name = gbresponse.results.name;
            }

            if ( gbresponse.results.description !== null  && gbresponse.results.description !== undefined) {
              game.description = gbresponse.results.description;
            }

            if ( gbresponse.results.image !== null && gbresponse.results.image !== undefined ) {
              game.primary_image = gbresponse.results.image.super_url;
            }

            if ( gbresponse.results.original_game_rating !== null && gbresponse.results.original_game_rating !== undefined ) {
              game.rating = gbresponse.results.original_game_rating.name;
            }

            if ( gbresponse.results.original_release_date !== null && gbresponse.results.original_release_date !== undefined ) {
              game.original_release_date = gbresponse.results.original_release_date;
            }

            if ( gbresponse.results.site_detail_url !== null && gbresponse.results.site_detail_url !== undefined ) {
              game.gb_url = gbresponse.results.site_detail_url;
            }


            async.series({
              concepts: function(callback){
                if ( gbresponse.results.concepts === null ) {
                  callback();
                } else if ( gbresponse.results.concepts === undefined ) {
                  callback();
                } else if ( !gbresponse.results.concepts.length ) {
                  callback();
                } else if ( gbresponse.results.concepts.length === 0 ) {
                  callback();
                } else {
                  async.forEach(gbresponse.results.concepts, function(concept, cb){
                    game.concepts.push(concept.name);
                    Concept.findOne({ name: concept.name }).exec(function(err, foundConcept){
                      if ( err ) {
                        cb();
                      } else if ( !foundConcept ) {
                        Concept.create({ name: concept.name }).exec(function(err, createdConcept){
                          if ( err ) {
                            cb();
                          } else {
                            console.log('New Concept Found! Adding to database: ' + createdConcept.name);
                            cb();
                          }
                        });
                      }
                    });
                  }, function(err){
                    callback();
                  });
                }
              },
              themes: function(callback){
                if ( gbresponse.results.themes === null ) {
                  callback();
                } else if ( gbresponse.results.themes === undefined ) {
                  callback();
                } else if ( !gbresponse.results.themes.length ) {
                  callback();
                } else if ( gbresponse.results.themes.length === 0 ) {
                  callback();
                } else {
                  async.forEach(gbresponse.results.themes, function(theme, cb){
                    game.themes.push(theme.name);
                    Theme.findOne({ name: theme.name }).exec(function(err, foundConcept){
                      if ( err ) {
                        cb();
                      } else if ( !foundConcept ) {
                        Theme.create({ name: theme.name }).exec(function(err, createdConcept){
                          if ( err ) {
                            cb();
                          } else {
                            console.log('New Theme Found! Adding to database: ' + createdConcept.name);
                            cb();
                          }
                        });
                      }
                    });
                  }, function(err){
                    callback();
                  });
                }
              },
              game_platforms: function(callback){
                if ( gbresponse.results.platforms === null ) {
                  callback();
                } else if ( gbresponse.results.platforms === undefined ) {
                  callback();
                } else if ( !gbresponse.results.platforms.length ) {
                  callback();
                } else if ( gbresponse.results.platforms.length === 0 ) {
                  callback();
                } else {
                  async.forEach(gbresponse.results.platforms, function(platform, cb){
                    game.game_platforms.push(platform.name);
                    Platform.findOne({ name: platform.name }).exec(function(err, foundConcept){
                      if ( err ) {
                        cb();
                      } else if ( !foundConcept ) {
                        Platform.create({ name: platform.name }).exec(function(err, createdConcept){
                          if ( err ) {
                            cb();
                          } else {
                            console.log('New Platform Found! Adding to database: ' + createdConcept.name);
                            cb();
                          }
                        });
                      }
                    });
                  }, function(err){
                    callback();
                  });
                }
              },
              genres: function(callback){
                if ( gbresponse.results.genres === null ) {
                  callback();
                } else if ( gbresponse.results.genres === undefined ) {
                  callback();
                } else if ( !gbresponse.results.genres.length ) {
                  callback();
                } else if ( gbresponse.results.genres.length === 0 ) {
                  callback();
                } else {
                  async.forEach(gbresponse.results.genres, function(genre, cb){
                    game.genres.push(genre.name);
                    Genre.findOne({ name: genre.name }).exec(function(err, foundConcept){
                      if ( err ) {
                        cb();
                      } else if ( !foundConcept ) {
                        Genre.create({ name: genre.name }).exec(function(err, createdConcept){
                          if ( err ) {
                            cb();
                          } else {
                            console.log('New Genre Found! Adding to database: ' + createdConcept.name);
                            cb();
                          }
                        });
                      }
                    });
                  }, function(err){
                    callback();
                  });
                }
              },
              characters: function(callback){
                if ( gbresponse.results.characters === null ) {
                  callback();
                } else if ( gbresponse.results.characters === undefined ) {
                  callback();
                } else if ( !gbresponse.results.characters.length ) {
                  callback();
                } else if ( gbresponse.results.characters.length === 0 ) {
                  callback();
                } else {
                  async.forEach(gbresponse.results.characters, function(character, cb){
                    game.characters.push(character.name);
                    Character.findOne({ name: character.name }).exec(function(err, foundConcept){
                      if ( err ) {
                        cb();
                      } else if ( !foundConcept ) {
                        Character.create({ name: character.name }).exec(function(err, createdConcept){
                          if ( err ) {
                            cb();
                          } else {
                            console.log('New Character Found! Adding to database: ' + createdConcept.name);
                            cb();
                          }
                        });
                      }
                    });
                  }, function(err){
                    callback();
                  });
                }
              },
              developers: function(callback){
                if ( gbresponse.results.developers === null ) {
                  callback();
                } else if ( gbresponse.results.developers === undefined ) {
                  callback();
                } else if ( !gbresponse.results.developers.length ) {
                  callback();
                } else if ( gbresponse.results.developers.length === 0 ) {
                  callback();
                } else {
                  async.forEach(gbresponse.results.developers, function(developer, cb){
                    game.developers.push(developer.name);
                    Developer.findOne({ name: developer.name }).exec(function(err, foundConcept){
                      if ( err ) {
                        cb();
                      } else if ( !foundConcept ) {
                        Developer.create({ name: developer.name }).exec(function(err, createdConcept){
                          if ( err ) {
                            cb();
                          } else {
                            console.log('New Developer Found! Adding to database: ' + createdConcept.name);
                            cb();
                          }
                        });
                      }
                    });
                  }, function(err){
                    callback();
                  });
                }
              },
              images: function(callback){
                if ( gbresponse.results.images === null ) {
                  callback();
                } else if ( gbresponse.results.images === undefined ) {
                  callback();
                } else if ( !gbresponse.results.images.length ) {
                  callback();
                } else if ( gbresponse.results.images.length === 0 ) {
                  callback();
                } else {
                  async.forEach(gbresponse.results.images, function(image, cb){
                    game.images.push(image.super_url);
                    cb();
                  }, function(err){
                    callback();
                  });
                }
              }
            }, function(err, results){
            });


            Game.create(game).exec(function(err, createdGame){

              game = {
                name: '',
                description: '',
                concepts: [],
                themes: [],
                game_platforms: [],
                genres: [],
                characters: [],
                primary_image: '',
                rating: '',
                original_release_date: '',
                gb_url: '',
                developers: [],
                images: []
              };

              if ( err ) {
                return;
              }

              if ( !createdGame ) {
                return;
              }

              console.log('///////////////////////////////////\nGAME CREATED, ID:' + createdGame.id + '\n///////////////////////////////////');


              Count.create().exec(function(err, createdCount){
                // Master callback
              });
            });
          });
      });
    }
  });
};