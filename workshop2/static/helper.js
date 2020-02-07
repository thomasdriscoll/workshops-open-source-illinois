function get_all() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var major = document.getElementById("major").value;
  var lang = document.getElementById("favlang").value;
  $.ajax({
    // send data to scraping.py
    url: '/getall',
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
      document.getElementById("output").value = "Sorry, something went wrong in your search :/ Please make sure your input is valid";
    }
  });
}

function get_one() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var major = document.getElementById("major").value;
  var lang = document.getElementById("favlang").value;
  $.ajax({
    // send data to scraping.py
    url: '/getone',
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
      document.getElementById("output").value = "Sorry, something went wrong in your search :/ Please make sure your input is valid";
    }
  });
}


function get_major() {
  var major = document.getElementById("major").value;
  $.ajax({
    // send data to scraping.py
    url: '/getmajor',
    type: 'GET',
    data: {
      major: major,
    },
    dataType: "json",
    success: function(response){
      // Put values up on screen
      document.getElementById("output").value = Object.entries(response);
      var values = Object.values(response); var keys = Object.keys(response);
    },
    error: function(response){
      document.getElementById("output").value = "Sorry, something went wrong in your search :/ Please make sure your input is valid";
    }
  });
}

function get_lang() {
  var lang = document.getElementById("favlang").value;
  $.ajax({
    // send data to scraping.py
    url: '/getlang',
    type: 'GET',
    data: {
      lang: lang
    },
    dataType: "json",
    success: function(response){
      // Put values up on screen
      document.getElementById("output").value = Object.entries(response);
      var values = Object.values(response); var keys = Object.keys(response);
    },
    error: function(response){
      document.getElementById("output").value = "Sorry, something went wrong in your search :/ Please make sure your input is valid";
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
      document.getElementById("output").value = "Sorry, something went wrong in your search :/ Please make sure your input is valid";
    }
  });
}

function update_major() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var major = document.getElementById("major").value;
  $.ajax({
    // send data to scraping.py
    url: '/update_major',
    type: 'PUT',
    data: {
      firstname: firstname,
      lastname: lastname,
      major: major
    },
    dataType: "json",
    success: function(response){
      // Put values up on screen
      document.getElementById("output").value = Object.entries(response);
      var values = Object.values(response); var keys = Object.keys(response);
    },
    error: function(response){
      document.getElementById("output").value = "Sorry, something went wrong in your search :/ Please make sure your input is valid";
    }
  });
}

function update_lang(){
  document.getElementById("output").value = "Finish me!";

}
function del(){
  /* Do this if you are interested! */
  document.getElementById("output").value = "Finish me!";
}
