import React from "react";
import styles from "./Select.module.css";
import FilterSelect from "../Filters/FilterSelect/FilterSelect";

interface Values  {
  value: string,
  title:string
}




const Select = (p) => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}>
        <div className={styles.fruit}> Fruits</div>
      </div>
      <div className={styles.selectWrapper}>
        <FilterSelect values={[
            {
              value: "low-to-high",
              title: "price low to high"
            },
            {
              value: "high-to-low",
              title:"price high to low"
            }
        ]} />
          
      </div>
    </div>
  );
};
export default Select;
