$(document).ready(function() {

	$.ajax({
		
		url:"js/data.json",
		dataType: "json",
		success:function(data)
		{
			var imgList="";
			var img="";
			descr=[];
			$(data).each(function(index,obj)
			{
				descr.push(obj);
				
			});//information
		    
		    $(data).each(function(idx,obj)
			{
				
				
				path ="images/square/"+obj.path;
				alt = obj.title;
				id=obj.id;
				
				
				imgList +='<img src="'+path+'" alt="'+alt+'" id="'+id+'">';
			img='<li>'+imgList+'</li>';
			
				
				//each object
			
			});//each function;
			
			$(img).appendTo(".gallery").on('mouseenter','img', function(event){
				
				$(this).addClass("gray");
				curr_alt = $(this).attr('alt');
				$(descr).each(function(index,obj)

        			{
        				if(obj.title == curr_alt)
        				{
        					curr_path = obj.path;
        					curr_city = obj.city;
        					curr_country = obj.country;
        					curr_date = obj.taken;
        					curr_desc = obj.description;
        				}
        			});//current id path
        			
        			previewpath = "images/medium/" + curr_path;
        			$("<div id = preview>").appendTo('body');
        		$("#preview").prepend('<img src="'+previewpath+'"id=big>');
        		
        		$('<p></p>').text(curr_city + "," + curr_country + "," + curr_date).insertAfter("#big");
        		$('<p></p>').text(curr_desc).insertAfter("#big");

        		var left = event.pageX - $(this).offset().left + 150;
        		var top = event.pageY - $(this).offset().top + 200;
        		$('#preview').css({top: top,left: left}).css("z-index",4).fadeIn(800);
			}).on('mouseleave','img',function()
        	{
        		var input = $( this ).next();
        		$(this).removeClass("gray");
				//input.removeAttr("preview");
				
        		$("div").remove("#preview");//mouseleave
        	}).on('mousemove','img',function(event)
        	{
        		var left = event.pageX - $(this).offset().left + 150;
        		var top = event.pageY - $(this).offset().top + 200;
        		$('#preview').css({top: top,left: left}).css("z-index",4).fadeIn(800);
        		
        	}); //mousemove
		}//success
		
		
			
			});
	});