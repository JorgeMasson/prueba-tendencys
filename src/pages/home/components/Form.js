import React, { useState, useEffect } from "react";
import { useOrdersState, useProductsState } from "../../../hooks";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  HStack,
  VStack,
  Select,
} from "@chakra-ui/react";
import { PlatformButton } from "../../../components/UI";

export const Form = () => {
  const { t } = useTranslation();
  const { setOrderState } = useOrdersState();
  const { products } = useProductsState();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      var price = parseFloat(product.price);
      setTotal(price * quantity);
    }
  }, [product, quantity]);

  const handleSelect = (selectedOption) => {
    setProduct(
      products.find((item) => item.id === selectedOption.target.value)
    );
  };

  const handleSubmit = () => {
    setOrderState({
      sku: product.sku,
      name: product.name,
      number: product.number,
      quantity: quantity,
      price: total,
    });
    toast(t("ordenes.orden_exitosa"));
  };

  return (
    <Box py="10px" px="54px" width="100%">
      <Heading fontWeight={600} as="h1">
        {t("ordenes.nueva_orden")}
      </Heading>
      <Flex p={10} mt={5} background="white" flexDirection="column">
        <HStack spacing="50px">
          <Box>
            <VStack spacing="10px" alignItems="flex-start">
              <Text py={2} w={150}>
                {t("productos.producto")}
              </Text>
              <Text py={2}>{t("productos.sku")}</Text>
              <Text py={2}>{t("productos.cantidad")}</Text>
              <Text py={2}>{t("productos.precio")}</Text>
            </VStack>
          </Box>
          <Box>
            <VStack spacing="10px">
              <Select
                w={300}
                rounded="none"
                placeholder={t("productos.selecciona_producto")}
                onChange={handleSelect}
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </Select>
              <Input
                w={300}
                type="text"
                rounded="none"
                isDisabled
                value={
                  Object.keys(product).length > 0 || !product ? product.sku : ""
                }
              />
              <Text>{product.length > 0 && product.sku}</Text>
              <Input
                w={300}
                rounded="none"
                type="number"
                isDisabled={Object.keys(product).length === 0}
                defaultValue={0}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Input
                w={300}
                rounded="none"
                type="text"
                isDisabled
                value={total}
              />
            </VStack>
          </Box>
        </HStack>
        <PlatformButton
          mt={10}
          w={150}
          background="brightGreen"
          isDisabled={total === 0}
          onClick={handleSubmit}
        >
          <Text color="black">{t("general.guardar")}</Text>
        </PlatformButton>
      </Flex>
      <ToastContainer />
    </Box>
  );
};
