// File cấu hình dữ liệu sinh nhật
// Thay đổi dữ liệu này để tạo trang sinh nhật mới

export interface BirthdayPerson {
  id: string;
  name: string;
  birthDate: string; // Format: "DD/MM/YYYY"
  image: string; // URL hoặc path đến ảnh
}

export interface BirthdayData {
  month: string; // Tên tháng: "Tháng 11", "Tháng 12", etc.
  monthNumber: number; // Số tháng: 11, 12, etc.
  year: number;
  logo?: string; // Path đến logo
  showImg?: boolean; // Hiển thị ảnh hay không (default: true)
  people: BirthdayPerson[];
}

// Dữ liệu mẫu - Sinh nhật tháng 11
export const birthdayData: BirthdayData = {
  month: "Tháng 11",
  monthNumber: 11,
  year: 2024,
  logo: "images/birthday/logo-birthday.png", // Logo sẽ được thêm sau
  showImg: true, // Hiển thị ảnh (set false để ẩn ảnh)
  people: [
    {
      id: "1",
      name: "Nguyễn Văn An",
      birthDate: "01/11/1995",
      image: "images/birthday/img_001.jpg"
    },
    {
      id: "2",
      name: "Trần Thị Bình",
      birthDate: "02/11/1998",
      image: "images/birthday/img_002.jpg"
    },
    {
      id: "3",
      name: "Lê Văn Cường",
      birthDate: "03/11/1992",
      image: "images/birthday/img_003.jpg"
    },
    {
      id: "4",
      name: "Phạm Thị Dung",
      birthDate: "05/11/1996",
      image: "images/birthday/img_004.jpg"
    },
    {
      id: "5",
      name: "Hoàng Văn Đức",
      birthDate: "07/11/1994",
      image: "images/birthday/img_005.jpg"
    },
    {
      id: "6",
      name: "Vũ Thị Em",
      birthDate: "08/11/1997",
      image: "images/birthday/img_006.jpg"
    },
    {
      id: "7",
      name: "Đặng Văn Phong",
      birthDate: "10/11/1993",
      image: "images/birthday/img_007.jpg"
    },
    {
      id: "8",
      name: "Bùi Thị Giang",
      birthDate: "12/11/1999",
      image: "images/birthday/img_008.jpg"
    },
    {
      id: "9",
      name: "Ngô Văn Hải",
      birthDate: "13/11/1991",
      image: "images/birthday/img_009.jpg"
    },
    {
      id: "10",
      name: "Đỗ Thị Hoa",
      birthDate: "15/11/1995",
      image: "images/birthday/img_010.jpg"
    },
    {
      id: "11",
      name: "Võ Văn Khoa",
      birthDate: "16/11/1998",
      image: "images/birthday/img_011.jpg"
    },
    {
      id: "12",
      name: "Phan Thị Lan",
      birthDate: "18/11/1996",
      image: "images/birthday/img_012.jpg"
    },
    {
      id: "13",
      name: "Trương Văn Minh",
      birthDate: "20/11/1994",
      image: "images/birthday/img_013.jpg"
    },
    {
      id: "14",
      name: "Lý Thị Nga",
      birthDate: "21/11/1997",
      image: "images/birthday/img_014.jpg"
    },
    {
      id: "15",
      name: "Vương Văn Oanh",
      birthDate: "22/11/1993",
      image: "images/birthday/img_015.jpg"
    },
    {
      id: "16",
      name: "Đinh Thị Phương",
      birthDate: "23/11/1999",
      image: "images/birthday/img_016.jpg"
    },
    {
      id: "17",
      name: "Lương Văn Quân",
      birthDate: "25/11/1992",
      image: "images/birthday/img_017.jpg"
    },
    {
      id: "18",
      name: "Mai Thị Rồng",
      birthDate: "26/11/1996",
      image: "images/birthday/img_018.jpg"
    },
    {
      id: "19",
      name: "Hồ Văn Sơn",
      birthDate: "27/11/1994",
          image: "images/birthday/img_019.jpg"
    },
    {
      id: "20",
      name: "Trịnh Thị Tuyết",
      birthDate: "28/11/1998",
      image: "images/birthday/img_020.jpg"
    },
    {
      id: "21",
      name: "Cao Văn Uyên",
      birthDate: "29/11/1995",
      image: "images/birthday/img_021.jpg"
    },
    {
      id: "22",
      name: "Dương Thị Vân",
      birthDate: "30/11/1997",
      image: "images/birthday/img_022.jpg"
    },
  ]
};
