// BÀI 1 
// input : lương 1 ngày, số ngày làm 
//progress : tổng lương = lương 1 ngày * số ngày làm
// output: tổng lương
document.getElementById('calSalary').onclick = function () {
    var SalaryPerDay = document.getElementById('SalaryPerDay').value;
    var DaysWork = document.getElementById('DaysWork').value;
    var totalSalary = SalaryPerDay * DaysWork;
    document.getElementById('displaySalary').innerHTML = totalSalary.toLocaleString() + " VNĐ";
}
// BÀI 2 
// input 5 số 
// progress : trung bình cộng 5 số, dùng Number() để ép kiểu
// output: số trung bình
document.getElementById('calAverage').onclick = function () {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var number3 = document.getElementById('number3').value;
    var number4 = document.getElementById('number4').value;
    var number5 = document.getElementById('number5').value;
    var averageNumber = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5)) / 5;
    document.getElementById('displayAverage').innerHTML = averageNumber;
}

// BÀI 3
// input: số tiền usd 
// progress: tiền Việt = 23.500 * tiền usd 
// output : tiền việt
document.getElementById('changeMoney').onclick = function () {
    var usdPrice = document.getElementById('usdPrice').value;
    var vnPrice = usdPrice * 23500;
    document.getElementById('displayMoneyChanged').innerHTML = new Intl.NumberFormat('vn-VN').format(vnPrice) + " VNĐ";
}

// BÀI 4
// input chiều dài và chiều rộng 
// progress : diện tích = dài * rộng 
            // chu vi = (dài + rộng)*2 
// output : chu vi và diện tích 
document.getElementById('calculateAreaPerimeter').onclick = function () {
    var lengthRectangle = Number(document.getElementById('lengthRectangle').value);
    var widthRectangle = Number(document.getElementById('widthRectangle').value);
    var Area = lengthRectangle * widthRectangle;
    var Perimeter = (lengthRectangle + widthRectangle) * 2;
    document.getElementById('displayArea').innerHTML = Area;
    document.getElementById('displayPerimeter').innerHTML = Perimeter;
}

// BÀI 5 
// input: nhập số có 2 chữ số 
// progress : tách từng số ra và dùng parseInt để ép kiểu số nguyên
//output : tổng của 2 chữ số đó 
document.getElementById('calNumber').onclick = function () {
    var number = Number(document.getElementById('number').value);
    var firstDigit = number / 10;
    var secondDigit = number % 10;
    let sum = parseInt(firstDigit + secondDigit);
    document.getElementById('displaySum').innerHTML=sum;
}