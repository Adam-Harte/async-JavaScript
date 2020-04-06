// promises
const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!');
		}, duration);
	});

	return promise;
};

setTimer(2000).then(() => {
	console.log('promise timer done!');
});

setTimer(5000).then((data) => {
	console.log(data);
});
