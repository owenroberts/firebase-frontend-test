// initialize firebase
(function() {
	var config = {
		apiKey: "AIzaSyDxJ7VUZ_KuAqBmh_k46MOwfFRil_E6OlM",
		authDomain: "front-end-51c85.firebaseapp.com",
		databaseURL: "https://front-end-51c85.firebaseio.com",
		projectId: "front-end-51c85",
		storageBucket: "front-end-51c85.appspot.com",
		messagingSenderId: "566402615229"
	};
	firebase.initializeApp(config);

	const preObject = document.getElementById('object');
	const ulList = document.getElementById('list');
	const dbRefObject = firebase.database().ref().child('object');
	const dbRefList = dbRefObject.child('hobbies');

	dbRefObject.on('value', snap => {
		preObject.textContent = JSON.stringify(snap.val(), null, 3);
	});

	dbRefList.on('child_added', snap => {
		const li = document.createElement('li');
		li.textContent = snap.val();
		li.id = snap.key;
		ulList.appendChild(li);
	});

	dbRefList.on('child_changed', snap => {
		const liChanged = document.getElementById(snap.key);
		liChanged.textContent = snap.val();
	});

	dbRefList.on('child_removed', snap => {
		const liChanged = document.getElementById(snap.key);
		liChanged.remove();
	});

})();

/*
firecast 1: https://www.youtube.com/watch?v=noB98K6A0TY
firecast 2: https://www.youtube.com/watch?v=dBscwaqNPuk
*/