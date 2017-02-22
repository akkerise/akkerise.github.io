$( function() {
			$( ".sorted-list" ).sortable({
				connectWith: ".sorted-list",
				placeholder: 'ui-state-highlight',
				start: function(even , ui){
					$(ui.item[0]).addClass('dragging');
				},
				stop: function(even, ui){
					$(ui.item[0]).removeClass('dragging');
				}
			});
		} );

var app = {
	plusJobs: function(e,type,add){
		let event = window.event || e;
		if (){

		}
	}
};