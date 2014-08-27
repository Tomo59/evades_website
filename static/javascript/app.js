App = Ember.Application.create({});

App.Router.map(function() {
  this.route('escapees');
  this.route('videos');
  this.route('accomplices');
  this.route('about');
  this.route('contact');
});
