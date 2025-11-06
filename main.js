function validate() {
  // Mengambil data input dari html
  let input_username = document.getElementById("username");
  let input_email = document.getElementById("email");
  let input_password = document.getElementById("password");
  let input_age = document.getElementById("age");
  let input_male = document.getElementById("male");
  let input_female = document.getElementById("female");

  // Validasi kosong
  if(input_username.value == "" || input_password.value == "" || input_email.value == "" || input_age.value == "") {
      alert("Please input all fields");
      return false;
  }

  // Validasi length
  else if(input_username.value.length < 3) {
      alert("Username must be at least 3 characters long");
      return false;
  }

  // Validasi ending @gmail.com
  else if(!input_email.value.endsWith("@gmail.com")) {
      alert("Email must be a Gmail address");
      return false;
  }

  // Validasi password length
  else if(input_password.value.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
  }

  // Validasi umur dibawah 18
  else if(input_age.value < 18) {
      alert("You must be at least 18 years old");
      return false;
  }

  // Validasi gender
  else if(input_male.checked == false && input_female.checked == false) {
      alert("Choose a Gender");
      return false;
  }

  // Form is valid, submit it
  return true;
}

// Select the form and form elements
const form = document.getElementById('register-form');

// Add event listener to the submit button
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form inputs
  if(validate()) {
      form.submit();
  }
});

