function tichBinhPhuong(a,b,c){
	document.write(((3*a + 2*b - c)*(3*a + 2*b - c)));
}

var tichBinhPhuong1 = function(x,y,z){
	return ((3*x + 2*y - z)*(3*x + 2*y - z));
}

var str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto obcaecati odit autem a totam perferendis fugit quaerat sed animi libero nemo fugiat possimus quidem, ratione neque, cumque temporibus consequuntur. Vero repellendus, pariatur distinctio tempore doloribus dolor sapiente esse, magnam accusantium dolore. Praesentium mollitia maiores, aut at iste obcaecati autem, similique, nobis minus velit eum quod unde amet ea ipsum tenetur sapiente provident esse animi magnam non, deserunt quaerat. Consequuntur ratione neque minima corporis nobis dolore possimus, unde repellat porro quos laborum aliquid quasi perspiciatis non accusantium, doloremque alias necessitatibus voluptatibus labore ea et incidunt. Eos nam, quas similique consectetur nulla!";

function strCatChuoi(){
	/*return str.slice(-11,88); // Nếu tham số đầu là số âm thì nó sẽ đếm ngược từ dưới lên và ngược lại*/
	/*return str.substring(0,10); // Không có tham số âm và chỉ lấy giá trị đếm thấp nhất là 0*/
	/*return str.substr(0,10) + "..."; // substr(start,length) : length là số ký tự muốn lấy bắt đầu từ vị trí start*/
}

function strVietHoaChuCaiDau(){
	return str.ucfirst();
}
/*
Bài tập:
- Bài 1. Viết 1 function tính bình phương của 1 số.

Tham số truyền vào là 1 số.
Kết quả là bình phương của số đó.
- Bài 2. Cho 3 số a, b và c. Tính bình phương của (3a + 2b - c)

Tham số truyền vào là 3 số a, b, c.
Kết quả là bình phương của (3a + 2b - c). Sử dụng hàm viết sẵn của Bài 1.
- Bài 3. Cho 1 chuỗi dài hơn 100 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.

Tham số truyền vào là 1 chuỗi dài hơn 100 ký tự.
Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, cuối chuỗi có dấu "..." biểu thị là chuỗi bị cắt.
- Bài 4. Viết 1 function có tác dụng biến 1 chuỗi thành viết hoa từ đầu tiên.

Tham số truyền vào là 1 chuỗi.
Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "welcome to Techmaster" sẽ được convert thành "Welcome to techmaster".
- Bài 5. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.

Tham số truyền vào là 1 mảng các số.
Kết quả là số nhỏ nhất trong mảng.
Gợi ý: có thể dùng phương thức sort().
- Bài 6. Cho 1 mảng gồm tên của 5 học viên. Hãy sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên.

Tham số truyền vào là 1 mảng gồm tên của 5 người.
Kết quả: In ra màn hình danh sách các học viên theo thứ tự bảng chữ cái.
- Bài 7. Tạo 3 đối tượng là teacher, student và parent. Mỗi đối tượng đều có các thuộc tính: firstName, lastName, age. Cả 3 đối tượng đều có chung 1 phương thức là say(). Hãy viết function aboutMe() in ra màn hình 1 câu giới thiệu bản thân và gán vào phương thức say() của các đối tượng trên.

Function aboutMe() không có tham số truyền vào.
Khi truy xuất đến phương thức say() của một đối tượng bất kỳ trong 3 đối tượng tạo sẵn teacher, student và parent thì phải in ra được giá trị các thuộc tính của đối tượng đó.
// Ví dụ
var teacher = {
  firstName: "Kim",
  lastName: "Dung",
  age: 30,
  say: function(){}
}

var aboutMe = function(){
  // Code logic here
}

teacher.say = aboutMe;
teacher.say();   // In ra màn hình dòng chữ "Xin chào, tôi là Kim Dung. Năm nay tôi 30 tuổi."
 

Yêu cầu:
Bài tập ngắn nên các bạn dùng http://codepen.io/​ để nộp bài nhé .Chú ý viết vào phần Javascript, mỗi bài là một function (chỉ cần viết function, trong một function có thể gọi đến 1 function khác).
Sử dụng hàm document.write() với tham số là 1 chuỗi HTML để thay đổi nội dung của trang HTML hiện tại. Ví dụ: 
document.write("<h1>Bài tập</h1>");
Cách trình bày: 
// Bài 1
function bai1(number) {
    return number;
}
//document.write(bai1(3));
//document.write(bai1(5));

// Bài 2
function bai2(a, b, c) {
    
}
//document.write(bai2(3, 5, 7));

// Cũng có thể dùng console.log() thay cho document.write()
*/