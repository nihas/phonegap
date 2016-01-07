  // Load the SDK asynchronously
  (function(thisdocument, scriptelement, id) {
    var js, fjs = thisdocument.getElementsByTagName(scriptelement)[0];
    if (thisdocument.getElementById(id)) return;
    
    js = thisdocument.createElement(scriptelement); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js"; //you can use 
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
    
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1060961320633175', //Your APP ID
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use version 2.1
  });

  // These three cases are handled in the callback function.
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };
    
  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      _i();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      //document.getElementById('status').innerHTML = 'Please log ' +
       // 'into this app.';
	   alert("Please login ")
    }
	
  }  
  
  function _login() {
    FB.login(function(response) {
       // handle the response
       if(response.status==='connected') {
		   var uid = response.authResponse.userID; 
		   var accessToken = response.authResponse.accessToken;
        _i();
       }
     }, {scope: 'public_profile,email'});
 }
 
 function _i(){
     FB.api('/me', function(response) {
        /*document.getElementById("inputFname").value = response.first_name;
        document.getElementById("inputLname").value = response.last_name;
        document.getElementById("inputEmail").value = response.email;*/
		alert (response.name);
		alert (response.email);
		//alert (response.email);
		location.href="home.html";
    });
 }

function login() { 
window.plugins.googleplus.login( 
{},
function (obj) { 
document.querySelector("#image").src = obj.imageUrl;
document.querySelector("#image").style.visibility = 'visible'; 
document.querySelector("#feedback").innerHTML = "Hi, " + obj.displayName + ", " + obj.email; 
},
function (msg) { 
document.querySelector("#feedback").innerHTML = "error: " + msg;
} 
);
}