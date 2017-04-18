var r1 = {
	left: 0,
	top: 0,
	width: 30,
	height: 30,
 };

 var r2 = {
	 left: 30,
	 top: 10,
	 width: 30,
	 height: 10
 };

function right (rectangle) {
	return rectangle.left + rectangle.width;
}
function bottom (rectangle) {
	return rectangle.top + rectangle.height;
}

r1.right = right(r1);
r1.bottom = bottom(r1);
r2.right = right(r2);
r2.bottom = bottom(r2);

function areIntersected( r1, r2 ) {
	if ( r1.bottom <= r2.top || r1.right <= r2.left || r2.bottom <= r1.top || r2.right <= r1.left )
    return false;
	else return true;
}

console.log(areIntersected( r1, r2 ))
 
  