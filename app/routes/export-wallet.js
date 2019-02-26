import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  wallet: Ember.inject.service(),

  didTransition() {
    Ember.$('#secret-key-qr').hide();
  },

  model() {
    return {
      secret: this.wallet.secret
    }
  },

  async setupController(controller, model) {

    await this.wallet.connect();

    console.log('wallet', this.wallet);

    controller.set('model', this.wallet);

  }
  
});
