/**
 * Public class definition
 * @param  {object} options
 * @return {this}
 */
var CoreView = function (options) {
    var defaults  = {
      pageName: 'Home'
    };
    //Merge/overwrite defaults with options
    this.settings = $.extend(true, {}, defaults, options);
    //Execute on runtime
    this.init();
};


CoreView.prototype = {
  /**
   * Init the View
   * Init everything needed at load
   * This method should NOT be overwritten in child classes
   * @return {void}
   */
  init: function(){
    //cache the datepicker selector
    const datepicker = $('#datepicker');
    //init the datepicker if selector exists
    if(datepicker.length){
      datepicker.datepicker({
        format: datepicker.attr('placeholder'),
        endDate: datepicker.data('end-date'),
        autoclose: true,
        todayHighlight: true,
        orientation: datepicker.data('orientation')
      });
    }
  },
  /**
   * Update the settings object
   * @param  {object} options
   * @return {void}
   */
  updateSettings: function (options) {
    this.settings = $.extend(true, {}, this.settings, options);
  }
};
