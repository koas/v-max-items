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
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
    ">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/es_ES/i/scr/pixel.gif" width="1" height="1">
  </form>
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
