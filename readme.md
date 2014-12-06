clinical:ui-alert-panel
============================

A ClinicalFramework WebComponent providing an alert-panel, designed to work with 50px header navbars.


============================
#### Meteor Version

1.0



============================
#### Installation
* Pre-Install: [Meteorite](https://github.com/oortcloud/meteorite) to gain the mrt command
* Add Dropzonejs to your project with:
```
meteor add clinical:ui-alert-panel
```

============================
#### Usage
In your handlebar templates you can just include the template Dropzonejs:

```
{{> dropzone url='http://somewebsite.com/upload' id='dropzoneDiv'}}
```
Which will post any uploaded files to the url of your choice.

============================
#### Options
If you would like more control over your Dropzone. You can instantiate one on any html element and pass a range of events and options.

```
$(selector).dropzone(options);
window.Dropzone.discover();
```


============================
#### Licensing

MIT License. Use as you wish, including for commercial purposes.
