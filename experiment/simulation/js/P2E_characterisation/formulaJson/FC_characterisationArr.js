



	function FC_findColsetValue(trueReading, FC_trueReading_arr){
			
			goal = trueReading;
			 var closest = FC_trueReading_arr.reduce(function(prev, curr) {
				    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
				  });
			return closest;
		} ;

		
	function FC_applyFormula(closestValue, idx, trueReading){
		
		var chr = FC_char_Arr[idx];
		var temp1 = FC_formula_json[chr](trueReading);
		return temp1;
		
	};
		


	function FC_calStdValforDirect(formulaVal, higherSpLevel, lowerSpLevel){
		

		
//		var temp2 = (parseFloat(formulaVal) + 0.2).toFixed(3);
		
		var temp2 = (parseFloat(formulaVal) + 4).toFixed(2);
//		console.log(temp2);
		return temp2;
	}

	
	

	function FC_calStdValforReverse(formulaVal, higherSpLevel, lowerSpLevel){

		
//		var temp2 = Math.abs((1 - parseFloat(formulaVal)).toFixed(2));
		
//		var temp2 = Math.abs((parseFloat(formulaVal) -1).toFixed(3));
		
		var temp2 = Math.abs(20 - (parseFloat(formulaVal)).toFixed(2));
		
//		console.log(temp2);
		return temp2;
	}
	
	
	
function FC_calActualValforDirect(formulaVal, higherSpLevel, lowerSpLevel){

		

		var temp2 = ((formulaVal * 0.16 )+ 4).toFixed(2);
	
//	    var temp2 = ((formulaVal * 0.016 )/100+ 4).toFixed(3);

		return temp2;
	}
	
function FC_calActualValforReverse(formulaVal, higherSpLevel, lowerSpLevel){

	

	var temp2 = (20 - (formulaVal * 0.16 )).toFixed(2);
	
//	var temp2 = (20 - (formulaVal * 6 )/100).toFixed(3);

	return temp2;
}



//FC_RandomErrArr = [ 15.00, 20.00, 25.00, 12.25, 15.25, 17.24, 21.05, 22.00, 24.50, 23.15, 30, 35, 40];

//FC_RandomErrArr = [5.00, 10.00, 15.00, 20.00, 25.00, 12.25, 15.25, 17.24, 11.10, 21.05, 22.00, 24.50, 23.15];

FC_RandomErrArr = [5.00, 10.00];


//FC_RandomErrArr = [20.00, 25.00, 30.00, 35.00, 40.00];

//this function select Random error
function randomErr_FC(FC_RandomErrArr)
{

return FC_RandomErrArr[Math.floor(Math.random()*FC_RandomErrArr.length)];

}


FC_FaultIndexArr = [1,2,3,4];
FC_faultcheckCnt = 0;
FC_3FaultDetectionCnt = 0;
FC_wrongFaultCnt = 0;



//FC_DefaultErr = 20.00;
fcZeroError = 1.00;

FC_trueReading_arr = [	0,10,20,30,	35,	40,	45,	50,	52,	55,	57,	60,	62,65,67,70,71,72,74,77,78,80,82,84,85,87,90,92,94,	98,100  ];


FC_char_Arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "bb", "cc", "dd", "ee"];
            //[0,   1,   2,    3,   4,   5,   6,   7,   8,   9,   10, 11,  12,  13,  14,   15,  16 , 17 , 18,  19,  20,  21,  22,  23,  24,  25,  26,   27,   28,   29,   30]

