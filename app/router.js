import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('receive', { path: "/"});
  this.route('send');
  this.route('settings');
  this.route('history');
  this.route('export');
  this.route('export-wallet');
  this.route('set-rippled-server');
});

export default Router;
