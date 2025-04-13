// app/store/page.tsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { unstable_noStore as noStore } from 'next/cache'

export const dynamic = 'force-dynamic'

export default async function StorePage() {
  noStore()
  
  try {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    // 1. ابتدا ساختار جدول را بررسی کنید
    const { data: columns, error: columnsError } = await supabase
      .rpc('get_table_columns', { table_name: 'Habibi' })

    if (columnsError) {
      console.error('Columns check failed:', columnsError)
    } else {
      console.log('Available columns:', columns)
    }

    // 2. کوئری اصلی با ستون‌های موجود
    const { data: products, error } = await supabase
      .from('Habibi')
      .select('id, title, price, description, imag')
      //.order('created_at', { ascending: false }) // این خط را حذف یا اصلاح کنید
      .order('id', { ascending: false }) // استفاده از ستون موجود مانند id

    if (error) throw error

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">محصولات</h1>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="border p-4 rounded-lg">
                <h2 className="font-semibold">{product.title}</h2>
                <p className="text-gray-600">
                  {product.price?.toLocaleString('fa-IR')} تومان
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-8">هیچ محصولی یافت نشد</p>
        )}
      </div>
    )
  } catch (err) {
    console.error('Detailed Error:', JSON.stringify(err, null, 2))
    return (
      <div className="container mx-auto p-4 text-red-500 text-center">
        <h2 className="text-xl font-bold">خطا در بارگذاری محصولات</h2>
        <p>لطفاً با پشتیبانی تماس بگیرید</p>
      </div>
    )
  }
}