import CurrencyIcon from '@/assets/icons/CurrencyIcon'
import Phone3Icon from '@/assets/icons/Phone3Icon'
import Link from 'next/link'
import React from 'react'

function ChinhSachThanhToan() {
  return (
    <div className="max-w-xl m-auto px-4">
      <div className="py-4">
        <h1 className="underline text-3xl uppercase font-bold text-[#c20101] text-center mb-4">Chính sách thanh toán</h1>
        <p className="italic font-bold">Nhằm mang đến cho quý khách hàng những trải nghiệm mua sắm trực tuyến toàn diện nhất, chúng tôi đưa ra 02 phương thức thanh toán để quý khách dễ dàng</p>
        <div className="flex flex-col gap-4 my-4 leading-8 text-white">
          <div className="bg-[#104891] rounded-2xl">
            <div className="flex justify-center">
              <CurrencyIcon width={60} height={60} />
            </div>
            <h2 className="text-center text-2xl underline font-bold uppercase mb-4">Phương thức thanh toán trực tiếp</h2>
            <div className="px-4">
              <div className="mb-4">
                <p className="underline">Thanh toán bắng tiền mặt</p>
                <p>Khách hàng sau khi làm thủ tục mua sản phẩm tại các showroom của chúng tôi, khách hàng sẽ thanh toán bằng tiền mặt cho nhân viên thu ngân tại showroom.</p>
              </div>
              <div className="mb-4">
                <p className="underline">Thanh toán tại nhà</p>
                <p>Khách hàng sẽ thanh toán trực tiếp cho nhân viên giao hàng.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#104891] rounded-2xl">
            <div className="flex justify-center">
              <Phone3Icon width={60} height={120} />
            </div>
            <h2 className="text-center text-2xl underline font-bold uppercase mb-4">PHƯƠNG THỨC THANH TOÁN THẺ CÀO ĐIỆN THOẠI</h2>
            <div className="px-4">
              <div className="mb-4">
                <p>Với hình thức này bạn có thể thanh toán tiền mua hàng ở bất cứ nơi đâu mà không cần đến tài khoản ngân hàng, không phải thực hiện nhiều thao tác. Việc mua thẻ cào với các mệnh giá khác nhau tiện lợi hơn rất nhiều.</p>
                <p>Bạn có thể thanh toán thẻ cào điện thoại bằng 3 mạng sau: MobiPhone, VinaPhone, Viettel.</p>
              </div>
            </div>
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

export default ChinhSachThanhToan