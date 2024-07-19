import { useEffect, useState } from "react";
import Button from "../Button/Button";
import CustomCheckbox from "./CustomCheckbox/CustomChekbox";
import FilterSelect from "./FilterSelect/FilterSelect";
import styles from "./Filters.module.css";
import axios from "axios";
import { Value } from "sass";
import { title } from "process";
import { useRecoilState } from "recoil";
import { categryState } from "@/app/State";

const Filters = () => {
  const [category, setCategory] = useState<Values>([])
  const [categories ,setCategories] = useRecoilState(categryState)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories/categories`)
      .then(result => {
        const data = result.data.map((item: any) => {
          return {
            Value: item,
            title: item
          }
        })
        setCategory([{value:"" , title:"All"}...data])
      })
  }, [])

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.title}>Filter</div>
      <div className={styles.chart}>
        <span className={styles.label}>Category</span>
        <FilterSelect values={category} onCahnge={(item) => {
          setCategories(item)
        }}/>
      </div>
      <div className={styles.chart}>
        <span className={styles.label}>Price</span>
        <div className={styles.inputWrapper}>
          <input className={styles.input} type="number" placeholder="Min" />
          <input className={styles.input} type="number" placeholder="Max" />
        </div>
      </div>
      <div className={styles.chart}>
        <span className={styles.label}>sale</span>
        <CustomCheckbox />
      </div>
      <div className={styles.button}>
        <Button text="Apply" />
      </div>
    </div>
  );
};
export default Filters;
