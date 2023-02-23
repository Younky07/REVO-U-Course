function updateDateTime() {
	const currentDateTime = new Date();
	const dateString = currentDateTime.toDateString();
	const timeString = currentDateTime.toLocaleTimeString();
	const gmtOffset = currentDateTime.getTimezoneOffset();

	
	const gmtOffsetHours = Math.abs(Math.floor(gmtOffset / 60));
	const gmtOffsetMinutes = Math.abs(gmtOffset % 60);
	const gmtOffsetString = `GMT${gmtOffset < 0 ? '-' : '+'}${gmtOffsetHours < 10 ? '0' : ''}${gmtOffsetHours}:${gmtOffsetMinutes < 10 ? '0' : ''}${gmtOffsetMinutes}`;

	document.querySelector('#current-datetime').textContent = `${dateString}, ${timeString}`;
	document.querySelector('#gmt-offset').textContent = gmtOffsetString;
}

setInterval(updateDateTime, 1000);


const formInput = document.querySelector('.form-input');
const listData = document.querySelector('#list-data');

formInput.addEventListener('submit', (e) => {
	event.preventDefault(); 
	
	const inputNama = document.querySelector('#nama').value;
	const inputTanggalLahir = document.querySelector('#tanggal-lahir').value;
	const inputGender = document.querySelector('#gender').value;
    const inputPesan = document.querySelector('#pesan').value;

	const data = {
		nama: inputNama,
		tanggalLahir: inputTanggalLahir,
		gender: inputGender,
        Pesan: inputPesan
	};

	const results = `
		<li>Nama : ${data.nama}</li>
    	<li>Jenis Kelamin : ${data.gender}</li>
    	<li>Tanggal Lahir : ${data.tanggalLahir}</li>
    	<p>Pesan : ${data.Pesan}</p>
		`;

	listData.innerHTML += results;

	// listData.appendChild(listItem);

});