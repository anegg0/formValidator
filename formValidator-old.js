$.fn.validator = function(){
jQuery(document).ready(function() {

$button = $("button");

var clickConfirmed = function(e) {
	e.preventDefault();
			var formPassCriteria = true;

			var checkFirstName = function () {
			var $firstName = $("#firstname").val();
			var filter = /^[A-Za-z/]{2,}$/;

//if submission meets criteria > customize .alert and
 
			 if (!filter.test($firstName)) {
			 	   window.setTimeout(function() {
      $(".alert").fadeTo(1500, 0).slideUp(500, function(){
        $(this).remove(); 
      });
    }, 4000);
			 var alert = '<div class="alert alert-warning alert-dismissible"></a>My friend, your first name should be AT LEAST 2 characters long...No?</div>';
			 	$('#form-group').prepend(alert);
			 	formPassCriteria = false;
				return false;
				}else{
				formPassCriteria = true;
				}
				console.log(formPassCriteria);
				};
	checkFirstName();

			var checkLastName = function () {
			var $lastName = $("#lastname").val();
			var filter = /^[A-Za-z/]{2,}$/;
			 if (!filter.test($lastName)) {
			 	   window.setTimeout(function() {
      $(".alert").fadeTo(1500, 0).slideUp(500, function(){
        $(this).remove(); 
      });
    }, 4000);
			 var alert = '<div class="alert alert-warning alert-dismissible"></a>My friend, your last name should be AT LEAST 2 characters long...No?</div>';
			 	$('#form-group').prepend(alert);
				formPassCriteria = false;
				return false;
				}
				};
	checkLastName();

			var checkStreet = function () {
			var $street = $("#street").val();
			var filter = /^.+\s.+$/;
			 if (!filter.test($street)) {
			 	   window.setTimeout(function() {
      $(".alert").fadeTo(1500, 0).slideUp(500, function(){
        $(this).remove(); 
      });
    }, 4000);
			 var alert = '<div class="alert alert-warning alert-dismissible"></a>My friend, your Street should be AT LEAST 2 words long, like number and...Street, maybe?</div>';
			 	$('#form-group').prepend(alert);
			 	formPassCriteria = false;
				return false;
				}
				};
	checkStreet();

			var checkZip = function () {
			var $zip = $("#zip").val();
			var filter = /([a-zA-Z-0-9]{2,})$/;
			 if (!filter.test($zip)) {
			 	   window.setTimeout(function() {
      $(".alert").fadeTo(1500, 0).slideUp(500, function(){
        $(this).remove(); 
      });
    }, 4000);
			 var alert = '<div class="alert alert-warning alert-dismissible"></a>My friend, your Zip code should be AT LEAST 2 characters long.</div>';
			 	$('#form-group').prepend(alert);
				formPassCriteria = false;
				return false;
				}
				};
	checkZip();

			var checkCity = function () {
			var $city = $("#city").val();
			var filter = /^[A-Za-z/]{2,}$/;
			 if (!filter.test($city)) {
			 	   window.setTimeout(function() {
      $(".alert").fadeTo(1500, 0).slideUp(500, function(){
        $(this).remove(); 
      });
    }, 4000);
			 var alert = '<div class="alert alert-warning alert-dismissible"></a>My friend, your city should be AT LEAST 2 characters long.</div>';
			 	$('#form-group').prepend(alert);
				formPassCriteria = false;
				return false;
				}
				};
	checkCity();

// tests to make sure formPassCriteria gets modified on the way

console.log('your thing evaluates to:' + formPassCriteria);

if (formPassCriteria === true) {


	$('#myForm').submit(e);
	e.preventDefault();
    
			window.setTimeout(function() {
      $(".alert").fadeTo(1500, 0).slideUp(500, function(){
        $(this).remove(); 
      });
    }, 6000);
			 var alert = '<div class="alert alert-warning alert-dismissible"></a>Your form has been submitted, tap yourself in the back, that was a good job.</div>';
			 	$('#form-group').prepend(alert);

} else {
// in-house feedback to signify that, well...something went wrong
console.log('ouille!');
	}
};
$button.bind('click', clickConfirmed);

});
};
$('#myForm').validator();