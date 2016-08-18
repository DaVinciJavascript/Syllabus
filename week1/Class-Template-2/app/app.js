
// base framework
import $ from 'jquery';

// legacy loading for bootstrap javascript
window.$ = window.jQuery = $;
require('bootstrap');

// import our styles
import './stylesheets/base.scss';
import _ from 'underscore';

// on document load
$(function(){

  console.log('%c App Started', 'color:green');

  // add some html content
  $('#root').html('<button class="btn btn-default" type="submit">Button</button>');

  // use a template
  _.templateSettings = {
    evaluate:    /{{([\s\S]+?)}}/g,
    interpolate: /{{-([\s\S]+?)}}/g,
    escape:      /{{=([\s\S]+?)}}/g
  };

  var template = '<button class="btn btn-default" type="submit">{{= name}}</button>';
  var compiledTemplate = _.template(template);
  $('#root').html(compiledTemplate({name: '<fruit>'}));

  // optionally animate that content
  $('#root button').animate({fontSize: 50}, 1000);

});
