import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
} from "@chakra-ui/react";
import { useOrdersState } from "../../../hooks";
import { PlatformButton } from "../../../components/UI";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

export const DataTable = () => {
  const { t } = useTranslation();
  const { orders } = useOrdersState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      orders.reduce((acumulador, item) => {
        return acumulador + item.price;
      }, 0)
    );
  }, [orders]);

  return (
    <Box
      justifyContent="center"
      py="10px"
      px="54px"
      width={{ base: "100%", "2xl": "1300px" }}
    >
      <Heading fontWeight={600} as="h1">
        {t("ordenes.ordenes")}
      </Heading>
      <Box background="white" width="100&" mx="auto" px={8} py={8} mt={5}>
        <Flex justify="space-between">
          <Flex>
            <Text fontSize={18} fontWeight={700}>
              {t("general.total")}
            </Text>
            <Text ml={5} fontSize={18}>
              ${total}.00
            </Text>
          </Flex>
          <PlatformButton
            background="brightGreen"
            isDisabled={total === 0}
            onClick={() => toast(t("ordenes.compra_exitosa"))}
          >
            <Text color="black">{t("ordenes.comprar")}</Text>
          </PlatformButton>
        </Flex>
        <Table mt={8}>
          <Thead>
            <Tr>
              <Th>{t("ordenes.numero_orden")}</Th>
              <Th>{t("productos.sku")}</Th>
              <Th>{t("ordenes.nombre")}</Th>
              <Th>{t("productos.cantidad")}</Th>
              <Th>{t("productos.precio")}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order, index) => (
              <Tr key={index}>
                <Td>
                  <Text>{order.number}</Text>
                </Td>
                <Td>
                  <Text>{order.sku}</Text>
                </Td>
                <Td>
                  <Text>{order.name}</Text>
                </Td>
                <Td>
                  <Text>{order.quantity}</Text>
                </Td>
                <Td>
                  <Text>{order.price}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <ToastContainer />
    </Box>
  );
};
