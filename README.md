# v-max-items
Vue directive to limit the number of items inside an element. It adds a +N more button to reveal all items.

Documentation and examples available at the [demo page](http://koas.github.io/v-max-items/).

## Quick start
Install via npm:

`$ npm install @koas/v-max-items`

Import in your main.js file:

`import MaxItems from "@koas/v-max-items";`

Add the directive to any element with children:

```
 <div v-max-items="5">
    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
    <div>Element 4</div>
    <div>Element 5</div>
    <div>Element 6</div>
    <div>Element 7</div>
    <div>Element 8</div>
    <div>Element 9</div>
    <div>Element 10</div>
  </div>
  ```
