import Service from '@ember/service';
import Ember from 'ember';

const storage = 'global.anypay.anybit.xrp.secret';

export default Service.extend({

  secretstore: Ember.inject.service(),

  address: null,

  secret: null,

  balance: 0,

  api: null,

  server: 'wss://s1.ripple.com',

  async connect() {

    if (!this.api) {
      this.api = new ripple.RippleAPI({server: this.server }); 
    }

    this.loadAddress();

    if (!this.api.isConnected()) {
      console.log('connecting to rippled');

      await this.api.connect();

    }

    return this.api;

  },

  async loadAddress() {

    var secret = await this.secretstore.get('global.anypay.anybit.xrp.secret');
    var address = await this.secretstore.get('global.anypay.anybit.xrp.address');

    this.secret = secret;
    this.address = address;

    if (!this.secret) {

      var {address, secret} = this.api.generateAddress();

      await this.secretstore.set('global.anypay.anybit.xrp.secret', secret);
      await this.secretstore.set('global.anypay.anybit.xrp.address', address);

      this.secret = secret;
      this.address = address;
    }

  },

  async updateBalance() {

    var balances;

    try {

      balances = await this.api.getBalances(this.address);

      this.balance = balances[0].value;

    } catch(error) {

      this.set('balance', 0);
    }
  }

});

