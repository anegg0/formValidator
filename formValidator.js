(function ( $ ) {
$.fn.validator = function(){
jQuery(document).ready(function() {
$button = $("button");
var clickConfirmed = function(e) {
e.preventDefault();
$('#myForm').find('input').each( function(){
var dataValidationType = $(this).attr('data-validate');
var warningDataType = "";
if (dataValidationType == 'wordcount'){
	warningDataType = "words";
} else {
	warningDataType = "characters";
}
var minLength = $(this).attr('minLength');
var warningMinLength = "AT LEAST"+" "+minLength+" "+warningDataType+" "+'long';
if (minLength === undefined) {minLength = ""; warningMinLength = "";}
var maxLength = $(this).attr('data-validate-max');
var warningMaxLength = "and no longer than "+maxLength+" "+warningDataType;
if (maxLength === undefined) {maxLength = ""; warningMaxLength = "";}
var required = $(this).attr('data-requirement');
var fieldContent = $(this).val();
var fieldName = $(this).attr('name');
var alert = '<div class="alert alert-warning alert-dismissible"></a>My friend, your '+ fieldName+" "+"should be"+" "+" "+ warningMinLength+" "+ warningMaxLength+'.</div>';
var failsTestWarning = function(alert){window.setTimeout(function() {
      $(".alert").fadeTo(1500, 0).slideUp(500, function(){
        $(this).remove(); 
      });
    }, 4000);
			 	$('#form-group').prepend(alert);
			 	};
var formPassCriteria = true;
if(required == 'required') {
				 switch (dataValidationType) {			 	
				   case 'charcount':
				   var filter = new RegExp("[\\w]{"+minLength+","+maxLength+"}");
			 if (!filter.test(fieldContent)) {
			 	   failsTestWarning(alert);
			 	   formPassCriteria = false;
				return false;
				}else{
				formPassCriteria = true;
				}
				     break;
				    case 'numeric':
				    //warningFieldType = "numbers only, ";
				      filter = new RegExp("[\\d]{"+minLength+","+maxLength+"}");
			 if (!filter.test(fieldContent)) {
			 	failsTestWarning(alert);
			 	formPassCriteria = false;
				return false;
				}else{
				formPassCriteria = true;
				}
				        break;
				    case 'wordcount':
				       filter = new RegExp("^(?:\\b\\w+\\b[\\s\\r\\n]*){"+minLength+","+maxLength+"}$");
				       if (!filter.test(fieldContent)) {
			 	  failsTestWarning(alert);
			 	  formPassCriteria = false;
				return false;
				}else{
				formPassCriteria = true;
				}
				        break;
				} 	
	 }else{
	 	return;
	 }
}
//closes $('#myform').find('data-validate').each(
);
// closes var clickConfirmed = function(e) {
};
$button.bind('click', clickConfirmed);
// closes jQuery(document).ready(function() {
}
);
//closes $.fn.validator = function(){ 
};
//closes immediately invoked jquery function
}( jQuery ));
//calls $.fn.validator
$('#myForm').validator();


