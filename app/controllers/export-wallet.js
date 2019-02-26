import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  actions: {
    showSecret() {
      console.log("show secret");
      Ember.$('#secret-key-qr').show();
    }
  }
});
