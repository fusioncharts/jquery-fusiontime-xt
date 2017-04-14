# jQuery Wrapper for FusionTime XT

The FusionTime XT jQuery plugin allows you to use jQuery syntax to render and manipulate your charts and graphs seamlessly across all browsers and devices.

It helps you add interactive JavaScript charts to your web and mobile applications, combining the delight and comprehensiveness of the FusionCharts Suite XT with the easy-to-use jQuery syntax.

- Add a chart using just a single plugin method.
- Add chart to any jquery selection

## QuickStart

### Step 1: Include jquery-fusiontime-xt.js

#### Option A: Using script tag

In your HTML, include `jquery-fusiontime-xt.js` after all other scripts:
```html
<script type="text/javascript" src="/path/to/fusioncharts.timeseries.js"></script>
<script type="text/javascript" src="/path/to/jquery.min.js"></script>
<script type="text/javascript" src="/path/to/jquery-fusiontime-xt.js"></script>
```

#### Option B: Using commonJS

```javascript
var FusiontimeXt = require('jquery-fusiontime-xt').default;

FusiontimeXt(jQuery);
```

#### Option C: Using commonJS ES6 style

```javascript
import FusiontimeXt from 'jquery-fusiontime-xt';

FusiontimeXt(jQuery);
```

#### Option D: Using AMD

```javascript
define(['jquery-fusiontime-xt'], function (FusiontimeXt) {
  FusiontimeXt = FusiontimeXt.default;

  FusiontimeXt(jQuery);
});
```

### Step 2: Give one unique id to your target HTML element

```html
<div id="tschart"></div>
```

### Step 3: Provide details using `$().fusiontime()`

You need to pass height , width and dataSource to using fusiontime method. This method gives you easy way to pass details to your chart. Just call fusiontime with any jquery object.

```javascript
$("#tschart").fusiontime({
  width: 1000,
  height: 8000,
  dataSource: {
    ...
  }
});
```

## Licensing

jQuery FusionTime is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can <a href="http://fusioncharts.com/download/">Download an evaluation</a>.
  You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is <a href="http://www.fusioncharts.com/download/free/">free for non-commercial and personal use</a>) .</p>
