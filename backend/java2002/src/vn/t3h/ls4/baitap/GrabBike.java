package vn.t3h.ls4.baitap;
 
/**
 * Loaixe grap bike
 */
public class GrabBike extends Grab {
     
    private int soCuocChay;
     
    public GrabBike(String ten, int soCuocChay) {
        this.ten = ten;
        this.soCuocChay = soCuocChay;
    }
    
    @Override
    public String loaiXe() {
        return "Xe máy";
    }
    
    @Override
    public void tinhTien() {
        luong = Configs.LUONG_NHAN_VIEN_THEO_CUOC * soCuocChay;
    }
}