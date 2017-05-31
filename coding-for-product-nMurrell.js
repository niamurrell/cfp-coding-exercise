var link = {
	title: 'really, really, really long title that will be chopped off',
	link: 'example.com'
	}

var linksArr = [
	{
		title: 'Github',
		link: 'github.com'
	},
	{
		title: 'Google',
		link: 'google.com'
	},
	{
		title: 'really, really, really long title that will be chopped off',
		link: 'example.com'
	}
]

// ***********
// Exercise 1
// ***********
// Write a function that when given an key value pair with a title and url, the function will print a linked title.

// 		If the title is longer than 50 characters, truncate the title to 50 characters followed by 3 ellipses.
// 		To “print” use the print/console method from your programming language.

	function makeLink(obj) {
		var result = "<a href=\"" + obj.link + "\">";
		if (obj.title.length > 50) {
			result += obj.title.substring(0, 51) + "...";
		}
		else {
			result += obj.title;
		}
		result += "</a>";

		console.log(result);
	}

	makeLink(link);


// ***********
// Exercise 2
// ***********
// Write a function when given an array of key value pairs, the function will print out a linked title for key value pair. 
// Call the function from previous question in this function.

	function makeLinksFromArray(array) {
		for (var i = 0, j = array.length; i < j; i++) {
			var obj = array[i];
			makeLink(obj);
		}
	}

	makeLinksFromArray(linksArr);