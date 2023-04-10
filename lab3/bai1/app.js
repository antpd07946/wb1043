do{
    var a = prompt("1.tính điểm trung bình(if, else)\n2.tính điểm trung bình(switch case)\n3.thoát");
    a = parseInt(a,10);
    var kt;
    kt = false;
    switch (a){
        case 0:
            break;
        case 1:
            DTBif_else();
            break;
        case 2:
            DTBswitch_case();
            break;
        case 3:
            break;
        default:
            alert("Bạn đã nhập ngoài vùng");
            kt = true;
            break;
    }
} while(kt != false);
function Moinhap_va_TinhtongTB(){
    var diemnhap = [ 
    KTTinhHopLe(parseFloat(prompt("Nhập điểm toán"))),
    KTTinhHopLe(parseFloat(prompt("Nhập điểm lý"))),
    KTTinhHopLe(parseFloat(prompt("Nhập điểm hóa"))),
    KTTinhHopLe(parseFloat(prompt("Nhập điểm sinh")))
    ];
    var tong = 0, dem = 0;
    for(let i = 0; i < diemnhap.length; i++){
        tong += diemnhap[i];
        dem ++;
    }
    tong /= dem;
    console.log("Điểm trung bình: "+tong);
    return tong;
};
function KTTinhHopLe(b){
    do{
        if(b <= 10){
            return b;
        }
        else{
            b = parseFloat(prompt("Mời bạn nhập lại điểm"));
        }
    }while(b>10);
    return b;
};
function  DTBif_else(){
    let diem = Moinhap_va_TinhtongTB() 
    if(diem < 5 ){
        console.log("Học lực: Yếu");
    }
    else if (diem < 7){
        console.log("Học lực: Trung Bình");
    }
    else if (diem < 9){
        console.log("Học lực: Khá");
    }
    else{
        console.log("Học lực: Giỏi");
    } 
};
function  DTBswitch_case(){
    let diem = Moinhap_va_TinhtongTB()
    switch (diem) {
        case 1:
        case 2:
        case 3:    
        case 4:
            console.log("Học lực: Yếu");
            break;
        case 5:
        case 6:
            console.log("Học lực: Trung Bình");
            break;
        case 7:
        case 8:
            console.log("Học lực: Khá");
            break;
        default:
            console.log("Học lực: Giỏi");
            break;
    }
};