package vn.t3h.ls4.baitap;
 
public class Grab implements GrabInterface {
 
    protected String ten;
    protected long luong;
     
    public Grab() { 
    }
     
    public Grab(String ten) {
        this.ten = ten;
    }
    
    protected String loaiXe() { 
        // Lớp con ghi đè để lấy loại xe
        return "";
    }
    
    @Override
    public void tinhTien() {
        // Lớp con ghi đè để tính giá cuốc xe
    }
     
    @Override
    public void thongTinXe() {
        System.out.println("===== Tài xế: " + ten + " =====");
        System.out.println("- Loại xe: " + loaiXe());
        System.out.println("- Tiền cuốc: " + luong + " VND");
    }
}