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

// chaining multiple promises
const getPosition = (options) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(success) => {
				resolve(success);
			},
			(error) => {
				reject(error);
			}
		);
	});

	return promise;
};

getPosition()
	.then((posData) => {
		console.log(posData);
		return setTimer(2000);
	})
	.then((data) => {
		console.log(data);
	})
	//promise error handling
	.catch((error) => {
		console.log(error);
	});

// promise race, all, allSettled
Promise.race([getPosition(), getTimer(1000)]).then((data) => {
	console.log(data);
});

Promise.all([getPosition(), getTimer(1000)]).then((data) => {
	console.log(data);
});

Promise.allSettled([getPosition(), getTimer(1000)]).then((data) => {
	console.log(data);
});

// async/await
const trackUser = async () => {
	const posData = await getPosition();
	const timerData = await getTimer(1000);

	console.log(posData);
	console.log(timerData);
};

trackUser();
