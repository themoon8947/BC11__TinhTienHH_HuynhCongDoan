document.getElementById("btnThanhTien").onclick=function(event){
    event.preventDefault();
    
    var tenHang=document.getElementById("txtTenHang").value;
    var soLuong=document.getElementById("txtSL").value;
    var donGia=document.getElementById("txtDonGia").value;
    var thanhTien=0;
    
    if(soLuong>=100){
        thanhTien=(donGia*49)+(50*(donGia*((100-8)/100)))+((soLuong-99)*(donGia*((100-12)/100)));
    }else if(soLuong>=50){
        thanhTien=(donGia*49)+((soLuong-49)*(donGia*((100-8)/100)))
    }
    else
        thanhTien=soLuong*donGia;

    

    var chuyenDoi = new Intl.NumberFormat('vn-VN');
    var tienChuyenDoi = chuyenDoi.format(thanhTien);
    var dongGiaChuyenDoi=chuyenDoi.format(donGia);
    //tạo thead

    var taoTR_thead=document.createElement("tr");
    
    //tạo 3 cột
    var taoTH_tenHang=document.createElement("th");
    taoTH_tenHang.innerHTML="Tên hàng";
    var taoTH_SL=document.createElement("th");
    taoTH_SL.innerHTML="Số lượng";
    var taoTH_donGia=document.createElement("th");
    taoTH_donGia.innerHTML="Đơn Giá";
    var taoTH_thanhTien=document.createElement("th");
    taoTH_thanhTien.innerHTML="Thành tiền";

    taoTR_thead.appendChild(taoTH_tenHang);
    taoTR_thead.appendChild(taoTH_SL);
    taoTR_thead.appendChild(taoTH_donGia);
    taoTR_thead.appendChild(taoTH_thanhTien);

    document.getElementById("thead").appendChild(taoTR_thead);
    //end tạo thead

    //tạo tbody
    var taoTR_tbody=document.createElement("tr");
    
    //tạo 3 cột
    var taoTD_tenHang=document.createElement("td");
    taoTD_tenHang.innerHTML=tenHang;
    var taoTD_SL=document.createElement("td");
    taoTD_SL.innerHTML=soLuong;
    var taoTD_donGia=document.createElement("td");
    taoTD_donGia.innerHTML=dongGiaChuyenDoi+"&nbsp; VND";
    var taoTD_thanhTien=document.createElement("td");
    taoTD_thanhTien.innerHTML=tienChuyenDoi+"&nbsp; VND";

    taoTR_tbody.appendChild(taoTD_tenHang);
    taoTR_tbody.appendChild(taoTD_SL);
    taoTR_tbody.appendChild(taoTD_donGia);
    taoTR_tbody.appendChild(taoTD_thanhTien);

    document.getElementById("tbody").appendChild(taoTR_tbody);

}