<template>
  <div id="app">
    <div id="header">
      <nav style="display:flex;justify-content: center;background-color: transparent">
        <li class="fork"><a href="https://github.com/koas/v-max-items">View On GitHub</a></li>          
      </nav>
    </div><!-- end header -->

    <div class="wrapper">

      <section>
        <div id="title">
          <h1>v-max-items</h1>
          <p>Limit the number of visible childs in an element</p>
          <hr>
          <span class="credits left">Project maintained by <a href="https://github.com/koas">koas</a></span>
          <span class="credits right">Hosted on GitHub Pages &mdash; Theme by <a href="https://twitter.com/michigangraham">mattgraham</a></span>
        </div>

<p>v-max-items is a Vue.js directive that allows you to limit the number of childs that are visible in an element. When the number of childs is greater than the limit only the first childs are shown and a button is created that allows the user to reveal the remaining childs.</p>

<h3>Demo</h3>

<p>Just include the directive in the element and set the value:</p>
<pre>
  <code>&lt;div v-max-items="5">
    &lt;div>Element 1&lt;/div>
    &lt;div>Element 2&lt;/div>
    &lt;div>Element 3&lt;/div>
    &lt;div>Element 4&lt;/div>
    &lt;div>Element 5&lt;/div>
    &lt;div>Element 6&lt;/div>
    &lt;div>Element 7&lt;/div>
    &lt;div>Element 8&lt;/div>
    &lt;div>Element 9&lt;/div>
    &lt;div>Element 10&lt;/div>
  &lt;/div></code>
</pre>

<p>Only the first five items are visible:</p>

<div v-max-items="5" class="demo">
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
<br /><br />&nbsp;
<h3>Installation and usage</h3>

<p>You can install the directive via npm:</p>

<pre>$ npm install @koas/v-max-items</pre>

<p>And include it in your main.js file:</p>
<pre>import MaxItems from "@koas/v-max-items";</pre>

<h3>That's all!</h3>
<p>I hope you find this directive useful. Feel free to fork it or open issues with bugs or suggestions for improvement.</p>
<p>This directive is free and open source, so you can use it in any project, commercial or not. If you want to support the developer you can donate via PayPal. Thanks!</p>

<div style="text-align:center">
  <a href="https://www.paypal.com/donate/?business=T7P349Q5GY8MN&no_recurring=0&currency_code=EUR" target="_blank">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/es_ES/i/scr/pixel.gif" width="1" height="1">
  </a>
</div>
      </section>

    </div>
    
  </div>
</template>

<style lang="less">
.demo div {
  display: inline-block;
  padding: 3px 6px;
  border: 1px solid #666;
  border-radius: 6px;
  margin: 5px;
}
</style>
