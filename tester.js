const form = document.querySelector('form');
const inputResults = document.querySelector('#input-results');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	// Menampilkan hasil input ke bawah secara vertikal
	const results = `
		<p>Name: ${name}</p>
		<p>Email: ${email}</p>
		<p>Password: ${password}</p>
	`;
	inputResults.innerHTML += results;

	// Membersihkan nilai pada input
	document.querySelector('#name').value = '';
	document.querySelector('#email').value = '';
	document.querySelector('#password').value = '';
});
