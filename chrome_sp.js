jQuery(document).ready( function ($) {
  // Check if SharePoint
	function isSharepoint() {
		var generator = $("head meta[name='GENERATOR']").attr('content');
		return generator == "Microsoft SharePoint";
	}
	function sharepointFix() {
    // SP JS call to fix menus and scrolling.
    _spBodyOnLoadWrapper();
	}
	if (isSharepoint()){
		sharepointFix();
	}
});