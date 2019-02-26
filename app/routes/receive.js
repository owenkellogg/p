import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({

  wallet: Ember.inject.service(),

  async model() {

    await this.wallet.connect();

    return {
      address: this.wallet.address
    }

  },

  async setupController(controller, model) {

    controller.set('model', model);
    controller.set('account', model);

    let balances = await this.wallet.updateBalance();

  }
});
