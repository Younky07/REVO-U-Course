const submitBtn = document.getElementById("submit");
const greeting = document.getElementById("greeting");

submitBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const name = nameInput.value;
    greeting.textContent = `Hi, ${name}! Welcome to my website.`;
    nameInput.value = "";

    setTimeout(function() {
        // Mengalihkan pengguna ke halaman baru
        window.location.href = 'index.html';
    }, 3000);
});
