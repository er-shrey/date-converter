/*------------- Date conversion from TimeStamp ---------------*/
app.service('dateConvert', ['$localStorage', function ($localStorage){
	/*-Let in localstorage we are storing:
		1. timezone['hours'] : which is the hours relative to localtime. like wrt IST, UTC is -11.5 hours
		2. timezone['name'] : it is having the name of timezone in string
		3. timezone['gmt'] : it have the value of hours relative with local time and GMT. like for IST it is +5.5
	-*/
	this.dateTimePart = function(timeStamp){
		if((timeStamp.toString().length)<13){
			timeStamp = timeStamp*1000;
		}
		var newTime=Number(timeStamp)+ (3600000*$localStorage.timezone['hours']);
		var u = new Date(newTime);
		return u.getFullYear()+'-'+('0' + (u.getMonth()+1)).slice(-2)+'-'+ ('0' + u.getDate()).slice(-2) + ' ' + ('0' + u.getHours()).slice(-2)+':' + ('0' + u.getMinutes()).slice(-2)+':' + ('0' + u.getSeconds()).slice(-2);
	}
	
	this.datePart = function(timeStamp){
		if((timeStamp.toString().length)<13){
			timeStamp = timeStamp*1000;
		}
		var newTime=Number(timeStamp)+ (3600000*$localStorage.timezone['hours']);
		var u = new Date(newTime);
		return u.getFullYear()+'-'+('0' + (u.getMonth()+1)).slice(-2)+'-'+ ('0' + u.getDate()).slice(-2);
	}
	this.timePart = function(timeStamp){
		if((timeStamp.toString().length)<13){
			timeStamp = timeStamp*1000;
		}
		var newTime=Number(timeStamp)+ (3600000*$localStorage.timezone['hours']);
		var u = new Date(newTime);
		return ('0' + u.getHours()).slice(-2)+':' + ('0' + u.getMinutes()).slice(-2)+':' + ('0' + u.getSeconds()).slice(-2);
	}
	
	this.timeZoneName=function(){
		return $localStorage.timezone['name']; 
	};
	
	this.timefromGMT=function(){
		return $localStorage.timezone['gmt']; 
	};
	
	this.preferedDate = function preferedDate(timeStamp){
		var newTime=Number(timeStamp)+ (3600000*$localStorage.timezone['hours']);
		return newTime;
	};
}]);