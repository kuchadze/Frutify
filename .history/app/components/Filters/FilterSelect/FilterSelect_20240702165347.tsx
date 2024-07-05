import styles from "./FiltersSelect.module.css";



interface Values  {
  value: string,
  title:string
}


interface Props {
  onCahnge?: (item:string) => void
  values: Values[]
}

const FilterSelect = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <select className={styles.customSelect}>
         {
          
         }
        </select>
      </div>
    </div>
  );
};
export default FilterSelect;
