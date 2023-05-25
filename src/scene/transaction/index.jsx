import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionQuery } from "state/api";
import Header from "components/Header";
import { useTheme } from "@mui/material";

const Transaction = () => {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const { data, isLoading } = useGetTransactionQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  console.log(data);

  return <div>Transaction</div>;
};

export default Transaction;
