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
	if ( bottom(r1) <= r2.top || right(r1) <= r2.left || bottom(r2) <= r1.top || right(r2) <= r1.left )
    return false;
	else return true;
}

console.log(areIntersected( r1, r2 ))
 
  