// Bài 1 : Kiểm tra hai tham số có phải là số hay không và so sánh hai số với nhau
function test2Param(a,b) {
  if (typeof(a) == "number" && typeof(b) == "number") {
    if (a > b) {
      return 'a lớn hơn b';
    }else{
      return 'b lớn hơn a';
    }
  }
}

// Bài 2 : Kiểm tra số vào có phải Integer hay không và tính giai thừa số đó
// console.log(parseInt("4a4"));
function testIntegerAndFactorial() {

  let a = '4a';
  // lưu ý hàm Number là nó sẽ ra NaN khi chuỗi là "a4" hoặc "4a4";
  //  hàm parseInt('4a4') => 4
  a = parseInt(a);
  if (typeof(a) == "number" && a > 0) {
    if (a == 1) {
      return 1;
    }
    let giaithua = 1;
    for (var i = 1; i <= a; i++) {
      giaithua = giaithua*i;
    }
    return giaithua;
  }
}

// Bài 3 : Tách lấy số chẵn và xắp sếp lại theo thứ tự giảm dần
function laySoChanVaGiamDan(arr = [1,23,54,56,6,3,21,31]) {
  let newArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i]%2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr.sort(function(a,b){
    return b-a;
  });
}

// Bài 4 : Kiểm tra tính hợp lệ của thông tin

function testRegister() {
  user = {
    username: 'username',
    password: 'password',
    confirm: 'secret'
  }
  if (
         user.username.length >  0
      && user.username.length <= 20
      && user.password.length <= 32
      && user.password.length >= 6
      && user.confirm.length  <= 32
      && user.confirm.length  >= 6
    )
    {
      return "Bạn đủ điều kiện để đăng nhập !";
    }
}
