import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return {
      wss: 'wss://s1.ripple.com'
    }
  },

  setupController(controller, model){

    controller.set('model', model);  

  }
});
