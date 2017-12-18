// Styles:
import '../scss/style.scss';

// open.DASH:
import openDASH from 'opendash';

// User Adapter:
{{ opendash-template-custom-user-adapter-app-i }}

// Data Adapter:
{{ opendash-template-custom-data-adapter-app-i }}

// Widgets:
{{ opendash-template-custom-data-widgets-app-i }}

const instance = new openDASH();

// instance.env('OD-EVENTS-LOG', true);

{{ opendash-template-custom-user-adapter-app }}

{{ opendash-template-custom-data-adapter-app }}

{{ opendash-template-custom-widgets-app }}

// App initialisieren:
instance.start();

// App initialisieren:
const app = angular.module('app', [instance.name]);