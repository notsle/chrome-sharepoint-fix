jQuery(document).ready( function ($) {

	function is_sharepoint() {
		var generator = $("head meta[name='GENERATOR']").attr('content');

		return generator == "Microsoft SharePoint";
	}

	function fix_sharepoint() {
    _spBodyOnLoadWrapper()
	}

	if ( is_sharepoint() ) {
		fix_sharepoint();
	}
} );