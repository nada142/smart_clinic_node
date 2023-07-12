<script>
      var request = new XMLHttpRequest();

      // Open a new connection, using the GET request on the URL endpoint
      request.open("GET", "http://127.0.0.1:3000/admins", true);

      request.onload = function () {
        // Begin accessing JSON data here

        var data = JSON.parse(this.response);

        var x = document.getElementById("admins");

        data.forEach((i) => {
          var c = document.createElement("option");
          c.text = i.username;
          c.value = i.username;
          x.options.add(c, 1);
          var cc = document.createElement("hr");
          x.appendChild(cc);
        });
      };

      // Send request
      request.send();
    </script>
