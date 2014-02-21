function set_drupal_settings() {
            Drupal.settings.site_path = $('#site_path').val();
            Drupal.settings.endpoint = $('#endpoint').val();
          } // Added
 /********************** SOCIAL PAGE **************************/


	   
		function listSocial() {
			set_drupal_settings();// Added
				$('#preloader').show('slow');
				$('#status').show('slow');
				node_load(3, {
					success: function(node) {
						$('#preloader').fadeOut();
					  $('#status').fadeOut();
					 // alert('Loaded node: ' + node.title);
					 // $("#title").html(node.title);
					 // $("#banner").html("<img src='" + node.path+"'/>");
					 $("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
						$("#comment_link").html("<a href='" + node.path+"'>Comment</a>");
						
					// $("#banner").html(node.field_social_image);
					  
					 //  $image_field_values = field_get_items('node', $new_node, 'field_image');
					   // $("#latestlist").html(node.field_get_items('node', 'field_image'));
					 // $("#image").html("Loaded node: " + field_shout_image.filename);
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
			}
		//function commentWin(){
		//	$("#popupWin").html("<iframe src='"+Drupal.settings.site_path + "comment/reply/"+nid+"'seamless height='250' width='290'></iframe>");
						<!-- <iframe src="http://m.reisandirvys.com/comment/reply/3/11" seamless height="250" width="290"></iframe>-->
		//}
		/********************** END SOCIAL PAGE **************************/
		
		/********************** SHOUT PAGE **************************/

			function listShout() {
					$('#preloader').show('slow');
				$('#status').show('slow');
				node_load(5, {
					success: function(node) {
						$('#preloader').fadeOut();
					  $('#status').fadeOut();
					 // alert('Loaded node: ' + node.title);
					 /* $("#title").html('Shout Out!');*/
					  
						$("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
						$("#comment_link").html("<a href='" + node.path+"'>Comment</a>");
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
			}

      /********************** SHOUT PAGE **************************/