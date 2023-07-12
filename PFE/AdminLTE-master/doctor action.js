var url_string = window.location.href 
var url = new URL(url_string); 
var c = url.searchParams.get("id"); 
console.log(c);

// Post a user
var url3 = "http://127.0.0.1:3000/doctors/" + c ;
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", url3, true);

xhr3.onload = function () {
    var doctors = JSON.parse(xhr3.responseText);
    if (xhr3.readyState == 4 && xhr3.status == "200") {
        document.getElementById("name").innerHTML = `<h1>Name : ` + doctors.name + `</h1>`;
        document.getElementById("specialty").innerHTML = `<h1>Specialty : ` + doctors.specialty + `</h2>`;
        document.getElementById("phone").innerHTML = `<h1>Phone : ` + doctors.phone + `</h2>`;
        document.getElementById("email").innerHTML = `<h2>Email : ` + doctors.email + `</h2>`;
        document.getElementById("password").innerHTML = `<h3>Password : ` + doctors.password + `</h2>`;
    } else {

        console.log("error");
    }
}

xhr3.send(null);