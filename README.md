The FusionTime XT jQuery plugin allows you to use jQuery syntax to render and manipulate your charts and graphs seamlessly across all browsers and devices.

It helps you add interactive JavaScript charts to your web and mobile applications, combining the delight and comprehensiveness of the FusionCharts Suite XT with the easy-to-use jQuery syntax.

<ul>
  <li>Add a chart using just a single plugin method.</li>
  <li> Add chart to any jquery selection</li>
</ul>

<h2>QuickStart</h2>
<h3>Step 1: Include jquery.fusiontime.js</h3>
<p>In your HTML, include <code>jquery.fusiontime.js</code> after all other scripts:</p>
<pre><code>&lt;script type="text/javascript" src="/path/to/fusioncharts.timeseries.js"&gt;
&lt;script type="text/javascript" src="/path/to/jquery.min.js"&gt;
&lt;script type="text/javascript" src="/path/to/jquery.fusiontime.js"&gt;&lt;/script&gt;</code></pre>

<h3>Step 2: Give one unique id to your target HTML element</h3>
<pre><code>&lt;div id="tschart"&gt;&lt;/div&gt;</code></pre>

<h3>Step 3: Provide details using <code class="language-javascript">$().fusiontime()</code></h3>
<p>You need to pass height , width and dataSource to using fusiontime method. This method gives you easy way to pass details to your chart. Just call fusiontime with any jquery object.</p>
<pre><code>
$("#tschart").fusiontime({
width: 1000,
height: 8000,
dataSource: {
...
}
});
</code></pre>
<h3>Licensing</h3>
<p>jQuery FusionTime is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can <a href="http://fusioncharts.com/download/">Download an evaluation</a>.
  You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is <a href="http://www.fusioncharts.com/download/free/">free for non-commercial and personal use</a>) .</p>
