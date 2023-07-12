
function add(){
    var url = "http://127.0.0.1:3000/admins";
    var data = {};
    data.username = document.getElementById("username").value;
    data.email = document.getElementById("email").value;
    data.password = document.getElementById("password").value;
    data.arch = "0";
    validateForm();

    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var admins= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(admins);
            alert("Admin Added");
            location.replace("listAdmin.html");
        } else {
            alert(admins.message);
            console.table(admins);
        }
    }
    xhr.send(json);
}
function adddoc(){
    var url = "http://127.0.0.1:3000/doctors";
    var data = {};
    data.name = document.getElementById("name").value;
    data.specialty = document.getElementById("specialty").value;
    data.phone = document.getElementById("phone").value;
    data.email = document.getElementById("email").value;
    data.password = document.getElementById("password").value;
    data.arch = "0";

    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var doctors= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(doctors);
            alert("Doctor Added");
            location.replace("listDoc.html");
        } else {
            alert(doctors.message);
            console.table(doctors);
        }
    }
    xhr.send(json);
}
function addsec(){
    var url = "http://127.0.0.1:3000/secretarys";
    var data = {};
    data.name = document.getElementById("name").value;
    data.phone = document.getElementById("phone").value;
    data.email = document.getElementById("email").value;
    data.password = document.getElementById("password").value;
    data.arch = "0";

    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var secretarys= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(secretarys);
            alert("Secretary Added");
            location.replace("listSec.html");
        } else {
            alert(secretarys.message);
            console.table(secretarys);
        }
    }
    xhr.send(json);
}