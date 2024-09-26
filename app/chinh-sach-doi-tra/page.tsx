import Link from 'next/link'
import React from 'react'

function ChinhSachDoiTra() {
  return (
    <div className="max-w-xl m-auto px-4">
      <div className="py-4">
        <h1 className="underline text-3xl uppercase font-bold text-[#c20101] text-center">Chính sách đổi trả</h1>
        <div className="flex flex-col my-4 leading-8">
          <div className="mb-4">
            <p className="text-[#104891] font-semibold underline">Điều kiện áp dụng (trong vòng 7 ngày kể từ ngày nhận sản phẩm):</p>
            <ul>
              <li>- Hàng hóa còn mới chưa qua sửa dụng;</li>
              <li>- Hàng hóa bị lỗi hoặc hư hỏng do vận chuyển hoặc do Nhà sản xuất;</li>
              <li>- Có clip quay lại quá trình unbox còn nguyên niêm phong đơn hàng</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-[#104891] font-semibold underline">Trường hợp chấp nhận đổi trả:</p>
            <ul>
              <li>- Hàng không đúng như quảng cáo;</li>
              <li>- Không đủ số lượng, không đủ bộ như Đơn hàng đã yêu cầu;</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-[#104891] font-semibold underline">Trường hợp không đủ điều kiện đổi trả:</p>
            <ul>
              <li>- Quá 07 ngày kể từ khi nhận hàng;</li>
              <li>- Gửi lại hàng không đúng mẫu mã, không phải sản phẩm của chúng tôi;</li>
              <li>- Không thích, không hợp, đặt nhầm mã, nhầm màu.</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-1/2 bg-button rounded-xl cursor-pointer py-4">
            <Link href="/" className="text-white">Quay lại mua hàng</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChinhSachDoiTra