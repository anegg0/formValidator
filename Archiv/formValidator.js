(function($) {
    $.fn.validator = function() {
        $button = $("button");
        var validateElement = function(element) {
            var dataValidationType = $(element).data('validate');
            // ....... refactor contents from clickConfirmedOld
        };

        var clickConfirmed = function(e) {
            e.preventDefault();
            var isValid = true;
            var self = this;
            $('#myForm').find('input').each(function() {
                    if (!self.validateElement(this)) {
                        isValid = false;
                    }
                }
            }
            if (isValid) {
                $(this.submit());
            }

        };

        $button.bind('click', clickConfirmed);


        /// TODO: refactor this
        var clickConfirmedOld = function(e) {
            e.preventDefault();
            $('#myForm').find('input').each(function() {
                    var dataValidationType = $(this).data('validate');
                    var dataName = "";
                    if (dataValidationType == 'wordcount') {
                        dataName = "words";
                    } else if (dataValidationType == 'charcount') {
                        dataName = "characters";
                    } else {
                        dataName = "numbers";
                    }
                    var minLength = $(this).data('minLength');
                    var warningMinLength = "AT LEAST" + " " + minLength + " " + dataName;
                    if (minLength === undefined) {
                        warningMinLength = "";
                        minLength = "";
                    }
                    var maxLength = $(this).data('validate-max');
                    var warningMaxLength = "and no longer than " + maxLength + " " + dataName;
                    if (maxLength === undefined) {
                        warningMaxLength = "";
                        maxLength = "";
                    }
                    var required = $(this).attr('data-requirement');
                    var fieldContent = $(this).val();
                    var fieldName = $(this).attr('name');
                    var alert = '<div class="alert alert-warning alert-dismissible"></a>My friend, your ' + fieldName + " " + "should be" + " " + warningMinLength + dataName + " " + warningMaxLength + '.</div>';
                    var failsTestWarning = function(alert) {
                        window.setTimeout(function() {
                            $(".alert").fadeTo(1500, 0).slideUp(500, function() {
                                $(this).remove();
                            });
                        }, 4000);
                        $('#form-group').prepend(alert);
                    };
                    var formPassCriteria = true;
                    if (required == 'required') {
                        switch (dataValidationType) {
                            case 'charcount':
                                var filter = new RegExp("[\\w]{" + minLength + "," + maxLength + "}");
                                if (!filter.test(fieldContent)) {
                                    failsTestWarning(alert);
                                    formPassCriteria = false;
                                    return false;
                                } else {
                                    formPassCriteria = true;
                                }
                                break;
                            case 'numeric':
                                filter = new RegExp("[\\d]{" + minLength + "," + maxLength + "}");
                                if (!filter.test(fieldContent)) {
                                    failsTestWarning(alert);
                                    formPassCriteria = false;
                                    return false;
                                } else {
                                    formPassCriteria = true;
                                }
                                break;
                            case 'wordcount':
                                filter = new RegExp("^(?:\\b\\w+\\b[\\s\\r\\n]*){" + minLength + "," + maxLength + "}$");
                                if (!filter.test(fieldContent)) {
                                    failsTestWarning(alert);
                                    formPassCriteria = false;
                                    return false;
                                } else {
                                    formPassCriteria = true;
                                }
                                break;
                        }
                    } else {
                        return;
                    }
                }
                //closes $('#myform').find('data-validate').each(
            );
            // closes var clickConfirmed = function(e) {
        };
        // closes jQuery(document).ready(function() {
        //closes $.fn.validator = function(){
    };
    //closes immediately invoked jquery function
}(jQuery));
//calls $.fn.validator