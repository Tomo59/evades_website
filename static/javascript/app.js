App = Ember.Application.create({
  // put this to true if you want to lofg the transitions between different routes
  LOG_TRANSITIONS: false
});

App.Router.map(function() {
  this.route('escapees', { path: '/evades' });
  this.route('videos');
  this.route('accomplices', { path: '/complices' });
  this.route('about');
  this.route('contact');
});

// need to call fotorama javascript each time we land into escapees route
App.EscapeesRoute = Ember.Route.extend({
  renderTemplate: function(controller, model) {
    this._super(controller, model);
    console.log("have done the rendering, will call fotorama...");
    Ember.$.getScript('http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.3/fotorama.js');
  }
});
