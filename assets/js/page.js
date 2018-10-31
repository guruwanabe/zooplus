/**
 * Public class definition
 * @param  {object} options
 * @return {this}
 */
var Page = function (options) {
    var defaults  = {
      pageName: 'Home'
    };
    //Merge/overwrite defaults with options
    this.settings = $.extend(true, {}, defaults, options);
    //Execute on runtime
    this.init();
};


Page.prototype = {
  /**
   * Init the page
   * Init everything needed at load
   * This method should NOT be overwritten in child classes
   * @return {void}
   */
  init: function(){
    //cache the datepicker selector
    const datepicker = $('#datepicker');
    //init the datepicker
    datepicker.datepicker({
      format: datepicker.attr('placeholder')
    });
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
