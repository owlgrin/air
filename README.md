Air
=======

The light-weight and fat-free AJAX framework.

### Usage

AJAX calls can be easily made by using the following code:

```js
air.request({
	method: 'POST',
	url: 'http://api.horntell.com/profiles',
	params: {
		'first_name' => 'Mohit',
		'last_name' => 'Mamoria'
	},
	callback: function(success, http) {
		if(success) {
			console.log('All Done!');
		} else {
			console.log('Oops!');
		}
	}
});
```

***

I had to wrote this code to implement the same in my own projects and thought it would be useful to many others too. I do not have big plans for this small helper library as of now and it will evolve as the requirement evolves. Pull requests are always welcome. - [Mohit Mamoria](https://twitter.com/mohitmamoria)

### License

The Air project is open-sourced software licensed under [MIT license](http://opensource.org/licenses/MIT).