
//**********************list admin */
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://127.0.0.1:3000/admins', true)
  request.onload = function()
  {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      var table = document.getElementById("listAdmin");
      console.log(data);
      var j = 1;
      data.forEach(i => {
          if(i.arch == "0"){
          var row = table.insertRow(-1);//<tr>
          var cell1 = row.insertCell(0);//<th> ou <td>
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);


          cell1.innerHTML = j;
          cell2.innerHTML = i.username;
          cell3.innerHTML = i.email;
          cell4.innerHTML = i.password;
          cell5.innerHTML = '<a href="viewadmin.html?id='+i._id+'">View</a>';
          cell6.innerHTML = '<a href="updateadmin.html?id='+i._id+'">Update</a>';
          cell7.innerHTML = '<a href="archadmin.html?id='+i._id+'">Archive</a>';
          j = j + 1 ;}
      })
  
  // Send request
  request.send()
  }
//***********view admin */
function view(){
var url_string = window.location.href 
var url = new URL(url_string); 
var c = url.searchParams.get("id"); 
console.log(c);

// Post a user
var url3 = "http://127.0.0.1:3000/admins/" + c ;
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", url3, true);

xhr3.onload = function () {
    var admins = JSON.parse(xhr3.responseText);
    if (xhr3.readyState == 4 && xhr3.status == "200") {
        document.getElementById("username").innerHTML = `<h1>Username : ` + admins.username + `</h1>`;
        document.getElementById("email").innerHTML = `<h2>Email : ` + admins.email + `</h2>`;
        document.getElementById("password").innerHTML = `<h3>Password : ` + admins.password + `</h3>`;
    } else {

        console.log("error");
    }
}

xhr3.send(null);

}


//****************update admin */
var url_string = window.location.href // url_string =file:///C:/Users/GMI/Desktop/PFE/AdminLTE-master/updateadmin.html?id=622f5ab629af451f488f2198
var url = new URL(url_string); // url = file:///C:/Users/GMI/Desktop/PFE/AdminLTE-master/updateadmin.html?id=622f5ab629af451f488f2198
var c = url.searchParams.get("id"); //c =622f5ab629af451f488f2198
console.log(c);

// Post a user
var url3 = "http://127.0.0.1:3000/admins/" + c ;
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", url3, true);

xhr3.onload = function () {
    var admins = JSON.parse(xhr3.responseText);
    if (xhr3.readyState == 4 && xhr3.status == "200") {
        document.getElementById("username").value = admins.username;
        document.getElementById("email").value = admins.email;
        document.getElementById("password").value = admins.password;
    } else {

        console.log("error");
    }
}

xhr3.send(null);

function update(){
    var url_string = window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("id");
        
            var url = "http://127.0.0.1:3000/admins/"+c;
                            
            var data = {};
            data.username   = document.getElementById("username").value;
            data.email      = document.getElementById("email").value;
            data.password   = document.getElementById("password").value;
            data.arch = "0";
                                                    
            var json = JSON.stringify(data);
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", url, true);
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhr.onload = function () {
                var admins = JSON.parse(xhr.responseText);
                if (xhr.readyState == 4 && xhr.status == "200") {
                    console.table(admins);
                    alert("Admins Updated!");
                    location.replace("listAdmin.html");
                } else {
                    console.error(admins);
                    location.replace("listAdmin.html");
                }
            }
            xhr.send(json);
        
}



