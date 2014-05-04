/**
 * Game.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs    :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    concepts: {
      type: 'array'
    },

    themes: {
      type: 'array'
    },

    game_platforms: {
      type: 'array'
    },

    genres: {
      type: 'array'
    },

    characters: {
      type: 'array'
    },

    primary_image: {
      type: 'string'
    },

    rating: {
      type: 'string'
    },

    original_release_date: {
      type: 'string'
    },

    gb_url: {
      type: 'string'
    },

    developers: {
      type: 'array'
    },

    images: {
      type: 'array'
    }

  }

};
