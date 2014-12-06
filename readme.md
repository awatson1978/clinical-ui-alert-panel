clinical:ui-alert-panel
============================

A ClinicalFramework WebComponent providing an top-anchored flash alert-panel, designed to work with 50px header navbars.

![screenshot](https://raw.githubusercontent.com/awatson1978/clinical-ui-alert-panel/master/screenshots/screenshot-after.png)  


============================
#### Meteor Version

1.0



============================
#### Installation

```
meteor add clinical:ui-alert-panel
```

============================
#### Document Object Model  

The basic way to adding the webcomponent in is to simply add ``{{> alertPanel}}`` somewhere in your page layout.  The alert panel is designed to work at the root of your application, so it's best to put it in your main layout, rather than in a page or subtemplate.  

````html
<template name="appLayout">
<div id="appLayout">
{{> alertPanel }}
{{> yield }}
</div>
</template>
````

There's also some experimental support with using polyfills by way of the webcomponentsjs library.  Styling doesn't seem to be currently getting applied to the shadow DOM.  But if you'd like to try out some semantic HTML, you can try the following.  

````html
<template name="appLayout">
<div id="appLayout">
<alert-panel></alert-panel>
{{> yield }}
</div>
</template>
````


============================
#### API

The API is very basic with only two methods to choose from.  

````js
AlertPanel.announce("You have a message!");
AlertPanel.close();
````

You can also access the lower-level data variables

````js
Session.set('alertMessage', "A new message everybody needs to see.");
Session.get('alertMessage')
````

============================
#### Debugging & Testing Helpers

As you're wiring up your alerts and making modifications to the alert panel, it's sometimes useful to be able to observe the state of the message variable, and to be able to manualy trigger the alert panel.  There are a couple of helper methods to assist you doing that.  

````html
<span>{{getCurrentAlert}}</span>
<ul>{{> toggleAlert }}<ul>
````


============================
#### Licensing

MIT License. Use as you wish, including for commercial purposes.
