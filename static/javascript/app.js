App = Ember.Application.create({});
App.ApplicationAdapter = DS.FixtureAdapter.extend();


App.Router.map(function() {
  this.route('about');
  this.route('contact');
  this.resource('spectacle', {path: '/spectacles/:date'});
});


App.SpectacleAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1',
  host: 'http://infinite-hamlet-5547.herokuapp.com'
});

App.Spectacle = DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('date'),
  place: DS.attr('string'),
  message: DS.attr('string')
});


// App.Spectacle.FIXTURES = [
//  {
//    id: 1,
//    title: 'Les évadés à Nancy',
//    date: "2014-04-21T09:33:03+02:00",
//    place: 'Nancy',
//    message: "Viendez nous voir à Nancy"
//  },
//  {
//    id: 2,
//    title: '...',
//    date: "2014-04-21T09:33:03+02:00",
//    place: 'Nancy',
//    message: "Viendez nous voir à Nancy"
//  },
//  {
//    id: 3,
//    title: 'Profit!',
//    date: "2014-04-21T09:33:03+02:00",
//    place: 'Nancy',
//    message: "Viendez nous voir à Nancy" 
//  }
// ];

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('spectacle');
  }
});

