  // Bài 1 : tìm mùa
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth();
  var year = now.getFullYear();
  // console.log(date);
  // console.log(month+1);
  // console.log(year);
  function whatSession(month) {
    // month += 1;
    // console.log(month);
    if (month >= 2 && month <=4) {
      return "Mùa Xuân";
    }
    if (month >=5 && month <=7) {
      return "Mùa Hè";
    }
    if (month >= 8 && month <=10) {
      return "Mùa Thu";
    }
    if (month >=11 || month <= 1) {
      return "Mùa Đông";
    }
  }

  // Bài 2 : Kiểm tra chuỗi và cắt chuỗi

  function testStringAndSplit(str = 1322143243223) {
    if (typeof(str) != "string") {
      let newStr = str.toString();
      if (newStr.length < 10) {
        console.log(newStr);
      }else{
        let str10 = newStr.substr(0,10);
        console.log(str10 + "...");
      }
    }
  }

  // Bài 3 : Điểm A,B,C,D,F

  function testDiem(x){
    if (x <= 10 && x >= 0) {
      if (x >= 0 && x <= 3.9) {
        console.log('Điểm F');
      }else if (x >= 4 && x <= 5.4) {
        console.log('Điểm D');
      }else if (x >= 5.5 && x <= 6.9) {
        console.log('Điểm C');
      }else if (x >= 7 && x <= 8.4) {
        console.log('Điểm B');
      }else{
        console.log('Điểm A');
      }
    }else{
      console.log('Mày đùa bố à?')
    }
  }

  // Bài 4 : Dùng Switch case để translate()

  function translate(x){
    switch (x) {
      case "BOSNIAN":
        console.log('Zdravo');
        break;
      case "FRANCE":
        console.log('Bonjour');
        break;
      case "KOREAN":
        console.log('여보세요');
        break;
      case "BASQUE":
        console.log('Kaixo');
        break;
      case "THAILAND":
        console.log('สวัสดี');
        break;
      default:
        console.log('Hello');
        break;
    }
  }

  // Bài 5 : [false, false, false, true, false, true, false, true] // Kiểm tra vị trí lần đầu true xuất hiện

  function firstTrue(arr = [false, false, false, true, false, true, false, true]){
    for (var i = 0; i < arr.length-1; i++) {
      if (arr[i] == true) {
        console.log(i);
        break;
      }
    }
  }


  // Bài 6 : Chỉ sử dụng While hoặc For . Gặp giá trị chẵn thì màu xanh , giá trị lẻ màu đỏ

  function testSoXanhDo(){
    // for (var i = 0; i <= 100; i++) {
    //   if (i%2 == 0) {
    //     document.write('Xanh.' + i + '<br>');
    //   }else{
    //     document.write('Do' + i +'<br>');
    //   }
    // }


    for (var i = 0; i <= 100; i++) {
      if (i%2 == 0) {
        document.write(i);
      }else{
    document.write(i);
      }
    }
  }
