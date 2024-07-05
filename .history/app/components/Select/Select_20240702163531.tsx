import React from "react";
import styles from "./Select.module.css";

interface Values  {
  value: string,
  title:string
}


interface Props {
  onCahnge: (item:string) => void
  values: Values[]
}

const Select = (props:Props) => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}>
        <div className={styles.fruit}> Fruits</div>
      </div>
      <div className={styles.selectWrapper}>
        <select className={styles.customSelect}>
          {
            props.values?.map(item => <option value={item.value}></option>)
          }
        </select>
      </div>
    </div>
  );
};
export default Select;
