function search() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var major = document.getElementById("major").value;
  var lang = document.getElementById("favlang").value;
  $.ajax({
    // send data to scraping.py
    url: '/get',
    type: 'GET',
    data: {
      firstname: firstname,
      lastname: lastname,
      major: major,
      lang: lang
    },
    dataType: "json",
    success: function(response){
      // Put values up on screen
      document.getElementById("output").value = Object.entries(response);
      var values = Object.values(response); var keys = Object.keys(response);
    },
    error: function(response){
      document.getElementById("stock_output").value = "Sorry, something went wrong in your search :/ Please make sure your stock symbol is valid";
      document.getElementById('current_stock').value = null;
    }
  });
}

function add() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var major = document.getElementById("major").value;
  var lang = document.getElementById("favlang").value;
  $.ajax({
    // send data to scraping.py
    url: '/post',
    type: 'POST',
    data: {
      firstname: firstname,
      lastname: lastname,
      major: major,
      lang: lang
    },
    dataType: "json",
    success: function(response){
      // Put values up on screen
      document.getElementById("output").value = Object.entries(response);
      var values = Object.values(response); var keys = Object.keys(response);
    },
    error: function(response){
      document.getElementById("stock_output").value = "Sorry, something went wrong in your search :/ Please make sure your stock symbol is valid";
      document.getElementById('current_stock').value = null;
    }
  });
}

function update() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var major = document.getElementById("major").value;
  var lang = document.getElementById("favlang").value;
  $.ajax({
    // send data to scraping.py
    url: '/update',
    type: 'PUT',
    data: {
      firstname: firstname,
      lastname: lastname,
      major: major,
      lang: lang
    },
    dataType: "json",
    success: function(response){
      // Put values up on screen
      document.getElementById("output").value = Object.entries(response);
      var values = Object.values(response); var keys = Object.keys(response);
    },
    error: function(response){
      document.getElementById("stock_output").value = "Sorry, something went wrong in your search :/ Please make sure your stock symbol is valid";
      document.getElementById('current_stock').value = null;
    }
  });
}

function del(){
  /* Do this if you are interested! */
}
