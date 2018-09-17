window.addEventListener('load', function() {

	const preObject = document.getElementById('object');
	const ulList = document.getElementById('list');
	const dbRefObject = firebase.database().ref();
	const dbRefList = dbRefObject.child('hobbies');

/*	dbRefObject.on('value', snap => {
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
	});*/

});
