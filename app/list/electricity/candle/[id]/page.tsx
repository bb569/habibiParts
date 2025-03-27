import { DataType } from "../../../../../components/Product";
import Container from "../../../../../components/Container";
import IdProduct from "@/components/IdProduct";

interface par {
  params: Promise<{ id: string }>;
}

export default async function Id({ params }: par) {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/datas/${id}`);
  const dataBases = (await res.json()) as DataType;
  return (
    <Container>
      <IdProduct id={Number(id)} productData={dataBases} />
    </Container>
  );
}