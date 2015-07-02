var Vue = require('vue');
var marked = require('marked');

var editor = new Vue({
  el: '#editor',
  data: {
    input: '# hello',
    filename: null
  },
  filters: {
    marked: marked
  }
});
