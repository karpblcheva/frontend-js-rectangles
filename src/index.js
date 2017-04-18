var r1 = {
	left: 0,
	top: 0,
	width: 30,
	height: 30,
 };

 var r2 = {
	 left: 20,
	 top: 10,
	 width: 0,
	 height: 10
 };

function right (rectangle) {
	return rectangle.left + rectangle.width;
}
function bottom (rectangle) {
	return rectangle.top + rectangle.height;
}

function areIntersected( r1, r2 ) {
	if ( bottom(r1) <= r2.top || right(r1) <= r2.left || bottom(r2) <= r1.top || right(r2) <= r1.left ) {
		return false;
	}
	else {
		return true;
	}
}

console.log(areIntersected( r1, r2 ));

var r = {
	left: 0, 
	top: 0,
	width: 20, 
	height: 20
 };
var r3 = {
     left: 10, 
	 top: 10,
     width: 25,  
	 height: 25
   };
var r4 = {
     left: 15, 
	 top: 10,
     width: 20,  
	 height: 20
   };
var r5 = {
     left: 10, 
	 top: 10,
     width: 0,  
	 height: 25
   };
var r6 = {
     left: 100, 
	 top: 10,
     width: 5,  
	 height: 5
   };
var array = [ r3, r4, r5, r6 ];

function filterVisible(rectangle, array) {
	return array.filter(function(elem) {
		if ( areIntersected(rectangle, elem) && elem.width !== 0 && elem.height !== 0 ) {
			return true;
		}
		else {
			return false;
		}
	});
}

console.log(filterVisible(r, array))