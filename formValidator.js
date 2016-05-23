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
var formPassCriteria = true;
     if(required == 'required') {
				 switch (dataValidationType) {
				    case 'charcount':
				//apply the regular routine
						console.log('apply the regular routine');
				     break;
				    case 'numeric':
				       console.log(dataValidationType);
				        break;
				    case 'wordcount':
				        console.log(dataValidationType);
				        break;
												} 
	 }else{
	 	console.log('eh beh ta gueule');
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


