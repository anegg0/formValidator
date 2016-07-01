(function($) {
    $.fn.validator = function() {
        jQuery(document).ready(function() {
            $button = $("button");
            var clickConfirmed = function(e) {
                e.preventDefault(e);
                var validator = function(element) {
                    e.preventDefault(e);
                    var formPassCriteria = true;
                    $('#myForm').find('input').each(function() {
                        if (formPassCriteria === false) {
                            return false;
                        }
                        var required = $(this).data('requirement');
                        var dataValidationType = $(this).data('validate');
                        var minLength = $(this).attr('minLength');
                        if (minLength === undefined) {
                            minLength = "";
                        }
                        var maxLength = $(this).data('validate-max');
                        if (maxLength === undefined) {
                            maxLength = "";
                        }
                        var fieldContent = $(this).val();
                        var fieldName = $(this).attr('name');
                        var filter = "";

                        var failsTestWarning = function() {
                            var dataName = "";
                            if (dataValidationType == 'wordcount') {
                                dataName = "words";
                            } else if (dataValidationType == 'charcount') {
                                dataName = "characters";
                            } else {
                                dataName = "numbers";
                            }
                            var warningMinLength = "AT LEAST" + " " + minLength + " " + dataName;
                            if (minLength === "") {
                                warningMinLength = "";
                            }
                            var warningMaxLength = "and no longer than " + maxLength + " " + dataName;
                            if (maxLength === "") {
                                warningMaxLength = "";
                            }
                            var alert = '<div class="alert alert-warning alert-dismissible"></a>My friend, your ' + fieldName + " " + "should be" + " " + warningMinLength + " " + warningMaxLength + '.</div>';
                            window.setTimeout(function() {
                                $(".alert").fadeTo(1500, 0).slideUp(500, function() {
                                    $(this).remove();
                                });
                            }, 4000);
                            $('#form-group').prepend(alert);
                        };

                        var contentFilter = function(filter) {
                            if (!filter.test(fieldContent)) {
                                failsTestWarning();
                                formPassCriteria = false;
                            } else {

                            }
                        };
                        var numericFilter = function() {
                            if (dataValidationType === 'numeric') {
                                filter = new RegExp("[\\d]{" + minLength + "," + maxLength + "}");
                                contentFilter(filter);
                            }
                        };
                        var charcountFilter = function() {
                            if (dataValidationType === 'charcount') {
                                filter = new RegExp("[\\w]{" + minLength + "," + maxLength + "}");
                                contentFilter(filter);
                            } else {
                                wordcountFilter();
                            }
                        };
                        var wordcountFilter = function() {
                            if (dataValidationType === 'wordcount') {
                                filter = new RegExp("^(?:\\b\\w+\\b[\\s\\r\\n]*){" + minLength + "," + maxLength + "}$");
                                contentFilter(filter);
                            } else {
                                numericFilter();
                            }
                        };
                        var requiredFilter = function() {
                            if (required === 'required') {
                                charcountFilter();
                            } else {
                                return;
                            }
                        };
                        requiredFilter();


                    });
                };
                validator();
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