import React from "react";
import styles from "./Select.module.css";
import FilterSelect from "../Filters/FilterSelect/FilterSelect";



const Select = () => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}>
        <div className={styles.fruit}> Fruits</div>
      </div>
      <div className={styles.selectWrapper}>
          {
            props.values?.map(item => <option value={item.value}> {item.title} </option>)
          }
      </div>
    </div>
  );
};
export default Select;
