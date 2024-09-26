'use client';

import { ChangeEvent, FormEvent, useState } from "react";

const listRadio = [
  {
    id: 0,
    label: '1 LON : 390.000Đ (giá gốc: 780.000đ)',
    checked: true
  },
  {
    id: 1,
    label: '3 LON TẶNG 1',
    checked: false
  },
  {
    id: 2,
    label: '5 LON TẶNG 2',
    checked: false
  }
]
function Form() {
  const [checked, setChecked] = useState(0);
  const [formValue, setFormValue] = useState({
    fullName: '',
    phoneNumber: '',
    address: ''
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }
  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitForm = {
      product: listRadio[checked].label,
      ...formValue
    }
    console.log(submitForm)
  }
  return (
    <div className="mb-4">
      <h3 className="uppercase text-[#853f05] text-2xl font-bold px-4 text-center bg-text mb-4">Đăng ký để nhận ưu đãi tại đây!</h3>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 mb-2 w-2/3 m-auto">
          <input type="text" placeholder="Họ và tên" className="px-4 py-1 border border-[#a40202] rounded-xl" name="fullName" onChange={handleChange} />
          <input type="text" placeholder="Số điện thoại" className="px-4 py-1 border border-[#a40202] rounded-xl" name="phoneNumber" onChange={handleChange} />
          <input type="text" placeholder="Địa chỉ" className="px-4 py-1 border border-[#a40202] rounded-xl" name="address" onChange={handleChange} />
          <div className="border border-[#a40202] p-2 rounded-xl bg-white">
            {listRadio.map((item, index) => (
              <div key={item.id}>
                <input type="radio" id={item.label} className="mr-2" checked={checked === index} onChange={e => setChecked(item.id)} />
                <label htmlFor={item.label} className="text-[#a40202] font-bold">{item.label}</label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="flex items-center justify-center bg-button rounded-xl w-2/3 m-auto py-4">
          <span className="text-[#fffc01] font-bold uppercase text-[14px]">Bấm đặt hàng ngay</span>
        </button>
      </form>
    </div>
  )
}

export default Form