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

	plusTasks: function(element){
		var e = $('#' + element).children();
		var hidden = $('#' + element).find('.hidden');
		var plus_jobs = $('#' + element).find('.hidden').children();
		hidden.append('<div class="input-field" id="divtask" style="padding-left: 5px;"><input id="newtask" onkeydown="app.newTasks(event,this)" type="text" class="validate"><label for="newtask">New Task</label></div>');
	},

	newTasks: function(e,input){
		var event = window.event || e;
		var jobName = $(input).val();
		var element = $(input).parent().parent().parent();
		var hidden = element.find('.hidden');
		var firstPlusJobs = element.find('.plus_jobs')[0];
		
		if(event.keyCode === 13 && jobName !== ''){
			// 
			element.append('<a href="#!" class="collection-item">'+ jobName + '<span onclick="app.deleteJobInList(this)"><i class="right material-icons" style="color: #ddd">not_interested</i></span><span><i class="right material-icons" style="color: #ddd">mode_edit</i></span></a>')
			firstPlusJobs.remove();
			hidden.remove();
			// add Plus Button
			element.append('<div class="hidden"> </div><div class="center white plus_jobs"> <a class="btn-floating btn-medium waves-effect waves-light" onclick="app.plusTasks(\'' + element.attr('id') + '\')" style="background-color: #26a69a;"><i class="material-icons">add</i></a> </div>');
		}
	},

	addJobsToList: function(type,jobName){
		var item = '<a href="#!" class="collection-item">'+ jobName +'<span onclick="app.deleteJobInList(this)"><i class="right material-icons" style="color: #ddd">not_interested</i></span><span><i class="right material-icons" style="color: #ddd">mode_edit</i></span></a>';
		$('#' + type).append(item);
	},

    deleteJobInList: function(span){
		var itemRemove = $(span).parent();
        var modal = $('#modal-confirm');
        modal.openModal();
		// window.confirm('Are you sure delete this job ?');
        itemRemove.remove();
	},

	countTasks: function(element){
		var elm = $('#' + element);
		var ahr = elm.find('a');
		var last_a = ahr[ahr.length - 1];
		if (elm == '#todo') {
			console.log(1);
		}
	}

};

