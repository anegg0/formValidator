(function($) {
    $.fn.validator = function() {
        jQuery(document).ready(function() {
            $button = $("button");
            var clickConfirmed = function(e) {
                e.preventDefault(e);

                var validator = function(element) {
                    //console.log("ddddd");
                    e.preventDefault(e);
                    // validateElement(e);
                    var filterBuilder = function() {
                        $('#myForm').find('input').each(function() {
                                var dataValidationType = $(this).attr('data-validate');
                                var minLength = $(this).attr('minLength');
                                if (minLength === undefined) {
                                    minLength = "";
                                }
                                var maxLength = $(this).data('validate-max');
                                if (maxLength === undefined) {
                                    maxLength = "";
                                }
                                var required = $(this).attr('data-requirement');
                                var fieldContent = $(this).val();
                                var formPassCriteria = true;
                                if (required == 'required') {
                                    switch (dataValidationType) {
                                        case 'charcount':
                                            var filter = new RegExp("[\\w]{" + minLength + "," + maxLength + "}");
                                            console.log(filter);
                                            break;
                                        case 'wordcount':
                                            filter = new RegExp("^(?:\\b\\w+\\b[\\s\\r\\n]*){" + minLength + "," + maxLength + "}$");
                                            break;
                                        case 'numeric':
                                            filter = new RegExp("[\\d]{" + minLength + "," + maxLength + "}");
                                            break;

                                    }
                                } else {
                                    return;
                                }

                            }
                            //closes $('#myform').find('data-validate').each(
                        );

                        // closes filterBuilder();
                    }();
                    //     var failsTestWarning = function(maxLength, minLength, dataValidationType) {

                    //         var alert = '<div class="alert alert-warning alert-dismissible"></a>My friend, your ' + fieldName + " " + "should be" + " " + warningMinLength + " " + warningMaxLength + '.</div>';
                    //         var fieldName = $(this).attr('name');
                    //         var warningMinLength = "AT LEAST" + " " + minLength + " " + dataName;
                    //         var dataName = "";
                    //         if (minLength === undefined) {
                    //             warningMinLength = "";
                    //             minLength = "";
                    //         }
                    //         var warningMaxLength = "and no longer than " + maxLength + " " + dataName;
                    //         if (maxLength === undefined) {
                    //             warningMaxLength = "";
                    //             maxLength = "";
                    //         }
                    //         if (dataValidationType == 'wordcount') {
                    //             dataName = "words";
                    //         } else if (dataValidationType == 'charcount') {
                    //             dataName = "characters";
                    //         } else {
                    //             dataName = "numbers";
                    //         }
                    //         window.setTimeout(function() {
                    //             $(".alert").fadeTo(1500, 0).slideUp(500, function() {
                    //                 $(this).remove();
                    //             });
                    //         }, 4000);
                    //         $('#form-group').prepend(alert);
                    //     };

                    //     //closes failTestWarning
                    // };
                    var filterConditional = function(filter, fieldContent,
                        failsTestWarning, alert) {
                        if (!filter.test(fieldContent)) {
                            failsTestWarning(alert);
                            formPassCriteria = false;
                            return false;
                        } else {
                            formPassCriteria = true;
                        }
                        console.log(formPassCriteria);
                    }();
                    // var submitsFormIfValidated = function() {
                    // };

                    //closes "validator" function
                }();
                //closes var clickConfirmed = function(e) {

            };
            $button.bind('click', clickConfirmed);
            //closes jQuery(document).ready(function() {
        });
        //closes $.fn.validator = function(){
    };

    //closes (function($) {
}(jQuery));
//calls $.fn.validator
$('#myForm').validator();