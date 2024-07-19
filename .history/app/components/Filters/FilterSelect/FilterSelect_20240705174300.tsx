import styles from "./FiltersSelect.module.css";



interface Values  {
  value: string,
  title:string
}


interface Props {
  onCahnge?: (item:string) => void
  values: Values[]
}


const FilterSelect = (props:Props) => {
  const onSelectChange = (e:React.ChangeEvent) => {
    props.onCahnge(e.target.value)
}
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <select className={styles.customSelect}onChange={}>
         {
          props.values?.map(item => <option value={item.value}>{item.title}</option>)
         }
        </select>
      </div>
    </div>
  );
};
export default FilterSelect;
