'use client';

import LoadingIcon from '@/assets/icons/LoadingIcon';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react'

function FormFixed() {
  const [formValue, setFormValue] = useState({
    'Họ tên': '',
    'Số điện thoại': '',
  })
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  const now = new Date(Date.now())
  const formattedDate = now.toLocaleString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).replace('T', ' ');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget)
      formData.append('Thời gian', formattedDate)
      await fetch("https://script.google.com/macros/s/AKfycbws-zJPI19r7EtE8sIk6Yopsxcbn_DWxeLvtWpRbxh7SaOPCOP27j8o3mGzU7cjoLQg/exec",
        {
          method: "POST",
          body: formData,
          mode: 'no-cors'
        }
      )
      router.push('/cam-on')
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="fixed right-4 left-4 bottom-0 z-10">
      <form className="flex justify-center gap-2 mb-2 max-w-xl m-auto" onSubmit={onSubmit}>
        <div className="flex flex-col gap-1 w-1/2">
          <input type="text" placeholder="Họ và tên" className="px-4 py-1 border border-[red] rounded-xl" name="Họ tên" onChange={handleChange} />
          <input type="text" placeholder="Số điện thoại" className="px-4 py-1 border border-[red] rounded-xl" name="Số điện thoại" onChange={handleChange} />
        </div>
        <button type='submit' className="flex items-center justify-center w-1/2 bg-button rounded-xl cursor-pointer">
          {loading && <LoadingIcon />}
          <span className="text-[#fffc01] font-bold uppercase text-[14px]">Bấm để nhận tư vấn</span>
        </button>
      </form>
    </div>
  )
}

export default FormFixed