var FC_formula_json = {
	    
	    "a": function (param) {
			var temp = fcZeroError + param + FC_DefaultErr;
	        return temp;
	       },
		"b": function (param) {
			var temp = Math.sin(param)+param + fcZeroError + FC_DefaultErr;
	        return temp;
	       },
		"c": function (param) {
			var temp = Math.sin(param)+param + fcZeroError - FC_DefaultErr;
	        return temp;
	       },
		"d":  function (param) {
			var temp = Math.sin(param)+param + fcZeroError + FC_DefaultErr;
	        return temp;
	       },
		"e":  function (param) {
			var temp = Math.cos(param)+param + fcZeroError - FC_DefaultErr;
	        return temp;
	       },
		"f" : function (param) {
			var temp = Math.cos(param)+param + fcZeroError + FC_DefaultErr;
	        return temp;
	       },
		 "g":  function (param) {
			var temp = Math.cos(param)+param + fcZeroError + FC_DefaultErr;
	        return temp;
	       },
		"h" : function (param) {
			var temp = Math.cos(param)+param + fcZeroError + FC_DefaultErr;
	        return temp;
	       },
	    	   
		"i" : function (param) {
			var temp = param + (0.01*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       }, 
		"j" : function (param) {
			var temp = param + (0.01*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       },
		"k" : function (param) {
			var temp = param + (0.01*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       },  
		"l" : function (param) {
			var temp = param + (0.01*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },  
		"m" : function (param) {
			var temp = param + (0.01*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       },  
		"n" : function (param) {
			var temp = param + (0.015*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },  
		"o" : function (param) {
			var temp = param + (0.015*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },   
		"p" : function (param) {
			var temp = param + (0.015*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },  
		"q" : function (param) {
			var temp = param + (0.015*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       },
		
		"r" : function (param) {
			var temp = param + (0.015*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },
		"s" : function (param) {
			var temp = param + (0.01*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },
		   
		"t" : function (param) {
			var temp = param + (0.01*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },  
		   
		"u" : function (param) {
			var temp = param + (0.01*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       },   
		   
		 "v" : function (param) {
			var temp = param + (0.01*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       },    
		"w" : function (param) {
			var temp = param + (0.025*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },  
		 "x" : function (param) {
			var temp = param + (0.025*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       },    
		"y" : function (param) {
			var temp = param + (0.025*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },    
		   
		"z" : function (param) {
			var temp = param + (0.015*param) + fcZeroError + FC_DefaultErr;
	        return temp;
	       },    
		"aa" : function (param) {
			var temp = param + (0.017*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       },   
		"bb" : function (param) {
			var temp = param + (0.017*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       },   
		   
		"cc" : function (param) {
			var temp = param + (0.027*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       }, 
	    "dd" : function (param) {
			var temp = param + (0.037*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       }, 

		"ee" : function (param) {
			var temp = param + (0.037*param) + fcZeroError - FC_DefaultErr;
	        return temp;
	       }, 






		   
};






function FCDrowGraph(){
	
	 datapoint0Arr = [];
	 datapoint1Arr = [];
	 datapoint2Arr = [];
	 
	  chart = new CanvasJS.Chart("FC_chartContainer",
				{
					animationEnabled : true,
					theme : "light2",
					title : {
						text : "Flow Control System (FY 100)",
						fontSize : 20,
					},

					axisX : {
						title : "Input(kg/cm�)",
						crosshair : {
							enabled : true,
							snapToDataPoint : true
						},
					// ticks: {suggestedMin: 2, max:6}
					},
					axisY : {
						title : "Output(mA)",
						minimum : 1,
						maximum : 21
					},

					toolTip : {
						shared : true
					},
					legend : {
						cursor : "pointer",
						verticalAlign : "bottom",
						horizontalAlign : "right",
						dockInsidePlotArea : true,
						itemclick : toogleDataSeries
					},
					data : [ 
						{
						type : "scatter",
						showInLegend : true,
						name : "Observed Output",
						markerType : "circle",
						markerSize: 6,
						// xValueFormatString: "DD MMM,
						// YYYY",
						color : "#F08080",

						dataPoints : datapoint0Arr
					} 
//					{
//						type : "line",
//						showInLegend : true,
//						name : "Observed Output line",
////						markerSize: 5,
//						// lineDashType: "dash",
//						dataPoints :datapoint1Arr
//					}
					,{
						type : "line",
						showInLegend : true,
						name : "Standard Output",
//						markerSize: 5,
						// lineDashType: "dash",
						dataPoints :datapoint2Arr
					} 
					]
				});
		//chart.render();

		function toogleDataSeries(e) {
			if (typeof (e.dataSeries.visible) === "undefined"
					|| e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			}
			//chart.render();
		}

	 
	 
//	 chart = new CanvasJS.Chart("FC_chartContainer",
//			{
//				animationEnabled : true,
//				theme : "light2",
//				title : {
//					text : "Flow Control System",
//					fontSize : 20,
//				},
//
//				axisX : {
//					title : "Input flow (lph)",
//					crosshair : {
//						enabled : true,
//						snapToDataPoint : true
//					},
//				// ticks: {suggestedMin: 2, max:6}
//				},
//				axisY : {
//					title : "Output (mA)",
//					minimum : 2,
//					maximum : 22,
//					interval: 1
//				},
//
//				toolTip : {
//					shared : true
//				},
//				legend : {
//					cursor : "pointer",
//					verticalAlign : "bottom",
//					horizontalAlign : "right",
//					dockInsidePlotArea : true,
//					itemclick : toogleDataSeries
//				},
//				data : [ 
//					{
//					type : "scatter",
//					showInLegend : true,
//					name : "Observed Output",
//					markerType : "circle",
//					markerSize: 6,
//					// xValueFormatString: "DD MMM,
//					// YYYY",
//					color : "#F08080",
//
//					dataPoints : datapoint0Arr
//				} 
////				{
////					type : "line",
////					showInLegend : true,
////					name : "Observed Output line",
//////					markerSize: 5,
////					// lineDashType: "dash",
////					dataPoints :datapoint1Arr
////				}
//				,{
//					type : "line",
//					showInLegend : true,
//					name : "Standard Output",
////					markerSize: 5,
//					// lineDashType: "dash",
//					dataPoints :datapoint2Arr
//				} 
//				]
//			});
//	//chart.render();
//
//	function toogleDataSeries(e) {
//		if (typeof (e.dataSeries.visible) === "undefined"
//				|| e.dataSeries.visible) {
//			e.dataSeries.visible = false;
//		} else {
//			e.dataSeries.visible = true;
//		}
////		chart.render();
//	}

}


function FC_Updategraph(OldValue,lowerSpLevel, higherSpLevel,lowerOutputLevel, higherOutputLevel){
	datapoint0Arr = OldValue;
	chart.options.data[0].dataPoints = datapoint0Arr; 
	datapoint1Arr.push({
		x : lowerSpLevel,
		y : OldValue[0].y
	},
	{
		x : higherSpLevel,
		y : OldValue[OldValue.length - 1].y
	} );
	
	//chart.options.data[1].dataPoints = datapoint1Arr; 
	datapoint2Arr.push({
		x : lowerSpLevel,
		y : lowerOutputLevel
	}, {
		x : higherSpLevel,
		y : higherOutputLevel
	} );
	
	chart.options.data[1].dataPoints = datapoint2Arr; 
	chart.render();
}









