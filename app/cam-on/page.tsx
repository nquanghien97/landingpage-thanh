import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Thanks() {
  return (
    <div className="max-w-xl m-auto px-4">
      <div className="mb-4">
        <Image src="/car.png" alt="" width={700} height={700} />
      </div>
      <h2 className="text-xl uppercase font-bold text-center">Bạn vui lòng để ý điện thoại để được chúng tôi liên hệ sớm nhất</h2>
      <h1 className="uppercase text-[#853f05] text-2xl font-bold px-4 text-center py-4 bg-text">Chúng tôi xin cảm ơn và cam kết luôn đồng hành cùng quý khách hàng</h1>
      <div className="p-2 border border-[red] rounded-2xl bg-[#ffffcd] mb-4">
        <h3 className="uppercase text-[#853f05] text-xl font-bold px-4 text-center py-4 bg-text">Quyền lợi khi mua Nutri Nano Curcumin trên gian hàng chính hãng</h3>
        <div className="mt-[-30px]">
          <Image src="/quyen-loi-20240924082300-gneig.png" alt="" width={1288} height={400} />
          <div className="flex justify-evenly mt-[-20px]">
            <p className="w-[100px] text-sm font-bold text-center">Sản phẩm chính hàng</p>
            <p className="w-[100px] text-sm font-bold text-center">Ưu đãi hấp dẫn</p>
            <p className="w-[100px] text-sm font-bold text-center">Miễn phí vận chuyển toàn quốc</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="flex items-center justify-center w-1/2 bg-button rounded-xl cursor-pointer py-4">
          <Link href="/" className="text-white">Quay lại mua hàng</Link>
        </div>
      </div>
    </div>
  )
}

export default Thanks