/**
 * Public class definition
 * @param  {object} options
 * @return {this}
 */
 var Form = function (options) {
     var defaults = {
       errorClass: 'has-error',
       successClass: 'has-success',
       feedbackElement: '.form-group',
     };
     this.settings = $.extend(true, {}, defaults, options);

     this.validateForm(this.settings.selector);
 };

Form.prototype = {
  /**
   * Validates a form
   * @return {void}
   */
  validateForm: function(form){
    const t = this;

    form.validate({
      rules: t.settings.rules,
      messages: t.settings.messages,
      errorElement: 'span',
      errorClass: t.settings.errorClass,
      errorContainer: t.settings.errorContainer,
      errorLabelContainer: t.settings.errorContainer.find('ol'),
      wrapper: 'li',
      invalidHandler: function(event, validator) {
        const errors = validator.numberOfInvalids();
        const alert = $('<div class="alert alert-danger alert-dismissible" role="alert"><ol></ol></div>');

        if (errors) {
          let message = '';
          const invalidElements = validator.errorList;
          Object.keys(invalidElements).forEach(function (element) {
            return message += '<li>' + invalidElements[element]['message'] + '</li>';
          });

          $(alert).find('ol').append(message)

          $.colorbox({
            html: alert
          });
        }
      },
      highlight: function(element, errorClass, validClass) {
	$(element).parents(t.settings.feedbackElement)
		  .addClass(t.settings.errorClass)
		  .removeClass(t.settings.successClass);
      },
      unhighlight: function(element, errorClass, validClass) {
	$(element).parents(t.settings.feedbackElement)
		  .addClass(t.settings.successClass)
		  .removeClass(t.settings.errorClass);
      }
    });
  }
}
