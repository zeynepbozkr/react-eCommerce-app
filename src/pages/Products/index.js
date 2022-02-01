import React from "react";
import Card from "../../components/Card";
import { Grid, Box, Image } from "@chakra-ui/react";

function Products() {
  return (
    <div>
      <Grid templateColumns="repeat(3,1fr" gap={4}>
        <Card />
      </Grid>
    </div>
  );
}

export default Products;
