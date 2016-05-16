$.fn.validator = function(){

jQuery(document).ready(function() {

$button = $("button");

var clickConfirmed = function(e) {
	e.preventDefault();
$('#myForm').find('input').each( function(){

var inputValidationRule = $(this).attr('data-validate');
var inputValidationSubRule = $(this).attr('data-validate');

switch (inputValidationRule) {
    case 'charcount':
       // var minLength = $inputValidationRule.
        console.log(inputValidationRule.val);
        break;
    case 'numeric':
        console.log('numeric');

        break;
    case 'wordcount':
        console.log('wordcount');
        break;
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
//calls $.fn.validator
$('#myForm').validator();
