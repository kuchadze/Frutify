import React from "react";
import styles from "./Select.module.css";
import FilterSelect from "../Filters/FilterSelect/FilterSelect";

interface Values  {
  value: string,
  title:string
}


interface Props {
  onCahnge?: (item:string) => void
  values: Values[]
}

const Select = (props:Props) => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}>
        <div className={styles.fruit}> Fruits</div>
      </div>
      <div className={styles.selectWrapper}>
        <FilterSelect className={styles.customSelect}>
          {
            props.values?.map(item => <option value={item.value}> {item.title} </option>)
          }
        </select>
      </div>
    </div>
  );
};
export default Select;
