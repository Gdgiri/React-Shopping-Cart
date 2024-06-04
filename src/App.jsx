import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Card from "./Components/Card";

const App = () => {
  const [status, setStatus] = useState(true);
  const [value, setValue] = useState(0);

  const arrObj = [
    {
      productName: "Titan Watches",
      discountedPrice: " $40.00-$80.00",
      star: false,
      sale: true,
      war: false,
      view: true,
      viewoption: true,

      image:
        "https://pbs.twimg.com/profile_images/1095974102290948097/LNOa3FRt_400x400.png",
    },
    {
      productName: "Titan Edge Ceramic ",
      originalPrice: "$20.00",
      discountedPrice: "$18.00",
      star: true,
      sale: true,
      war: true,
      viewoption: false,
      image:
        "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw14b2658f/images/Titan/Catalog/1696QC06_1.jpg?sw=800&sh=800",
    },
    {
      productName: "Titan Black and Gold",
      originalPrice: "$50.00",
      discountedPrice: "$25.00",
      star: false,
      sale: true,
      war: true,
      viewoption: false,
      image:
        "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800",
    },
    {
      productName: "Titan Neo Splash Blue ",
      discountedPrice: " $40.00",
      star: false,
      sale: true,
      war: false,
      viewoption: false,
      image:
        "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1888ad40/images/Titan/Catalog/1805QM01_1.jpg?sw=800&sh=800",
    },
    {
      productName: "Titan Mechanical Blue",
      originalPrice: "$50.00",
      discountedPrice: "$25.00",
      star: true,
      sale: true,
      war: true,
      viewoption: false,
      image:
        "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb83e9f06/images/Titan/Catalog/90110QM01_1.jpg?sw=800&sh=800",
    },
    {
      productName: "Fastrack Watches",
      discountedPrice: " $120.00-$280.00",
      star: false,
      sale: true,
      war: false,
      view: false,
      viewoption: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrc3Vxw10-k7kFg-JWPSckfg9i6gYjZ3_mPw&s",
    },
    {
      productName: "Fastrack Analog Quartz",
      originalPrice: "$20.00",
      discountedPrice: "$18.00",
      star: true,
      sale: false,
      war: true,
      viewoption: false,
      image:
        "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8ae0ce75/images/Fastrack/Catalog/38024PP25_1.jpg?sw=800&sh=800",
    },
    {
      productName: "Fastrack Animal Print ",

      star: true,
      sale: true,
      war: false,
      viewoption: false,
      image:
        "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbd18be32/images/Fastrack/Catalog/6221NM02_1.jpg?sw=800&sh=800",
    },
  ];

  const [arr, setArr] = useState(arrObj);
  return (
    <>
      <Navbar value={value} />
      <Header />
      <Card
        setValue={setValue}
        value={value}
        setStatus={setStatus}
        status={status}
        setArr={setArr}
        arr={arr}
        arrObj={arrObj}
      />
      <Footer />
    </>
  );
};

export default App;
