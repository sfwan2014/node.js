function Car(){
	var name;
	var color;
	this.setName = function(theName){
		name = theName;
	};
	this.setColor = function(theColor){
		color = theColor;
	};
	this.run = function(){
		console.log('the '+ color + ' ' + name +' run');
	};
};
module.exports = Car;