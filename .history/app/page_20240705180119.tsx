"use client";
import Header from "./components/Header/Header";
import Select from "./components/Select/Select";
import FruitCard, { Fruit } from "./components/FruitCard/FruitCard";
import { fruits } from "@/public/CONSTS/Fruit";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import DiscountCard from "./components/DiscountCard/DiscountCard";
import Filters from "./components/Filters/Filters";
import axios from "axios";
import FilterSelect from "./components/Filters/FilterSelect/FilterSelect";
import { useRecoilState } from "recoil";
import { categryState } from "./State";

export default function App() {

  const [products,setProducts] = useState([])
  const [sort,setSort] = useState("asc")
  const [category,setCategory] = useRecoilState(categryState)


  useEffect(() =>{
    axios.get(`https://fakestoreapi.com/products${category ? "/category"}`)
    .then(result => {
      setProducts(result.data)
    })
  },[])

  const [code, setCode] = useState(`function Test () { return "hello"}`);
  return (
    <div>
      <div className={styles.bodyWrapper}>
        <Select values={[
          {
            value:"low to hight",
            title:"price low to high"
          },
          {
            value:" to hight",
            title:"price high to low"
          }
        ]} />
        <div className={styles.wrapper}>
          <div>
            <Filters />
          </div>
          <div className={styles.section}>
            <DiscountCard productName="Gori's Apple" />
            <div className={styles.fruitWrapper}>
              {products.map((fruit: Fruit, idx) => (
                <FruitCard fruit={fruit} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
