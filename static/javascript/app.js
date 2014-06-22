App = Ember.Application.create({});

App.Router.map(function() {
  this.route('press');
  this.route('about');
  this.route('contact');
});
