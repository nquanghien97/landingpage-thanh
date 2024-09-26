import Link from 'next/link'
import React from 'react'

function ChinhSachQuyenRiengTu() {
  return (
    <div className="max-w-xl m-auto px-4">
      <div className="">
        <div className="py-4 bg-[#110a5c]">
          <h1 className="underline text-3xl uppercase font-bold text-white text-center">Chính sách quyền riêng tư</h1>
        </div>
        <div className="flex flex-col my-4 leading-8">
          <div className="mb-4">
            <p className="text-[#104891] font-semibold underline text-xl">1. Mục đích</p>
            <ul>
              <li>Chúng tôi tôn trọng sự riêng tư, muốn bảo vệ thông tin cá nhân và thông tin thanh toán của bạn. &apos;Chính sách bảo mật&apos; dưới đây là những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ quyền lợi của người truy cập</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-[#104891] font-semibold underline text-xl">2. Quy định cụ thể</p>
            <div>
              <p className="text-[#104891] font-semibold underline">2.1/ Thu thập thông tin</p>
              <ul>
                <li>- Khi khách hàng thực đăng kí thông tin cá nhân để nhận tư vấn khách hàng phải cung cấp một số thông tin cần thiết.</li>
                <li>- Khách hàng có trách nhiệm bảo đảm thông tin đúng và luôn cập nhật đầy đủ và chính xác nhất.​</li>
              </ul>
            </div>
            <div>
              <p className="text-[#104891] font-semibold underline">2.2/ Lưu trữ và bảo mật thông tin riêng</p>
              <ul>
                <li>- Thông tin khách hàng, cũng như các trao đổi giữa khách hàng và chúng tôi, đều được lưu trữ và bảo mật bởi hệ thống của chúng tôi.</li>
                <li>- Chúng tôi có các biện pháp thích hợp về kỹ thuật và an ninh để ngăn chặn việc truy cập, sử dụng trái phép thông tin khách hàng.​</li>
              </ul>
            </div>
            <div>
              <p className="text-[#104891] font-semibold underline">2.3/ Sử dụng thông tin khách hàng</p>
              <p>Chúng tôi có quyền sử dụng thông tin khách hàng cung cấp để:</p>
              <ul>
                <li>- Giao hàng theo địa chỉ mà quý khách cung cấp.</li>
                <li>- Cung cấp thông tin liên quan đến sản phẩm, lợi ích, ưu đãi hay các thư từ khác.​</li>
                <li>- Xử lý đơn đặt hàng và cung cấp dịch vụ, thông tin theo yêu cầu của quý khách.</li>
                <li>- Sử dụng thông tin đã thu thập được từ các cookies nhằm cải thiện trải nghiệm người dùng và chất lượng các dịch vụ của chúng tôi.</li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-[#104891] font-semibold underline text-xl">3. Chia sẻ thông tin khách hàng</p>
            <ul>
              <li>- Chúng tôi cam kết sẽ không chia sẻ thông tin của khách hàng cho bất kỳ một công ty nào khác ngoại trừ những công ty và các bên thứ ba có liên quan trực tiếp đến việc giao hàng. Chúng tôi có thể tiết lộ hoặc cung cấp thông tin cá nhân của quý khách trong các trường hợp thật sự cần thiết như sau:</li>
              <li>- Khi có yêu cầu của các cơ quan pháp luật.</li>
              <li>- Chia sẻ thông tin khách hàng với đối tác chạy quảng cáo như Google ví dụ như tiếp thị lại khách hàng dựa theo hành vi của khách hàng.</li>
              <li>- Nghiên cứu thị trường và các báo cáo phân tích và tuyệt đối không chuyển cho bên thứ ba.</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-[#104891] font-semibold underline text-xl">4. Liên hệ, giải đáp, thắc mắc</p>
            <p>Bất kỳ khi nào khách hàng cần hỗ trợ, xin vui lòng liên hệ với chúng tôi qua:</p>
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

export default ChinhSachQuyenRiengTu