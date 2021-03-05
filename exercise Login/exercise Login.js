var objPeople = [
	{ // Object #0
		username: "admin",
		password: "123"
	},
	{ // Object #1
		username: "Elihai",
		password: "6195"
	},
	{ // Object #2
		username: "Shai",
		password: "464"
	}
]

function login () {
	var usernameInput = document.getElementById("username").value;
	var passwordInput = document.getElementById("password").value;
	for (i = 0; i < objPeople.length; i++) {
		if (usernameInput == objPeople[i].username && passwordInput == objPeople[i].password) {
			document.getElementById("invalid username").innerHTML = "";
			document.getElementById("invalid password").innerHTML = "";
			var nameInput = prompt("אנא הקלד את שמך");
			alert("Hello " + nameInput + ", welcome to my website!");
		}
	}
	flag = false;
	for (i = 0; i < objPeople.length && flag == false; i++) {
		if (usernameInput == objPeople[i].username)
			flag = true;
	}
	if (flag == false) {
		document.getElementById("invalid username").style.color = "red";
		document.getElementById("invalid username").innerHTML = "שם משתמש לא תקין";
	}
	else
		document.getElementById("invalid username").innerHTML = "";
	flag = false;
	for (i = 0; i < objPeople.length && flag == false; i++) {
		if (passwordInput == objPeople[i].password)
			flag = true;
	}
	if (flag == false) {
		document.getElementById("invalid password").style.color = "red";
		document.getElementById("invalid password").innerHTML = "סיסמה לא תקינה";
	}
	else
		document.getElementById("invalid password").innerHTML = "";
}