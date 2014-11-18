if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Whoop whoop!',
		url: 'http://dickedinger.de'
	});
	Posts.insert({
		title: 'What the fuck,',
		url: 'http://isinthehole.de'
	});
	Posts.insert({
		title: 'Give me some titties!',
		url: 'http://youporn.com'
	});
}