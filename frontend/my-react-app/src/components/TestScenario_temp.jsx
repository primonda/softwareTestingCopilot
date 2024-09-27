import React, { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Sample data
const addresses = [];
for (let i = 0; i < 5; i++) {
  addresses.push({
    streetAddress: "Electronic city",
    zipCode: "560100",
    city: "bangalore",
    state: "Karnataka",
  });
}

export default function TestScenario(props) {
  const [open, setOpen] = useState(-1);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Collapsed?</TableCell>
            <TableCell scope="header">Test Scenario</TableCell>
            <TableCell>Status</TableCell>
            {/* ... other table headers */}
          </TableRow>
        </TableHead>
        <TableBody>
          {addresses.map((address, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>
                  <IconButton
                    onClick={() => setOpen(index === open ? -1 : index)}
                  >
                    {index === open ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>{address.streetAddress}</TableCell>
                <TableCell>{address.zipCode}</TableCell>
                {/* ... other table cells */}
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>
                  <Collapse in={index === open}>
                    {/* Content to display when expanded */}
                    <Box p={2}>
                      <p>City: {address.city}</p>
                      <p>State: {address.state}</p>
                      {/* ... other content */}
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
