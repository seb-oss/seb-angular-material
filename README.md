# SebNgMaterial

This is SEB theme for Angular Material components

## How to use SEB Material

* add npm dependency to your `package.json`: `npm i --save @brch/seb-ng-material-theme`
* add assets to `angular.json`:
  ```
  "assets": [
    {
      "glob": "**/*",
      "input": "node_modules/seb-ng-material/assets",
      "output": "/assets"
    },
  ]
  ```
* in your top level style file (for ex. `styles.sass`), add SEB Material styles:
  ```
  @import "seb-ng-material/css/main.css";
  ```
* in your markup:
  * body:
  ```html
  <body class="mat-body">...</body>
  ```
  * component, use Angular Material directives:
  ```html
  <button mat-raised-button color="primary" type="button"</button>
  ```

For more info on usage, consult Angular Material docs.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
