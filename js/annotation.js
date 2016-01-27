jQuery(function ($) {
    $('#wrapper').annotator();
});
jQuery(function ($) {
    $('#content').annotator()
                 .annotator('setupPlugins');
});	
var content = $('#wrapper').annotator();
    content.annotator('addPlugin', 'Store', {
      // The endpoint of the store on your server.
      prefix: '/store/endpoint',

      // Attach the uri of the current page to all annotations to allow search.
      annotationData: {
        'uri': 'http://aneesps.github.io/Upcomer/'
      },

      // This will perform a "search" action when the plugin loads. Will
      // request the last 20 annotations for the current url.
      // eg. /store/endpoint/search?limit=20&uri=http://this/document/only
      loadFromSearch: {
        'uri': 'http://aneesps.github.io/Upcomer/'
      }
    });
