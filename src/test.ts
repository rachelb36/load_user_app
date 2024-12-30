/***************************************************************************************************
 * Zone JS is required for Angular testing.
 */
import 'zone.js/testing'; // or 'zone.js/dist/zone-testing' in older versions

/***************************************************************************************************
 * Initialize the Angular testing environment.
 */
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/*
 * If you want to automatically discover all spec files,
 * you can use the following approach with Webpack's require context:
 * (This only works if your build environment supports it—typical in older Angular CLI setups.)
 */
// declare const require: any;
// const context = require.context('./', true, /\.spec\.ts$/);
// context.keys().map(context);

// In more recent Angular CLI setups (v14+), the above auto-discovery might be replaced by
// an Angular JSON "include" pattern. So you may not need the "require.context" lines.

/***************************************************************************************************
 * Unit test environment initialization
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);