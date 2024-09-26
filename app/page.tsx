'use client';

import AddressIcon from '@/assets/icons/AddressIcon'
import Phone2Icon from '@/assets/icons/Phone2Icon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import Form from '@/components/Form'
import Section3 from '@/components/sections/Section3'
import Slider1 from '@/components/Slider1'
import Slider2 from '@/components/Slider2'
import Slider3 from '@/components/Slider3'
import { choose } from '@/config/choose'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function Home() {
  const [isViewMore, setIsViewMore] = useState(false);
  const classViewMore = isViewMore ? '' : 'max-h-[3900px] overflow-hidden'
  return (
    <>
      <header className="fixed top-0 right-0 left-0 h-[76px] z-10">
        <div className="flex justify-between max-w-xl m-auto bg-[#fffff4] px-4 h-full">
          <div className="flex items-center">
            <Image src="/logo.png" alt="logo" width={175} height={76} />
          </div>
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center border border-[#7c481e] rounded-full">
              <Image src='/image1.png' alt="image 1" width={76} height={76} />
            </div>
            <div className="w-14 h-14 flex items-center">
              <Image src='/image2.png' alt="image 1" width={76} height={76} />
            </div>
            <div className="w-14 h-14">
              <PhoneIcon />
            </div>
          </div>
        </div>
      </header>
      <main className={`pt-[76px] max-w-xl m-auto bg-[#fffff4] relative ${classViewMore}`}>
        <section className="h-[660px] mb-4">
          <div className="bg-[url('/section1/image1.png')] h-full w-full bg-cover relative">
            <div className="w-[120px] h-7 absolute bottom-[15%] left-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 311.78 187.07" fill="url(&quot;#SHAPE506_mobile_gradient&quot;)"><defs id="SHAPE506_defs"><linearGradient id="SHAPE506_desktop_gradient" gradientTransform="rotate(0)"><stop offset="0%" stopColor="rgba(13, 98, 242, 1.0)"></stop><stop offset="100%" stopColor="rgba(7, 58, 145, 1.0)"></stop></linearGradient><linearGradient id="SHAPE506_mobile_gradient" gradientTransform="rotate(0)"><stop offset="0%" stopColor="rgba(255, 14, 1, 1.0)"></stop><stop offset="100%" stopColor="rgba(253, 216, 111, 1)"></stop></linearGradient></defs><path d="M13,14.49.06,170a15.8,15.8,0,0,0,17.51,17l280.19-31.73A15.8,15.8,0,0,0,311.57,137L292.68,22a15.79,15.79,0,0,0-15-13.23L29.29,0A15.79,15.79,0,0,0,13,14.49Z"></path></svg>
            </div>
            <div className="absolute bottom-[calc(15%+8px)] left-8">
              <p className="text-[10px] font-semibold mb-2 line-through">780.000 VNĐ</p>
              <p className="text-white font-bold text-xs">390.000 VNĐ</p>
            </div>
          </div>
        </section>
        <section className="px-4 mb-4 bg-white">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="flex justify-center">
                <Image src="/logo.png" alt="" width={136} height={59} />
              </div>
              <p className="uppercase text-[#853f05] text-[10px] font-bold px-4 mb-2">Chứa 30 vitamin quý và 20% hàm lượng nano curcumin</p>
              <p className="uppercase text-[#853f05] text-[18px] font-bold px-4 text-center bg-text">Hỗ trợ dứt điểm viêm loét dạ dày trong 8 tuần*</p>
              <div className="h-2 w-5/6">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1920 174" fill="rgba(255, 188, 1, 1)"><defs></defs><polygon points="1920 150 0 150 0 0 960 88.5 1920 0 1920 150"></polygon><polygon points="1920 162 0 162 0 12 960 91.6 1920 12 1920 162"></polygon><polygon points="1920 174 0 174 0 24 960 94.8 1920 24 1920 174"></polygon></svg>
              </div>
              <div className="overflow-y-auto h-[200px] scrollbar-hidden">
                <div className="flex w-full">
                  <div className="h-[400px] w-[74px] bg-[url('/section2/image1.png')] bg-cover" />
                  <div className="w-full text-[10px] font-bold mt-5">
                    <p className="mb-1 text-sm leading-6">20% (1000mg/100g bột sữa) mỗi ly tương đương 2kg nghệ tươi hỗ trợ làm lành vùng niêm mạc dạ dày tổn thương</p>
                    <p className="mb-2 text-sm leading-6">Sữa đầu  xuất hiện cuối thời kỳ mang thai và 24h đầu sau sinh tăng cường hệ miễn dịch, chống viêm, hỗ trợ tiêu hóa.</p>
                    <p className="mb-2 text-sm leading-6">Giúp xương chắc khỏe, tăng cường dịch khớp, Hỗ trợ ngăn ngừa đau nhức, thoái hóa xương khớp, loãng xương</p>
                    <p className="mb-2 text-sm leading-6">Chứa 30 vitamin và khoáng chất thiết yếu: C, E, B3, B5, B6, B2, B1, A, Acid Folic, K2, K1, Biotin, D, B12....</p>
                    <p className="mb-1 text-sm leading-6">Hỗ trợ tái tạo và sửa chữa các tế bào và mô bị tổn thương trong niêm mạc dạ dày, giúp vết loét mau lành</p>
                    <p className="mb-2 text-sm leading-6">Cải thiện tiêu hóa, tăng cường lợi khuẩn đường ruột, giảm nguy cơ đầy bụng đồng thời ít ảnh hưởng đến đường huyết</p>
                    <p className="text-sm leading-6">Là 2 chất xơ hòa tan, giúp kích thích sự phát triển của các vi khuẩn có lợi và giảm thiểu vi khuẩn có hại cho dạ dày</p>
                  </div>
                </div>
              </div>
              <p className="italic text-[10px] p-4">* Tuần 1 - 2: Giảm viêm và làm dịu niêm mạc dạ dày, Tuần 3 - 4: Hỗ trợ làm lành vết loét, Tuần 5 - 6: Ngăn ngừa tái phát và hỗ trợ chức năng tiêu hóa, Tuần 7 - 8: Phục hồi hoàn toàn và duy trì sức khỏe dạ dày</p>
            </div>
          </div>
        </section>
        <Section3 />
        <section className="px-4">
          <div className="flex w-2/3 m-auto">
            <div className="w-2/3 flex items-center">
              <Image src="/logo.png" alt="logo" width={550} height={550} />
            </div>
            <div className="w-1/3">
              <Image src="/image2.png" alt="logo" width={450} height={450} className="w-full h-full" />
            </div>
          </div>
          <div className="border-8 rounded-3xl border-double border-[#ffbc01] bg-[#ffef571a] p-4">
            <h3 className="uppercase text-center text-lg font-bold mb-2 text-[#853f05] bg-text">NUTRI NANO CURCUMIN SỮA DẠ DÀY NGUYÊN LIỆU NHẬP KHẨU NEW ZEALAND HỖ TRỢ VIÊM LOÉT DẠ DÀY ĐƯỢC CẤP CHỨNG NHẬN FDA</h3>
            <p className="text-center text-xs text-[#853f05] bg-text">(Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ)</p>
          </div>
          <Slider1 />
          <p className="uppercase text-[#853f05] text-[18px] font-bold px-4 text-center bg-text">NHÀ MÁY CÔNG NGHỆ QUỐC TẾ VÀ DÂY CHUYỀN SẢN XUẤT NGUYÊN LIỆU HÀNG ĐẦU</p>
          <div className="w-[200px] m-auto mb-4">
            <Image src="/car.png" alt="" width={300} height={300} />
          </div>
          <Slider2 />
          <p className="uppercase text-[#853f05] text-[18px] font-bold px-4 text-center bg-text mb-4">HƠN 300 SIÊU THỊ - HIỆU THUỐC PHÂN PHỐI TOÀN QUỐC</p>
          <div className="mb-4">
            <Image src="/sua.png" alt="" width={660} height={400} />
          </div>
          <div className="flex items-center justify-center mb-4">
            <div className="w-1/2 flex items-center justify-center bg-button rounded-full py-4">
              <Link href="#form" className="text-[#fffc01] font-bold uppercase text-[14px] text-center cursor-pointer">Đặt mua ngay</Link>
            </div>
          </div>
        </section>
        <section className="px-4 bg-section">
          <div>
            <div className="flex">
              <div className="w-1/2 flex flex-col justify-center items-center">
                <Image src="/logo.png" alt="logo" width={175} height={76} />
                <p className="uppercase text-[#853f05] text-[18px] font-bold px-4 text-center bg-text mb-4">CHĂM SÓC SỨC KHỎE DẠ DÀY MỘT CÁCH KHOA HỌC</p>
              </div>
              <div className="relative w-1/2 flex justify-center">
                <Image src="/logo-6.png" alt='' width={500} height={500} className="w-[150px]" />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="w-[100px] m-auto">
                  <Image src="/immunel-benefit.png" alt="" width={260} height={260} />
                </div>
                <p className="uppercase text-[#853f05] text-[18px] font-bold px-4 text-center bg-text">HỖ TRỢ GIẢM NHANH CÁC TRIỆU CHỨNG ĐAU ĐỚN DO VIÊM LOÉT DẠ DÀY GÂY RA:</p>
                <p className="text-center font-bold">Đau rát thượng vị</p>
                <p className="text-center font-bold">Ợ nóng, ợ chua</p>
                <p className="text-center font-bold">Đầy hơi, khó tiêu</p>
              </div>
              <div className="mb-4">
                <div className="w-[100px] m-auto">
                  <Image src="/immunel-benefit-1-20240924020615-wjcn8.png" alt="" width={260} height={260} />
                </div>
                <p className="uppercase text-[#853f05] text-[18px] font-bold px-4 text-center bg-text">HỖ TRỢ GIẢM NHANH CÁC TRIỆU CHỨNG ĐAU ĐỚN DO VIÊM LOÉT DẠ DÀY GÂY RA:</p>
                <p className="text-center font-bold">Đau rát thượng vị</p>
                <p className="text-center font-bold">Ợ nóng, ợ chua</p>
                <p className="text-center font-bold">Đầy hơi, khó tiêu</p>
              </div>
              <div className="mb-4">
                <div className="w-[100px] m-auto">
                  <Image src="/immunel-benefit-111-20240924021518-usup7.png" alt="" width={260} height={260} />
                </div>
                <p className="uppercase text-[#853f05] text-[18px] font-bold px-4 text-center bg-text">HỖ TRỢ GIẢM NHANH CÁC TRIỆU CHỨNG ĐAU ĐỚN DO VIÊM LOÉT DẠ DÀY GÂY RA:</p>
                <p className="text-center font-bold">Đau rát thượng vị</p>
                <p className="text-center font-bold">Ợ nóng, ợ chua</p>
                <p className="text-center font-bold">Đầy hơi, khó tiêu</p>
              </div>
              <div className="mb-4">
                <div className="w-[100px] m-auto">
                  <Image src="/logo-8-20240924020615-sfsrg.png" alt="" width={260} height={260} />
                </div>
                <p className="uppercase text-[#853f05] text-[18px] font-bold px-4 text-center bg-text">HỖ TRỢ GIẢM NHANH CÁC TRIỆU CHỨNG ĐAU ĐỚN DO VIÊM LOÉT DẠ DÀY GÂY RA:</p>
                <p className="text-center font-bold">Đau rát thượng vị</p>
                <p className="text-center font-bold">Ợ nóng, ợ chua</p>
                <p className="text-center font-bold">Đầy hơi, khó tiêu</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mb-4">
            <div className="w-1/2 flex items-center justify-center bg-button rounded-full py-4">
              <Link href="#form" className="text-[#fffc01] font-bold uppercase text-[14px] text-center cursor-pointer">Bấm đặt hàng ngay</Link>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <h3 className="text-[#853f05] uppercase font-bold text-center">Tiêu chi đảm bảo cho sự lựa chọn của bạn</h3>
          <div className="px-4">
            <table>
              <thead>
                <tr>
                  <th className="w-1/5 px-2 text-center border bg-[#ccc]">Tiêu chí</th>
                  <th className="w-2/5 px-2 text-center border bg-[#ccc]">Sữa non<br />Nutri Nano Curcumin</th>
                  <th className="w-2/5 px-2 text-center border bg-[#ccc]">Thuốc điều trị dạ dày</th>
                </tr>
              </thead>
              <tbody>
                {choose.map(item => (
                  <tr key={item.tieu_chi}>
                    <td className="w-1/5 px-2 border">{item.tieu_chi}</td>
                    <td className="w-1/5 px-2 border">{item.sua_non}</td>
                    <td className="w-1/5 px-2 border">{item.thuoc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="bg-[url('/bg-20240923154851-vvtwf.png')] px-4 bg-cover mb-4">
          <div className="w-[200px] h-[72px] m-auto pt-4 mb-4">
            <Image src="/logo.png" alt="logo" width={500} height={500} />
          </div>
          <h3 className="uppercase text-[#853f05] text-3xl font-bold px-4 text-center bg-text py-2">Hướng dẫn sử dụng</h3>
          <ul className="list-decimal px-4 font-bold mb-2">
            <li>Sử dụng 200ml nước sôi để nguội 45 độ C vào cốc rửa sạch</li>
            <li>Cho 5 muống gạt vào cốc nước khuấy đề cho đến khi sữa hòa tan hoàn toàn</li>
            <li>Sử dụng sữa được pha trong vòng 1 giờ sau khi pha</li>
          </ul>
          <div className="flex relative mb-4">
            <div className="w-full h-full">
              <Image src="/huong-dan.png" alt='' width={450} height={600} className="w-full h-full" />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <h3 className="font-bold text-xl uppercase bg-text text-center mb-2">Bảo quản</h3>
              <ul className="list-decimal px-4 font-bold mb-2 text-sm">
                <li className="leading-6">Bảo quản ở nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp</li>
                <li className="leading-6">Lon đã mở nắp chỉ nên sử dụng trong 3 tuần</li>
              </ul>
            </div>
            <div className="w-1/2">
              <h3 className="font-bold text-xl uppercase bg-text text-center mb-2">Hạn sử dụng</h3>
              <ul className="list-decimal px-4 font-bold mb-2 text-sm">
                <li className="leading-6">Hạn sử dụng: 24 tháng kể từ ngày sản xuất</li>
                <li className="leading-6">NSX & HSD: xem dưới đáy lon</li>
              </ul>
            </div>
          </div>
          <div className="">
            <Image src="/b163da9a9ca83af663b9-removebg-preview-20240924030925-thoc3.png" alt="" width={432} height={577} />
          </div>
          <h3 className="text-[#a40202] font-bold text-sm px-4">Sữa Dạ Dày Nutri Nano Curcumin cung cấp dinh dưỡng tương đương 1 bữa ăn đầy đủ, có thể thay thế bữa ăn phụ hàng ngày, giúp bổ sung dưỡng chất một cách tiện lợi và hiệu quả cho sức khỏe dạ dày.</h3>
        </section>
        <Slider3 />
        <section className="bg-section bg-cover mb-4">
          <div className="w-[240px] m-auto">
            <Image src="/logo.png" alt="logo" width={500} height={500} />
          </div>
          <div className="w-full">
            <Image src="/logo-10-20240924073439-g6jo7.png" alt="" width={650} height={450} />
          </div>
          <Form />
        </section>
        <section className="mb-4">
          <h3 className="uppercase text-[#853f05] text-2xl font-bold text-center bg-text mb-4">Kết quả tuyệt vời</h3>
          <div>
            <Image src="/logo-4-20240923160332-eyt_6.png" alt="" width={750} height={750} />
          </div>
        </section>
        <section className="bg-[#ccc]">
          <h3 className="uppercase text-[#853f05] text-2xl font-bold px-4 text-center py-4 bg-text">Quyền lợi khi mua Nutri Nano Curcumin trên gian hàng chính hãng</h3>
          <div className="mt-[-30px]">
            <Image src="/quyen-loi-20240924082300-gneig.png" alt="" width={1288} height={400} />
            <div className="flex justify-evenly mt-[-28px]">
              <p className="w-[100px] text-sm font-bold text-center">Sản phẩm chính hàng</p>
              <p className="w-[100px] text-sm font-bold text-center">Ưu đãi hấp dẫn</p>
              <p className="w-[100px] text-sm font-bold text-center">Miễn phí vận chuyển toàn quốc</p>
            </div>
          </div>
          <h4 className="text-[#853f05] text-xl font-bold px-4 text-center bg-text mb-4">Công ty TNHH Tổ Hợp Thương Mai Và Đầu Tư Quốc Tế Hoàng Gia</h4>
          <div className="mx-4 mb-4">
            <div className="flex">
              <div className="mr-2">
                <AddressIcon />
              </div>
              <p className="mb-2">
                <span className="font-bold">Địa chỉ: </span>
                KĐT Gamuda Gardens, Trần Phú, Hoàng Mai, Hà Nội
              </p>
            </div>
            <div className="flex">
              <div className="mr-2">
                <Phone2Icon />
              </div>
              <p className="mb-2">
                <span className="font-bold">Hotline: </span>
                0975.688.897
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-[#853f05] text-xl font-bold px-4 bg-text mb-2">Chính sách chung</h4>
            <div className="flex justify-center w-5/6 m-auto">
              <ul className="list-disc w-full flex justify-between">
                <div className="flex flex-col">
                  <li className="font-bold text-sm mb-2">
                    <Link href="/chinh-sach-mua-hang">Chính sách mua hàng</Link>
                  </li>
                  <li className="font-bold text-sm mb-2">
                    <Link href="/chinh-sach-quyen-rieng-tu">Chính sách quyền riêng tư</Link>
                  </li>
                </div>
                <div className="flex flex-col">
                  <li className="font-bold text-sm mb-2">
                    <Link href="/chinh-sach-thanh-toan">Chính sách thanh toán</Link>
                  </li>
                  <li className="font-bold text-sm mb-2">
                    <Link href="/chinh-sach-doi-tra">Chính sách đổi trả</Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </section>
        <div className="fixed right-4 left-4 bottom-0 z-10">
          <div className="flex justify-center gap-2 mb-2 max-w-xl m-auto">
            <div className="flex flex-col gap-1 w-1/2">
              <input type="text" placeholder="Họ và tên" className="px-4 py-1 border border-[red] rounded-xl" />
              <input type="text" placeholder="Số điện thoại" className="px-4 py-1 border border-[red] rounded-xl" />
            </div>
            <div className="flex items-center justify-center w-1/2 bg-button rounded-xl cursor-pointer">
              <span className="text-[#fffc01] font-bold uppercase text-[14px]">Bấm để nhận tư vấn</span>
            </div>
          </div>
        </div>
        <div className={`${isViewMore ? '' : 'bg-view-more absolute bottom-0 left-0 right-0 pt-[200px] z-20'} flex justify-center`}>
          <button className="text-center underline" onClick={() => setIsViewMore(pre => !pre)}>{isViewMore ? 'Rút gọn' : 'Xem thêm'}</button>
        </div>
      </main>
      <footer className="bg-[#fdd86f] max-w-xl m-auto">
        <p className="px-4 py-4 font-semibold text-white uppercase text-center">Sản phẩm không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh</p>
      </footer>
    </>


  )
}
