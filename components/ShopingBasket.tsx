"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AddCart from "./AddCart";
import axios from "axios";
import { DataType } from "./Product";
type cartdata = {
    id: number;
    qty: number;
  };

function ShopingBasket({id,qty}:cartdata) {
  const [data, setdata] = useState({} as DataType);
  useEffect(() => {
    axios(`http://localhost:8000/datas/${id}`).then(res=>{
      const {data} = res
      setdata(data)
    })
  }, []);
  return (
    <div>
      <div
        key={1}
        className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden"
      >
        <Link href={`/store/${id}`}>
          <img
            className="w-full h-48 object-cover"
            src={data.imag}
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{data.title}</h3>
          <p className="text-gray-600 mb-2">سفارشات:{qty}</p>
          <p className="text-gray-800 font-semibold">
            قیمت: {data.price} هزارتومن
          </p>
          <p className="text-gray-600">{data.model}</p>
          <div className="mt-4">
            <AddCart id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopingBasket;

  //   "id": "1",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Peugeot_106_open_phase2.jpg/280px-Peugeot_106_open_phase2.jpg",
  //   "title": "پیستون",
  //   "model": "Toyota Corolla",
  //   "stars": 4,
  //   "order": 50,
  //   "price": 1200000,
  //   "path": "پیستون"
  // },
  // {
  //   "id": "2",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Peugeot_107_68_Style_%282._Facelift%29_%E2%80%93_Frontansicht%2C_1._Dezember_2013%2C_D%C3%BCsseldorf.jpg/280px-Peugeot_107_68_Style_%282._Facelift%29_%E2%80%93_Frontansicht%2C_1._Dezember_2013%2C_D%C3%BCsseldorf.jpg",
  //   "title": "شاتون",
  //   "model": "Honda Civic",
  //   "stars": 5,
  //   "order": 30,
  //   "price": 1500000,
  //   "path": "شاتون"
  // },
  // {
  //   "id": "3",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/2015_Peugeot_108_Active_Front.jpg/280px-2015_Peugeot_108_Active_Front.jpg",
  //   "title": "سوپاپ",
  //   "model": "Nissan Altima",
  //   "stars": 3,
  //   "order": 40,
  //   "price": 900000,
  //   "path": "سوپاپ"
  // },
  // {
  //   "id": "4",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Peugeot_20Cup_2006_Sao_Paulo.jpg/280px-Peugeot_20Cup_2006_Sao_Paulo.jpg",
  //   "title": "کلاچ",
  //   "model": "Hyundai Elantra",
  //   "stars": 4,
  //   "order": 60,
  //   "price": 1100000,
  //   "path": "کلاچ"
  // },
  // {
  //   "id": "5",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Peugeot_1007_front.JPG/280px-Peugeot_1007_front.JPG",
  //   "title": "توربو",
  //   "model": "Kia Sportage",
  //   "stars": 5,
  //   "order": 20,
  //   "price": 2000000,
  //   "path": "توربو"
  // },
  // {
  //   "id": "6",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Peugeot_2008_B_IMG_2563.jpg/280px-Peugeot_2008_B_IMG_2563.jpg",
  //   "title": "رادیاتور",
  //   "model": "Mazda CX-5",
  //   "stars": 4,
  //   "order": 45,
  //   "price": 800000,
  //   "path": "رادیاتور"
  // },
  // {
  //   "id": "7",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Peugeot_201_1930_04.JPG/280px-Peugeot_201_1930_04.JPG",
  //   "title": "پمپ بنزین",
  //   "model": "Subaru Outback",
  //   "stars": 3,
  //   "order": 35,
  //   "price": 700000,
  //   "path": "پمپ بنزین"
  // },
  // {
  //   "id": "8",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Peugeot_202_BW_1.JPG/280px-Peugeot_202_BW_1.JPG",
  //   "title": "دینام",
  //   "model": "Volkswagen Golf",
  //   "stars": 4,
  //   "order": 55,
  //   "price": 1300000,
  //   "path": "دینام"
  // },
  // {
  //   "id": "9",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Peugeot_203_Coupe.jpg/280px-Peugeot_203_Coupe.jpg",
  //   "title": "کمپرسور",
  //   "model": "Ford Mustang",
  //   "stars": 5,
  //   "order": 25,
  //   "price": 1800000,
  //   "path": "کمپرسور"
  // },
  // {
  //   "id": "10",
  //   "data": "موتور",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Peugeot_204_front_20120630.jpg/280px-Peugeot_204_front_20120630.jpg",
  //   "title": "فیلتر هوا",
  //   "model": "Chevrolet Camaro",
  //   "stars": 4,
  //   "order": 70,
  //   "price": 500000,
  //   "path": "فیلتر هوا"
  // },
  // {
  //   "id": "11",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Peugeot_205.jpg/280px-Peugeot_205.jpg",
  //   "title": "باتری",
  //   "model": "Toyota Corolla",
  //   "stars": 4,
  //   "order": 60,
  //   "price": 600000,
  //   "path": "باتری"
  // },
  // {
  //   "id": "12",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/2001-2003_Peugeot_206_%28T1%29_GTi_3-door_hatchback_01.jpg/280px-2001-2003_Peugeot_206_%28T1%29_GTi_3-door_hatchback_01.jpg",
  //   "title": "دینام",
  //   "model": "Honda Civic",
  //   "stars": 5,
  //   "order": 40,
  //   "price": 900000,
  //   "path": "دینام"
  // },
  // {
  //   "id": "13",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Daniel_Carlsson_-_2005_Cyprus_Rally_2.jpg/280px-Daniel_Carlsson_-_2005_Cyprus_Rally_2.jpg",
  //   "title": "استارت",
  //   "model": "Nissan Altima",
  //   "stars": 3,
  //   "order": 30,
  //   "price": 700000,
  //   "path": "استارت"
  // },
  // {
  //   "id": "14",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Peugeot_207_75_Forever_%28Facelift%29_%E2%80%93_Frontansicht%2C_5._Mai_2012%2C_Ratingen_%28cropped%29.jpg/280px-Peugeot_207_75_Forever_%28Facelift%29_%E2%80%93_Frontansicht%2C_5._Mai_2012%2C_Ratingen_%28cropped%29.jpg",
  //   "title": "سیم‌کشی",
  //   "model": "Hyundai Elantra",
  //   "stars": 4,
  //   "order": 50,
  //   "price": 800000,
  //   "path": "سیم‌کشی"
  // },
  // {
  //   "id": "15",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rally_Bohemia_2011_-_Valou%C5%A1ek.jpg/280px-Rally_Bohemia_2011_-_Valou%C5%A1ek.jpg",
  //   "title": "چراغ جلو",
  //   "model": "Kia Sportage",
  //   "stars": 5,
  //   "order": 20,
  //   "price": 400000,
  //   "path": "چراغ جلو"
  // },
  // {
  //   "id": "16",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Peugeot_208_PureTech_130_EAT8_Allure_GT-Line_%28II%29_%E2%80%93_f_17102021.jpg/280px-Peugeot_208_PureTech_130_EAT8_Allure_GT-Line_%28II%29_%E2%80%93_f_17102021.jpg",
  //   "title": "چراغ عقب",
  //   "model": "Mazda CX-5",
  //   "stars": 4,
  //   "order": 45,
  //   "price": 350000,
  //   "path": "چراغ عقب"
  // },
  // {
  //   "id": "17",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Peugeot_208_T16_-_Mondial_de_l%27Automobile_de_Paris_2014_-_001.jpg/330px-Peugeot_208_T16_-_Mondial_de_l%27Automobile_de_Paris_2014_-_001.jpg",
  //   "title": "فیوز",
  //   "model": "Subaru Outback",
  //   "stars": 3,
  //   "order": 35,
  //   "price": 100000,
  //   "path": "فیوز"
  // },
  // {
  //   "id": "18",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Peugeot_3008_THP_165_EAT6_Allure_GT-Line_%28II%29_%E2%80%93_Frontansicht_%281%29%2C_20._September_2017%2C_D%C3%BCsseldorf.jpg/280px-Peugeot_3008_THP_165_EAT6_Allure_GT-Line_%28II%29_%E2%80%93_Frontansicht_%281%29%2C_20._September_2017%2C_D%C3%BCsseldorf.jpg",
  //   "title": "رله",
  //   "model": "Volkswagen Golf",
  //   "stars": 4,
  //   "order": 55,
  //   "price": 200000,
  //   "path": "رله"
  // },
  // {
  //   "id": "19",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Peugeot_301_facelift_2_China_2019-03-20.jpg/280px-Peugeot_301_facelift_2_China_2019-03-20.jpg",
  //   "title": "کابل باتری",
  //   "model": "Ford Mustang",
  //   "stars": 5,
  //   "order": 25,
  //   "price": 300000,
  //   "path": "کابل باتری"
  // },
  // {
  //   "id": "20",
  //   "data": "برق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Peugeot_302_ca_1937_Schaffen-Diest_2012.jpg/280px-Peugeot_302_ca_1937_Schaffen-Diest_2012.jpg",
  //   "title": "سنسور",
  //   "model": "Chevrolet Camaro",
  //   "stars": 4,
  //   "order": 70,
  //   "price": 250000,
  //   "path": "سنسور"
  // },
  // {
  //   "id": "21",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Peugeot_304%2C_Malta_feb_2011_-_Flickr_-_sludgegulper_slightly_less_rakish_angle.jpg/800px-Peugeot_304%2C_Malta_feb_2011_-_Flickr_-_sludgegulper_slightly_less_rakish_angle.jpg",
  //   "title": "گیربکس",
  //   "model": "Toyota Corolla",
  //   "stars": 4,
  //   "order": 60,
  //   "price": 1200000,
  //   "path": "گیربکس"
  // },
  // {
  //   "id": "22",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Peugeot_306_GTI6.jpg/280px-Peugeot_306_GTI6.jpg",
  //   "title": "کلاچ",
  //   "model": "Honda Civic",
  //   "stars": 5,
  //   "order": 40,
  //   "price": 900000,
  //   "path": "کلاچ"
  // },
  // {
  //   "id": "23",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/2001-2005_Peugeot_307_%28T5%29_5-door_hatchback_%282011-03-10%29.jpg/270px-2001-2005_Peugeot_307_%28T5%29_5-door_hatchback_%282011-03-10%29.jpg",
  //   "title": "دیفرانسیل",
  //   "model": "Nissan Altima",
  //   "stars": 3,
  //   "order": 30,
  //   "price": 700000,
  //   "path": "دیفرانسیل"
  // },
  // {
  //   "id": "24",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2021_-_Peugeot_308_III_%28C%29_-_04.jpg/330px-2021_-_Peugeot_308_III_%28C%29_-_04.jpg",
  //   "title": "شفت",
  //   "model": "Hyundai Elantra",
  //   "stars": 4,
  //   "order": 50,
  //   "price": 800000,
  //   "path": "شفت"
  // },
  // {
  //   "id": "25",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Peugeot_309_5T_Serie_1_Front_w.jpg/280px-Peugeot_309_5T_Serie_1_Front_w.jpg",
  //   "title": "فلایویل",
  //   "model": "Kia Sportage",
  //   "stars": 5,
  //   "order": 20,
  //   "price": 400000,
  //   "path": "فلایویل"
  // },
  // {
  //   "id": "26",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Peugeot_4007_20090614_front.JPG/280px-Peugeot_4007_20090614_front.JPG",
  //   "title": "بلبرینگ",
  //   "model": "Mazda CX-5",
  //   "stars": 4,
  //   "order": 45,
  //   "price": 350000,
  //   "path": "بلبرینگ"
  // },
  // {
  //   "id": "27",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Peugeot_402_grey_l.jpg/280px-Peugeot_402_grey_l.jpg",
  //   "title": "سنسور سرعت",
  //   "model": "Subaru Outback",
  //   "stars": 3,
  //   "order": 35,
  //   "price": 100000,
  //   "path": "سنسور سرعت"
  // },
  // {
  //   "id": "28",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Peugeot_403_featuring_the_anti-pedestrian_bonnet_badge_fitted_on_earlier_versions.jpg/280px-Peugeot_403_featuring_the_anti-pedestrian_bonnet_badge_fitted_on_earlier_versions.jpg",
  //   "title": "روغن گیربکس",
  //   "model": "Volkswagen Golf",
  //   "stars": 4,
  //   "order": 55,
  //   "price": 200000,
  //   "path": "روغن گیربکس"
  // },
  // {
  //   "id": "29",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Peu404vitfr.jpg/280px-Peu404vitfr.jpg",
  //   "title": "پوسته گیربکس",
  //   "model": "Ford Mustang",
  //   "stars": 5,
  //   "order": 25,
  //   "price": 300000,
  //   "path": "پوسته گیربکس"
  // },
  // {
  //   "id": "30",
  //   "data": "جعبه دنده",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Peugeot_405_SRI_1992.jpg/280px-Peugeot_405_SRI_1992.jpg",
  //   "title": "دنده",
  //   "model": "Chevrolet Camaro",
  //   "stars": 4,
  //   "order": 70,
  //   "price": 250000,
  //   "path": "دنده"
  // },
  // {
  //   "id": "31",
  //   "data": "سیستم تعلیق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Peugeot_405_Turbo_16_001.JPG/280px-Peugeot_405_Turbo_16_001.JPG",
  //   "title": "فنر",
  //   "model": "Toyota Corolla",
  //   "stars": 4,
  //   "order": 60,
  //   "price": 1200000,
  //   "path": "فنر"
  // },
  // {
  //   "id": "32",
  //   "data": "سیستم تعلیق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/1998_Peugeot_406_LX_DT_1.9_Front.jpg/280px-1998_Peugeot_406_LX_DT_1.9_Front.jpg",
  //   "title": "کمک فنر",
  //   "model": "Honda Civic",
  //   "stars": 5,
  //   "order": 40,
  //   "price": 900000,
  //   "path": "کمک فنر"
  // },
  // {
  //   "id": "33",
  //   "data": "سیستم تعلیق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/2006_Peugeot_407_S_HDi_Saloon_1.6_Front.jpg/280px-2006_Peugeot_407_S_HDi_Saloon_1.6_Front.jpg",
  //   "title": "طبق",
  //   "model": "Nissan Altima",
  //   "stars": 3,
  //   "order": 30,
  //   "price": 700000,
  //   "path": "طبق"
  // },
  // {
  //   "id": "34",
  //   "data": "سیستم تعلیق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Peugeot_408_II_facelift_01_China_2019-04-03.jpg/280px-Peugeot_408_II_facelift_01_China_2019-04-03.jpg",
  //   "title": "بوش",
  //   "model": "Hyundai Elantra",
  //   "stars": 4,
  //   "order": 50,
  //   "price": 800000,
  //   "path": "بوش"
  // },
  // {
  //   "id": "35",
  //   "data": "سیستم تعلیق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Peugeot_408_%28crossover%29_1X7A7195.jpg/280px-Peugeot_408_%28crossover%29_1X7A7195.jpg",
  //   "title": "سیب‌گارد",
  //   "model": "Kia Sportage",
  //   "stars": 5,
  //   "order": 20,
  //   "price": 400000,
  //   "path": "سیب‌گارد"
  // },
  // {
  //   "id": "36",
  //   "data": "سیستم تعلیق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Peugeot%2C_Paris_Motor_Show_2018%2C_Paris_%281Y7A1702%29.jpg/280px-Peugeot%2C_Paris_Motor_Show_2018%2C_Paris_%281Y7A1702%29.jpg",
  //   "title": "بلبرینگ چرخ",
  //   "model": "Mazda CX-5",
  //   "stars": 4,
  //   "order": 45,
  //   "price": 350000,
  //   "path": "بلبرینگ چرخ"
  // },
  // {
  //   "id": "37",
  //   "data": "سیستم تعلیق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/1978_Peugeot_504_Ti_Automatic_2.0_Front.jpg/280px-1978_Peugeot_504_Ti_Automatic_2.0_Front.jpg",
  //   "title": "سگ دست",
  //   "model": "Subaru Outback",
  //   "stars": 3,
  //   "order": 35,
  //   "price": 100000,
  //   "path": "سگ دست"
  // },
  // {
  //   "id": "38",
  //   "data": "سیستم تعلیق",
  //   "imag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Peugeot_505_GR_front_side%2C_Denpasar.jpg/280px-Peugeot_505_GR_front_side%2C_Denpasar.jpg",
  //   "title": "توپی چرخ",
  //   "model": "Volkswagen Golf",
  //   "stars": 4,
  //   "order": 55,
  //   "price": 200000,
  //   "path": "توپی چرخ"
  // }