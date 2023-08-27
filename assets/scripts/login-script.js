/* Comment : Membuat variabel untuk setiap element View. */
const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");

/* Comment : Membuat variabel untuk menyimpan informasi email dan password. */
const expectedEmail = "admin@dicoding.com";
const expectedPassword = "superpassword";

/* Comment : menambahkan aksi klik pada Button. */
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  /* Comment : Mendapatkan nilai dari masing-masing input (email dan password) ketika ditekan. */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan.  */
  if (email == expectedEmail && password == expectedPassword) {
    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {  
    /* Comment : namun jika tidak sesuasi maka akan meenamplkan informasi bahwa input salah. */
    showPopUp();
  }
});
