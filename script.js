function pobierzDane() {
  const name = document.getElementById("imie").value;
  const surname = document.getElementById("nazwisko").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("usluga").value;
  return { name, surname, email, service };
}

function wyslij({ name, surname, email, service }) {
  document.getElementById("name").innerHTML = name + " " + surname;
  document.getElementById("mail").innerHTML = email;
  document.getElementById("service").innerHTML = service;
}
