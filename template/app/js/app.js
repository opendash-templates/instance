// Styles:
import '../scss/style.scss';

// open.DASH:
import instance from 'opendash';

// Plugins:
// import eudPlugin from 'opendash/plugins/eud';

// Translations:
import deTranslation from 'opendash/translations/de';

// User Adapter:
{{ opendash-template-custom-user-adapter-app-i }}

// Data Adapter:
{{ opendash-template-custom-data-adapter-app-i }}

// Widgets:
{{ opendash-template-custom-widgets-app-i }}

// Config:
// instance.env('OD-EVENTS-LOG', true);

// Plugins:
// instance.use(eudPlugin);

// Translations:
instance.registerTranslation(deTranslation)

{{ opendash-template-custom-user-adapter-app }}

{{ opendash-template-custom-data-adapter-app }}

{{ opendash-template-custom-widgets-app }}

// App initialisieren:
instance.start();

// App initialisieren:
const app = angular.module('app', [instance.name]);
