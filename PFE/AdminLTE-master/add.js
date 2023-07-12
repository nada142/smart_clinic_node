
function add() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var mail = document.getElementById("email").value;
  if (mail.match(mailformat)) {
        if (document.getElementById("email").value || document.getElementById("username").value)
        {
      var msg = document.getElementById("msg").innerHTML;
      var success = "Mot de passe fort.";
      if (msg.match(success)) {
        if (
          document.getElementById("password").value ==
          document.getElementById("rpassword").value
        ) {
          // Post a user
              var url = "http://127.0.0.1:3000/admins";
              var data = {};
              // récupération des données dans la variable data .
              data.username = document.getElementById("username").value;
              data.email = document.getElementById("email").value;
              data.password = document.getElementById("password").value;
              data.arch = "0";

  
          var json = JSON.stringify(data);
          var xhr = new XMLHttpRequest(); // definir une request de connection standard js
          xhr.open("POST", url, true); // choisir la méthode post comme méthode d'accès au serveur pour avoir la possibilité d'envoyer les données au serveur .
          xhr.setRequestHeader(
            "Content-type",
            "application/json; charset=utf-8"
          );
          xhr.onload = function () {
            var admins = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
              console.table(admins);
                  alert("Admin Added");
                  location.replace("listAdmin.html");
            } else {
              alert(admins.message);
              console.table(admins);
            }
          };
          xhr.send(json);
        } else {
          alert("Confirm password");
        }
      } else {
        alert("incorrect password");
      }
        } else {
          alert("Veuillez remplir tous les champs");
        }
  } else {
    alert(" incorrect Email ");
  }
}
function adddoc() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mail = document.getElementById("email").value;
    if (mail.match(mailformat)) {
          if (document.getElementById("cin").value || document.getElementById("passport").value)
          {
        var msg = document.getElementById("msg").innerHTML;
        var success = "Mot de passe fort.";
        if (msg.match(success)) {
          if (
            document.getElementById("password").value ==
            document.getElementById("rpassword").value
          ) {
            // Post a user
                var url = "http://127.0.0.1:3000/doctors";
                var data = {};
                // récupération des données dans la variable data .
                data.name = document.getElementById("name").value;
                data.birthdate = document.getElementById("birthdate").value;
                data.gender = document.getElementById("gender").value;
                data.status = document.getElementById("status").value;
                data.country = document.getElementById("country").value;
                data.city = document.getElementById("city").value;
                data.phone = document.getElementById("phone").value;
                data.bloodtype = document.getElementById("bloodtype").value;
                data.cin = document.getElementById("cin").value;
                data.specialty = document.getElementById("specialty").value;
                data.exp = document.getElementById("exp").value;
                data.email = document.getElementById("email").value;
                data.password = document.getElementById("password").value;
                data.arch = "0";

    
            var json = JSON.stringify(data);
            var xhr = new XMLHttpRequest(); // definir une request de connection standard js
            xhr.open("POST", url, true); // choisir la méthode post comme méthode d'accès au serveur pour avoir la possibilité d'envoyer les données au serveur .
            xhr.setRequestHeader(
              "Content-type",
              "application/json; charset=utf-8"
            );
            xhr.onload = function () {
              var doctors = JSON.parse(xhr.responseText);
              if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(doctors);
                    alert("Doctor Added");
                    location.replace("listDoc.html");
              } else {
                alert(doctors.message);
                console.table(doctors);
              }
            };
            xhr.send(json);
          } else {
            alert("Confirm password");
          }
        } else {
          alert("incorrect password");
        }
          } else {
            alert("Veuillez remplir tous les champs");
          }
    } else {
      alert(" incorrect Email ");
    }
    }
    function addsec() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var mail = document.getElementById("email").value;
        if (mail.match(mailformat)) {
              if (document.getElementById("cin").value || document.getElementById("passport").value)
              {
            var msg = document.getElementById("msg").innerHTML;
            var success = "Mot de passe fort.";
            if (msg.match(success)) {
              if (
                document.getElementById("password").value ==
                document.getElementById("rpassword").value
              ) {
                // Post a user
                    var url = "http://127.0.0.1:3000/secretarys";
                    var data = {};
                    // récupération des données dans la variable data .
                    data.name = document.getElementById("name").value;
                    data.birthdate = document.getElementById("birthdate").value;
                    data.gender = document.getElementById("gender").value;
                    data.status = document.getElementById("status").value;
                    data.country = document.getElementById("country").value;
                    data.city = document.getElementById("city").value;
                    data.phone = document.getElementById("phone").value;
                    data.bloodtype = document.getElementById("bloodtype").value;
                    data.cin = document.getElementById("cin").value;
                    data.exp = document.getElementById("exp").value;
                    data.email = document.getElementById("email").value;
                    data.password = document.getElementById("password").value;
                    data.arch = "0";

        
                var json = JSON.stringify(data);
                var xhr = new XMLHttpRequest(); // definir une request de connection standard js
                xhr.open("POST", url, true); // choisir la méthode post comme méthode d'accès au serveur pour avoir la possibilité d'envoyer les données au serveur .
                xhr.setRequestHeader(
                  "Content-type",
                  "application/json; charset=utf-8"
                );
                xhr.onload = function () {
                  var secretarys = JSON.parse(xhr.responseText);
                  if (xhr.readyState == 4 && xhr.status == "200") {
                    console.table(secretarys);
                        alert("Secretary Added");
                        location.replace("listSec.html");
                  } else {
                    alert(secretarys.message);
                    console.table(secretarys);
                  }
                };
                xhr.send(json);
              } else {
                alert("Confirm password");
              }
            } else {
              alert("incorrect password");
            }
              } else {
                alert("Veuillez remplir tous les champs");
              }
        } else {
          alert(" incorrect Email ");
        }
        }