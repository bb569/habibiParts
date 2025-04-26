import { Metadata } from 'next';
import ProductDetailClient from '../ProductDetailClient';

// تایپ جدید برای PageProps با در نظر گرفتن async بودن params
export type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params; // اطمینان از resolved شدن params
  return {
    title: `محصول ${resolvedParams.id}`,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;  // اطمینان از resolved شدن params
  const { id } = resolvedParams;

  return (
    <div className="container mx-auto p-4">
      <ProductDetailClient params={{ productId: id }} />
    </div>
  );
}
