import Image from "next/image"

function Section3() {
  return (
    <section className="mx-4">
      <div className="w-5/6 m-auto ">
        <div className="flex items-center justify-center gap-4 mb-2">
          <Image src="/section3/image1.jpg" alt="" width={400} height={400} className="w-20 h-20 rounded-full" />
          <p className="text-[14px] text-[#853f05] font-bold">HỎI ĐÁP CHUYÊN GIA ĐẦU NGÀNH VỀ VẤN ĐỀ DẠ DÀY TẠI ĐÂY !</p>
        </div>
        <div className="flex gap-2 mb-2">
          <div className="flex flex-col gap-2 w-1/2">
            <input type="text" placeholder="Họ và tên" className="px-4 py-1 border border-[red] rounded-xl" />
            <input type="text" placeholder="Số điện thoại" className="px-4 py-1 border border-[red] rounded-xl" />
          </div>
          <div className="flex items-center justify-center w-1/2 bg-button rounded-xl cursor-pointer">
            <span className="text-[#fffc01] font-bold uppercase text-[14px]">Bấm để nhận tư vấn</span>
          </div>
        </div>
        <div>
          <p className="text-center text-sm font-bold">(Tư vấn hoàn toàn miễn phí)</p>
        </div>
      </div>
    </section>
  )
}

export default Section3