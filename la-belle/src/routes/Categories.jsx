import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useId, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function SelectCategory() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  const id = useId();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/categories").then((response) => {
      response.json().then((data) => {
        setData(data);
        setLoading(false);
      });
    });
  }, []);

  const categories = data;
  
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <FormControl fullWidth>
            <InputLabel htmlFor={id}>Categoria</InputLabel>
            <Select
              id={id}
              label="Categoria"
              onChange={(event) => {
                const category = event.target.value;
                navigate(`/categories/${category}`);
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
          <Outlet />
        </>
      )}
    </>
  );
}
