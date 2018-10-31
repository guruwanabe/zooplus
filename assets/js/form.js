/**
 * Public class definition
 * @param  {object} options
 * @return {this}
 */
 var Form = function (options) {
     var defaults = {};

     this.settings = $.extend(true, {}, defaults, options);
     this.form = $(this.settings.selector);

     this.validateForm(this.form);
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
        const alert = '<div class="alert alert-danger alert-dismissible" role="alert"></div>';

        if (errors) {
          const message = errors == 1
            ? 'You missed 1 field. It has been highlighted'
            : 'You missed ' + errors + ' fields. They have been highlighted';
            $.colorbox({
              html: $(alert).append(message)
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
