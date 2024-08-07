import { useEffect, useState } from "react";
import Button from "../Button/Button";
import CustomCheckbox from "./CustomCheckbox/CustomChekbox";
import FilterSelect from "./FilterSelect/FilterSelect";
import styles from "./Filters.module.css";
import axios from "axios";

const Filters = () => {
    const [sort,setSort] = useState("asc")
    const [category,setCategory] = useState([])
    console.log(category);
    

    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/categories?sort=${sort}`)
      .then(result => (
        result.data.map((item) => {
          
        })
        setCategory(result.data)
      )) 
    }, [])

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.title}>Filter</div>
      <div className={styles.chart}>
        <span className={styles.label}>Category</span>
        <FilterSelect values={[
          {
            value: "all",
            title:"all"
          },
          {
            value:"apple",
            title:"Apple"
          }
        ]} />
      </div>
      <div className={styles.chart}>
        <span className={styles.label}>Price</span>
        <div className={styles.inputWrapper}>
          <input className={styles.input} type="number"  placeholder="Min"/>
          <input className={styles.input} type="number" placeholder="Max"/>
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
