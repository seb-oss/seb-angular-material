# @brch/seb-ng-material-theme

This is SEB theme for [Angular Material components](https://material.angular.io)

## How to use SEB Material

* add npm dependency for Angular Material: `npm i --save @angular/material`
* add npm dependency for SEB theme: `npm i --save @brch/seb-ng-material-theme`
* add assets to `angular.json`:
  ```
  "assets": [
    {
      "glob": "**/*",
      "input": "node_modules/@brch/seb-ng-material-theme/assets",
      "output": "/assets"
    },
  ]
  ```
* in your top level style file (for ex. `styles.sass`), add SEB Material styles:
  ```
  @import "@brch/seb-ng-material-theme/css/main.css";
  ```
* in your markup body:
  ```html
  <body class="mat-body">...</body>
  ```
* in your components, use Angular Material directives:
  ```html
  <button mat-raised-button color="primary" type="button"</button>
  ```

For more info on usage and examples, consult [Angular Material docs](https://material.angular.io).
