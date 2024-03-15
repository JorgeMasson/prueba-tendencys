import React, { useState, useEffect } from "react";
import { PlatformButton, Page } from "../../components/UI";
import { useTranslation } from "react-i18next";
import { Box, Flex } from "@chakra-ui/react";
import { useProductsState } from "../../hooks";
import { Form, DataTable } from "./components";

export default function Home() {
  const { t } = useTranslation();
  const [isForm, setIsForm] = useState(false);
  const { products, loadProducts } = useProductsState();

  useEffect(() => {
    loadProducts().then(() => console.log(products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page
      main={
        <>
          <Box w="100%" margin="auto" px={8} py={8} mt={12}>
            <Flex justifyContent="space-between" alignItems="center">
              <PlatformButton
                w="150px"
                secondary
                onClick={() => setIsForm(!isForm)}
              >
                {isForm ? t("general.regresar") : t("general.nueva_promocion")}
              </PlatformButton>
            </Flex>
          </Box>
          {isForm ? <Form /> : <DataTable />}
        </>
      }
    />
  );
}
