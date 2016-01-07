$(document).ready(function(){
$("#logIn").click(function(){
//var name = $("#name").val();
var email = $("#email").val();

var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var password = $("#password").val();

//var contact = $("#contact").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'email='+ email + '&password='+ password;
if(email==''||password=='')
{
alert("Please Fill All Fields");
}else if(!filter.test(email)){
	
	alert("Not a valid email");
	
}
else
{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "http://45.55.245.79:81/projects/expensemanager/phonegapapi/api/test/login_view",
data: dataString,
cache: false,
beforeSend: function(){
         $.blockUI({ css: { 
            border: 'none',
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .5, 
            color: '#fff' 
        } });
    },
    complete: function(){
        setTimeout($.unblockUI, 500);
    },
success: function(result){
var results=JSON.stringify(result);
var res = JSON.parse(result);

console.log(res);
//alert(results);
var status=res.status;

if(status=="success"){
window.location.href="home.html";
}else{
	alert("Invalid Credentials");
}
}
});
}
return false;
});
});

// SIGN UP

$(document).ready(function(){
$("#signUp").click(function(){
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword =$("#cnfrm_password").val();
 var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
//var contact = $("#contact").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name='+name+'&email='+ email + '&password='+ password;
if(name==''||email==''||password=='')
{
alert("Please Fill All Fields");
}else if(!filter.test(email)){
	
	alert("Not a valid email");
	
}
else if(password!=cpassword)
{
alert("Password mismatch!!!");
	
}
else{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "http://45.55.245.79:81/projects/expensemanager/phonegapapi/api/test/register",
data: dataString,
cache: false,
beforeSend: function(){
         $.blockUI({ css: { 
            border: 'none',
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .5, 
            color: '#fff' 
        } });
    },
    complete: function(){
        setTimeout($.unblockUI, 500);
    },
success: function(result){
	alert(result);
	location.href="home.html";

}
});
}
return false;
});
});



//Add Expense
$(document).ready(function(){
$("#add").click(function(){
var date = $("#datepicker").val();
var item = $("#item").val();
var price = $("#price").val();
var amount = $("#amount").val();

var dataString = 'date='+date+'&item='+ item + '&price='+ price;
if(date=''||item==''||price=='')
{
   alert("Please Fill All Fields");

}else{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "http://45.55.245.79:81/projects/expensemanager/phonegapapi/api/test/expense_save",
data: dataString,
cache: false,
beforeSend: function(){
         $.blockUI({ css: { 
            border: 'none',
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .5, 
            color: '#fff' 
        } });
    },
    complete: function(){
        setTimeout($.unblockUI, 500);
    },
success: function(result){
	alert(result);
	location.href="home.html";

}
});
}
return false;
});
});








//Budget
$(document).ready(function(){
$("#add_budget").click(function(){
var date = $("#date").val();
var amount = $("#amount").val();
var remark = $("#remark").val();
//var contact = $("#contact").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'date='+date+'&amount='+amount+'&remark='+ remark;
if(date==''||amount==''||remark=='')
{
alert("Please Fill All Fields");
}
else {
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "http://45.55.245.79:81/projects/expensemanager/phonegapapi/api/test/fund_save",
data: dataString,
cache: false,
beforeSend: function(){
         $.blockUI({ css: { 
            border: 'none',
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .5, 
            color: '#fff' 
        } });
    },
    complete: function(){
        setTimeout($.unblockUI, 500);
    },
success: function(result){
	alert(result);
	location.href="home.html";

}
});
}
return false;
});
});

