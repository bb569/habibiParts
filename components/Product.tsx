import { fronNumber } from "@/app/utils/number";

export interface DataType {
  data2: string;
<<<<<<< HEAD
  id: string;
=======
  id: string ;
>>>>>>> local-backup
  imag: string;
  title: string;
  model: string;
  stars: number;
  order: number;
  price: number;
    data:string;
    path:string
}

function Product({ model,order,imag, title, stars, price }: DataType) {
  const renderStars = () => {
    const starArray = [];
    for (let i = 0; i < stars; i++) {
      starArray.push(<img key={i} className="w-4 h-4 ml-1" src="/star.png" alt="" />); // Add key prop
    }
    return starArray;
  };

  return (
    <div className="h-64 bg-white shadow-md text-right hover:shadow-2xl">
      <img className="h-1/2" src={imag} alt="" />
      <h3 className="my-3 text-d font-bold">{title}</h3>
      <div className="flex justify-end items-center"> {/* Align items vertically */}
        <p className="text-a ml-2">سفارشات:{order}</p> {/* Add margin left */}
        {renderStars()}
      </div>
      <p className="text-e font-sans text-sm">قیمت {fronNumber(price)} هزارتومن</p>
      <p className="text-a font-sans">{model}</p>
    </div>
  );
}

export default Product;