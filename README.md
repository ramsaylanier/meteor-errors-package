#Meteor Errors Package
A slightly more advanced version of the [error notification package](https://atmospherejs.com/tmeasday/errors) created by Tom Coleman
Created by [Ramsay Lanier](http://ramsaylanier).

###Basic usage:

Simply include the {{> errors}} template block helper anywhere. Here is an example:
```
<template name="layout">
	<header class="header">
		{{> loginButtons}}
	</header>
	{{> errors}}
	{{> yield}}
</template>	
```

This package comes with some default styling. Please style the .error and .alert-error classes as you see fit. 
