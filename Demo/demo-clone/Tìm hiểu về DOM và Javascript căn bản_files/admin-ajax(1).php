






			//form validation
			function validateName(fieldClass, form) {
				"use strict"
				var error = "";
				var value = jQuery('input.'+fieldClass,form).val();

				if ( value === '' || value === 'Nickname' || value === 'Enter Your Name..' || value === 'Your Name..') {
					error = "You did not enter your first name.";
				} else if (value && (value.length < 2) || (value.length > 200)) {
					error = "First name is the wrong length.";
				}
				return error;
			}
					
			function validateEmail(fieldClass, form) {
				"use strict";
				var error="";
				var value = jQuery('input.'+fieldClass,form).val();
				var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    			
				
				if (!value || value === "") {
					error = "You did not enter an email address.";
				} else if ( pattern.test(value) === false) {
					error = "The email address contains illegal characters.";
				}

				return error;

			}

					
			function validateMessage(fieldClass, form) {
				"use strict";
				var error = "";
				var value = jQuery('textarea.'+fieldClass,form).val();
				if (!value || value === '') {
					error = "You did not enter Your message.";
				} else if (value && value.length < 3) {
					error = "The message is to short.";
				}

				return error;
			}		


