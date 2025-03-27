"use client";
import { FunContext } from "../app/context/Context";
type add = {
  id: number;
};
export default function AddCart({ id }: add) {
  const { handleQty, deHandleQty, getQty, allDelet } = FunContext(); // حذف cartItems از destructuring

  return (
    <div className="flex items-center space-x-2">
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        onClick={() => handleQty(id)}
      >
        +
      </button>
      <span className="border rounded px-3 py-1">{getQty(id)}</span>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        onClick={() => deHandleQty(id)}
      >
        -
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
        onClick={() => allDelet(id)}
      >
        حذف از سبد
      </button>
    </div>
  );
}