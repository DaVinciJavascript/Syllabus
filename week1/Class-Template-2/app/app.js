
// base framework
import $ from 'jquery';

// legacy loading for bootstrap js
window.$ = window.jQuery = $;
require('bootstrap');

// import our styles
import './stylesheets/base.scss';

// some extras
// import { TweenLite } from 'gsap';
// import _ from 'underscore';


// on document load
$(function(){

  console.log('%c App Started', 'color:green');

  // add some html content
  $('#root').html('<button class="btn btn-default" type="submit">Button</button>');

  // optionally animate that content
  // TweenLite.to($('#root'), 1, {fontSize: 50}).play();

});
