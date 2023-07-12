
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
  }
  // Send request
  request.send()

  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://127.0.0.1:3000/doctors', true)
  request.onload = function()
  {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      var table = document.getElementById("listDoc");
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
          var cell8 = row.insertCell(7);
          var cell9 = row.insertCell(8);

          cell1.innerHTML = j;
          cell2.innerHTML = i.name;
          cell3.innerHTML = i.specialty;
          cell4.innerHTML = i.phone;
          cell5.innerHTML = i.email;
          cell6.innerHTML = i.password;
          cell7.innerHTML = '<a href="viewdoc.html?id='+i._id+'">view</a>';
          cell8.innerHTML = '<a href="updatedoc.html?id='+i._id+'">update</a>';
          cell9.innerHTML = '<a href="archdoc.html?id='+i._id+'">Archive</a>';
          j = j + 1 ;}
      })
  }
  // Send request
  request.send()


  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://127.0.0.1:3000/secretarys', true)
  request.onload = function()
  {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      var table = document.getElementById("listSec");
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
          var cell8 = row.insertCell(7);



          cell1.innerHTML = j;
          cell2.innerHTML = i.name;
          cell3.innerHTML = i.phone;
          cell4.innerHTML = i.email;
          cell5.innerHTML = i.password;
          cell6.innerHTML = '<a href="viewsec.html?id='+i._id+'">view</a>';
          cell7.innerHTML = '<a href="updatesec.html?id='+i._id+'">Update</a>';
          cell8.innerHTML = '<a href="archsec.html?id='+i._id+'">Archive</a>';
          j = j + 1 ;
        }
      })
  }
  // Send request
  request.send()

