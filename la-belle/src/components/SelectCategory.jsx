import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useId, useState } from "react";

export default function SelectCategory() {
  const [category, setCategory] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  const id = useId();

  useEffect(() => {
    if(!data) {
      setLoading(true)
    }
    
    fetch("https://fakestoreapi.com/products/categories").then((response) => {
      response.json().then((data) => {
        setData(data);
      });
    });
    setLoading(false)
  }, [data]);

  const categories = data
    //debugger
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {loading && <p>Loading...</p>}
      {!loading &&
        <FormControl fullWidth>
          <InputLabel htmlFor={id}>Categoria</InputLabel>
          <Select
            id={id}
            label="Categoria"
            onChange={(event) => {
              const value = event.target.value
              console.log(value)
            }}
          >
            {categories?.map((c, index) => {
              return (
                <MenuItem key={index} value={c}>
                  {c}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl> 
      }
    </>  
  );
}
