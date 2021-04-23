
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

$(document).ready(function(){
    $('.sidenav').sidenav();
  });
 

  var app= new function(){
  this.validate=function(){
      var user = $('#name').val();
      var password = $('#password').val();
      var loginlist = {"username":"faycal", "password":"1234"}
      console.log(user,password)
      var logged = false;
              if(user == loginlist.username && password == loginlist.password){
                  logged = true;
          }
          if(logged){
          document.location.replace('index.html')}

          else
          alert("User login fail");               

      }

      $('#soumettre').click(function (e) {
        e.preventDefault();
        app.validate();
    })
    }