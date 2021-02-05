

FC_ConfigureFY = function(appId){
	
	
		var FC_ConfigFlagCnt = 0;
		
		$("#TestDiv").html('');
		
		var configure = '';
		configure +='<div id = "configDiv" class="container-fluid">'
				+'<h4 align="center">FY Configuration</h4>'
				+'<h6>In this level configure the FY 100</h6>'
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Select Type:</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="trsmtrType" >'
				+'<option value="-1">Select</option>'
				+'<option value="direct">Direct Acting</option>'
				+'<option value="reverse">Reverse Acting</option>'
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Select Input:</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="FC_spanLevel" >'
				+'<option value= -1 >Select</option>'
				+'<option value= 0 data-lowerspan = "0.2" data-higherspan="1">0.2 to 1 kg/cm²</option>'					
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Air Supply :</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'1.4 kg/cm<sup>2</sup>'
				+'</div><br/>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Output :</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="output" >'
				+'<option value="-1">Select</option>'
				+'<option value="0" data-loweroutput = "4" data-higheruotput="20">4~20 mA</option>'
				+'<option value="1" data-loweroutput = "20" data-higheruotput="4">20~4 mA</option>'	
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Supply Voltage :</label> '
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'24 VDC'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Loop Impedance :</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'165 Ohm'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="buttonDiv">'
				+'<button id="FC_FYcheckConfig">Check Configuration</button>&nbsp;&nbsp;&nbsp;'
				+'<button id="FC_FYwiringDiagram" hidden >Next Level</button>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				+'</div>'; // container close
				
				
		
			
			$("#TestDiv").html(configure);
		
		//animLT.repeat(0);
		P2EFYCircle.attr({'fill':'green'});	
		glowFY.stop(animFY);
		P2EFYCircle.unclick(FYClick);
	     

		 
		 
		 
		 
		 
		 $('#FC_FYcheckConfig').on(
				'click', function() {
					
					 var FC_configData = {};
					 var selectedType = $( "#trsmtrType option:selected" ).val();
					 var span = parseInt($( "#FC_spanLevel option:selected" ).val());
					 var output = $( "#output option:selected" ).val();
		
					
					
					 var lowerSpanLevel = $("#FC_spanLevel").find(':selected').data('lowerspan');
					 var higherSpanLevel =  $("#FC_spanLevel").find(':selected').data('higherspan');
					
					 var lowerOutputLevel = $("#output").find(':selected').data('loweroutput');
					 var higherOutputLevel =  $("#output").find(':selected').data('higheruotput');
					  
					
	             if(selectedType != "-1" && span != "-1"  && output != "-1"){
						
						
					
						if(selectedType =="direct" && output == "0"){
							
							 alertify.alert("Configuration is successful.<br> Please click next level to make Pneumatic/Electrical Wiring Connections of FY 100");
			            	 $("#trsmtrType, #FC_spanLevel, #output").prop("disabled", true);
			            	 $('#FC_FYwiringDiagram').show();
							
						}else if(selectedType =="reverse" && output == "1"){
							
							 alertify.alert("Configuration is successful.<br> Please click next level to make Pneumatic/Electrical Wiring Connections of FY 100");
			            	 $("#trsmtrType, #FC_spanLevel, #output").prop("disabled", true);
			            	 $('#FC_FYwiringDiagram').show();
						}else{
							
							alertify.alert("Please select the correct output as per selected P/E converter type");
						}
	            
						
						FC_configData.appId = appId;
						FC_configData.Type = selectedType;
						FC_configData.span = span;
						FC_configData.lowerSpanLevel= lowerSpanLevel;
						FC_configData.higherSpanLevel= higherSpanLevel;
						FC_configData.output = output;
						FC_configData.lowerOutputLevel= lowerOutputLevel;
						FC_configData.higherOutputLevel= higherOutputLevel;
						
						
//						console.log(FC_configData);
						FC_appData.fcConfigData = FC_configData;
//						console.log(FC_appData);
						ExpTrackData.fcAppData = FC_appData
//						console.log(ExpTrackData);
						
						
						
					
		
						
					
						
					}else{
						
						alertify.alert("Please select all the fields");
						
					}
					
		 });
		 
		 
	
			$('#FC_FYwiringDiagram').on(
				'click', function() {
					
						var selectedType = $( "#trsmtrType option:selected" ).val();
		//				console.log(selectedType);
						connectionLevel(appId, selectedType);
						
							
				});
}

 
		   
			
							
							
			