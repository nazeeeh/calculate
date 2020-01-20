function squareNumber(n){
    res = n*n;
    console.log(res);
    return res;
}
squareNumber(3);

function halfOfNumber(n){
    res = n/2;
    console.log(res);
    return res;
}
halfOfNumber(5);

function percentOf(x, y){
    z=x/y;
    res = z*100;
    console.log(res);
    return res;
}
percentOf(10,2);

function areaOfCircle(r){
    q1 =22/7;
    pie = q1.toFixed(2);
    radius = r*r;
    area = pie*radius;
    console.log(area);
    return area;

}
areaOfCircle(2);

function calculator(n){
     halveOfValue = halfOfNumber(n);
    let squareValue = squareNumber(halveOfValue);
    let areaValue = areaOfCircle(squareValue);
    let res = percentOf(areaValue, squareValue, areaValue);

    console.log(res);
    return res;


}
calculator(10);
