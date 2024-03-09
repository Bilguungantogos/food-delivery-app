"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { sample } from "lodash";
import { faker } from "@faker-js/faker";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import Iconify from "@/components/iconify";
import Scrollbar from "@/components/scrollbar";

import TableNoData from "./table-no-data";
import UserTableRow from "./user-table-row";
import UserTableHead from "./user-table-head";
import TableEmptyRows from "./table-empty-rows";
import UserTableToolbar from "./user-table-toolbar";
import { emptyRows, applyFilter, getComparator } from "./functions";
import axios from "axios";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(["active", "banned"]),
  role: sample([
    "Leader",
    "Hr Manager",
    "UI Designer",
    "UX Designer",
    "UI/UX Designer",
    "Project Manager",
    "Backend Developer",
    "Full Stack Designer",
    "Front End Developer",
    "Full Stack Developer",
  ]),
}));

// ----------------------------------------------------------------------

export default function OrderView() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState<string[]>([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [allOrder, setAllOrder] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmM5OTE2NjVjMDI3NmY0YzUwNGMxYSIsImlhdCI6MTcwOTk1MzQ0NywiZXhwIjoxNzEwNTU4MjQ3fQ.CTQyOOM2omxpM82lYNoub5RvBk_T9_Tl_rIVC-SqaO0";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getOders = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/orders", config);
      console.log(data, "lafjkdsjlakfdldfjak;adfsjkl;dafjsk;l");
      setAllOrder(data.orders);
    } catch (error: any) {
      alert("Get Error - " + error.message);
    }
  };

  useEffect(() => {
    getOders();
  }, []);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Хэрэглэгчийн захиалгууд</Typography>
      </Stack>

      <Card sx={{}}>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: "unset" }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                numSelected={selected.length}
                headLabel={[
                  { id: "Ordername", label: "Order name" },
                  { id: "info", label: "Buyer info" },
                  { id: "payment", label: "Payment" },

                  { id: "isPaid", label: "Төлбөрийн төлөв", align: "center" },
                  { id: "deliverystate", label: "Delivery state" },
                  { id: "address", label: "Address" },
                  { id: "" },
                ]}
              />
              <TableBody>
                {allOrder?.map((row: any) => (
                  <UserTableRow
                    userId={row.user}
                    name={row.orderNo}
                    amount={row.payment.paymentAmount}
                    deliveryStatus={row.delivery.status}
                    address={row.address}
                    phone={row.address.phone}
                    avatarUrl={row.avatarUrl}
                    paymentStatus={row.payment.status}
                    selected={selected.indexOf(row.name) !== -1}
                  />
                ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
      </Card>
    </Container>
  );
}
