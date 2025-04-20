"use client";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RootState } from "@/store/store";
import { increment, decrement } from "@/store/features/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
      <Typography variant="h5">{count}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
    </Box>
  );
}
