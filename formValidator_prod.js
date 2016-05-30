(function ( $ ) {
$.fn.validator = function(){
jQuery(document).ready(function() {
$button = $("button");
var clickConfirmed = function(e) {
e.preventDefault();
$('#myForm').find('input').each( function(){
var dataValidationType = $(this).attr('data-validate');
var minLength = $(this).attr('minLength');
var maxLength = $(this).attr('data-validate-max');
var required = $(this).attr('data-requirement');
var fieldContent = $(this).val();
var filter = /^[A-Za-z/]{2,}$/;
var formPassCriteria = true;
     if(required == 'required') {
				 switch (dataValidationType) {
				    case 'charcount':

			

//if submission meets criteria > customize .alert and
 
			 if (!filter.test(fieldContent)) {
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
				     break;
				    case 'numeric':
				       console.log(dataValidationType);
				        break;
				    case 'wordcount':
				        console.log(dataValidationType);
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


