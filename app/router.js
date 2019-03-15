import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('position-layout');
  this.route('flex-layout');
  this.route('saas-layout');
});

export default Router;
