# @sebgroup/seb-angular-material-theme

This is SEB theme for [Angular Material components](https://material.angular.io)

## How to use SEB Material

* add npm dependency for Angular Material: `npm i --save @angular/material`
* add npm dependency for SEB theme: `npm i --save @brch/seb-ng-material-theme`

* in your top level style file (for ex. `styles.sass`), add SEB Material styles:
  ```
  @import "@sebgroup/seb-angular-material-theme/seb-mat-theme.css";
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
