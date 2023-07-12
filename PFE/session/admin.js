function ListeAdmin(){  
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://127.0.0.1:3000/admins', true)
  request.onload = function()
  {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      var table = document.getElementById("listadmin");
      console.log(data);
      var j = 1;
      data.forEach(i => {
          
          var row = table.insertRow(-1);//<tr>
          var cell1 = row.insertCell(0);//<th> ou <td>
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);

          cell1.innerHTML = j;
          cell2.innerHTML = i.username;
          cell3.innerHTML = i.status;
          cell4.innerHTML = ` <a href="AffichAdmin.html?id=` + i._id+ ` "><i class="fas fa-eye"></i></a> `;
          cell5.innerHTML = ` <a href="ModifAdmin.html?id=` + i._id+ ` "><i class="fas fa-cogs" style="color:yellowgreen;"></i></a> `;
          cell6.innerHTML = ` <a href="supprimeradmin.html?id=` + i._id+ ` "><i class="fas fa-trash-alt" style="color:red;"></i></a> `;
          j = j + 1 ;
      })
  }
  // Send request
  request.send();
};

  function ajouterAdmin(){
    var url = "http://127.0.0.1:3000/admins";
    var data = {};
    data.username = document.getElementById("username").value;
    data.email = document.getElementById("email").value;
    data.status = "0";
    data.password = document.getElementById("password").value;
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var admins= JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(admins);
            alert("Admin Added");
            location.replace("listeAdmins.html");
        } else {
            alert(admins.message);
            console.table(admins);
        }
    }
    xhr.send(json);
};



var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("id");
console.log(c);
var url3 = "http://127.0.0.1:3000/admins/" + c ;
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", url3, true);
xhr3.onload = function () {
var admins = JSON.parse(xhr3.responseText);
if (xhr3.readyState == 4 && xhr3.status == "200") {
document.getElementById("username").value = admins.username;
document.getElementById("email").value = admins.email;
document.getElementById("status").value = admins.status;
document.getElementById("password").value = admins.password;

} else {
console.log("error");
}
}
xhr3.send(null);
function modifAdmin(){
var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("id");
var url = "http://127.0.0.1:3000/admins/"+c;
var data = {};
data.username = document.getElementById("username").value;
data.email = document.getElementById("email").value;
data.status = document.getElementById("status").value;
data.password = document.getElementById("password").value;

var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("PUT", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
var users = JSON.parse(xhr.responseText);
if (xhr.readyState == 4 && xhr.status == "200") {
alert("Admin à jour!");
location.replace("listeAdmins.html");
} else {
console.error(admins);
location.replace("listeAdmins.html");
}
}
xhr.send(json);
};


function AfficeAdmin(){
var url_string = window.location.href
  var url = new URL(url_string);
  var c = url.searchParams.get("id");
  console.log(c);
  var url3 = "http://127.0.0.1:3000/admins/" + c ;
  var xhr3 = new XMLHttpRequest();
  xhr3.open("GET", url3, true);
  xhr3.onload = function () {
  var admins = JSON.parse(xhr3.responseText);
  if (xhr3.readyState == 4 && xhr3.status == "200") {
  document.getElementById("username").innerHTML = 'UserName : '+admins.username;
  document.getElementById("email").innerHTML = 'Emil : '+admins.email;
  document.getElementById("status").innerHTML = 'Status : '+admins.status;
  document.getElementById("password").innerHTML = 'Password : '+admins.password;
  } else {
  console.log("error");
  }
  }
  xhr3.send(null);};

  function myFunction() 
  {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("listadmin");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) 
    {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) 
      {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) 
        {
          tr[i].style.display = "";
        } else 
        {
          tr[i].style.display = "none";
        }
      }       
    }
  };