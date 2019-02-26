import Service from '@ember/service';

export default Service.extend({

  get(key) {
    return new Promise((resolve) => {;

      if (window.cordova) {

      } else {

        let value = localStorage.getItem(key);

        resolve(value);
      }

    })

  },

  set(key, value) {

    return new Promise((resolve) => {;

      if (window.cordova) {

      } else {

        localStorage.setItem(key, value);
        resolve();
      }

    });


  }

});
