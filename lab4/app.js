class SinhVien {
    constructor(maSV, ho, ten, namsinh, lop, email, sdt, id) {
        this.ten = ten;
        this.namsinh = namsinh;
        this.email = email;
        this.maSV = maSV;
        this.ho = ho;
        this.lop = lop;
        this.id = id;
        this.sdt = sdt;
    }

    getAge() {
        const date = new Date();
        let currentYear = date.getFullYear();
        let age = currentYear - this.namsinh;
        return age;
    }

    getFullName() {
      return `${this.ho} ${this.ten}`;
    }
};

let sv1 = new SinhVien('SV001', 'Thai', 'An', 2004,'lop1','thaian@gmail.com','0123456789');
let sv2 = new SinhVien('SV002', 'Cong', 'Thanh', 2004,'lop2','congthanh@gmail.com','0123456788');
let sv3 = new SinhVien('SV003', 'Nguyen', 'Nhat', 2004,'lop3','nguyennhat@gmail.com','0123456787');
let sv4 = new SinhVien('SV004','Duc','Thanh',2004,'lop4','ducthanh@gmail.com','0123456786');
let sv5 = new SinhVien('SV005','Le','Thuong',2004,'lop5','lethuong@gmail.com','0123456785');

console.log(sv1.getFullName() + ";" + sv1.getAge() + " tuổi.");
console.log(sv2.getFullName() + ";" + sv2.getAge() + " tuổi.");
console.log(sv3.getFullName() + ";" + sv3.getAge() + " tuổi.");
console.log(sv4.getFullName() + ";" + sv4.getAge() + " tuổi.");
console.log(sv5.getFullName() + ";" + sv5.getAge() + " tuổi.");

// Sắp xếp sinh viên theo tuổi
let sinhVienArray = [sv1, sv2, sv3, sv4, sv5];
sinhVienArray.sort((a,b) => a.getAge() - b.getAge());
//in ra thông tin BOM chiều dài và chiều rộng
let height = screen.availHeight;
console.log("Chiều cao của màn hình: "+ height);
let width = screen.availWidth;
console.log("Chiều rộng của màn hình: "+ width);