(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['ripple'],
      __esModule: true,
    };
  }

  define('ripple', [], vendorModule);
})();
