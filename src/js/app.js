// *********************
//    Modules scripts
// *********************

// MINIFIED Vendor file should be copied over via copyScripts.js (it is by default)

// IMPORT all modules here. Keep lib and minified files out this file.
// Except for the example below

//the import statments for CSS and JS can and should be exactly the same. Components that are CSS only should have some example markup in the HTML folder. The JS file is optional.

import 'modules/bLazySettings';
import 'modules/backToTop';
import 'modules/lorySliderSettings';

import '../components/accordion/bf_accordion';
import '../components/back_to_top/bf_back_to_top';
import '../components/carousel/bf_carousel';
import '../components/forms/bf_forms';
import '../components/modal/bf_modal';
import '../components/nav_main/bf_nav_main';
import '../components/search/searchBox/bf_searchBox';
import '../components/search/searchFilters/bf_searchFilters';
import '../components/social/bf_social';
import '../components/tabs/bf_tabs';
import '../components/headers/bf_headers';


// USING production variables is simple with the envVar function
// Burn after reading
import envVar from 'lib/envVar';

var dev_var = envVar({production:'myProductionURL', development: 'myDevelopmentURL'});

// Test using `$ gulp production` vs `$ gulp` in terminal
console.log(dev_var);
