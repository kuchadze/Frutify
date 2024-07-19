"use client";
import React, { useState } from "react";
import styles from "./addproduct.module.css";
import { useForm } from "react-hook-form";


interface CreatedProdactForm {
  name: string;
  price: number;
  sale?: number;
  categoryId?: number[];
  description: string
}


const AddProduct = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CreatedProdactForm>();

  const handleFileChange = (event: any) => {
    setFileName(
      event.target.files[0] ? event.target.files[0].name : "No file chosen"
    );
  };

  const onSubmit = () => {

  }
  return (
    <div className={styles.mainWrapper}>
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <h1>Add new fruit</h1>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input className={styles.input} type="text" id="name" {...register("name", { required: true })} />
        </div>
        <div className={styles.priceWrapper}>
          <div className={`${styles.formItem} ${styles.flexone}`}>
            <label className={styles.label} htmlFor="price">
              Price
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="number"
                id="price"
                defaultValue="0" {...register("price", {
                  
                })}
              />
              <span className={styles.money}>$</span>
            </div>
          </div>
          <div className={`${styles.formItem} ${styles.flexZero}`}>
            <label className={styles.label} htmlFor="sale">
              Sale
            </label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="number"
                id="sale"
                name="sale"
                value={"20"}
              />
              <span className={styles.money}>%</span>
            </div>
          </div>
        </div>

        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="file">
            Name
          </label>
          <div className={styles.customFileInput}>
            <input
              className={styles.fileInput}
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
            />
            <label className={styles.fileButton} htmlFor="file">
              Choose File
            </label>
            <span className={styles.fileName}>{fileName}</span>
          </div>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <textarea
            className={styles.input}
            id="description"
            {...register("description",
              {
                required: true
              }
            )}
          ></textarea>
        </div>
        <button className={styles.button} type="submit">
          Add fruit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
