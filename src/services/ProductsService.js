import env from "react-dotenv";
import { useTranslation } from "react-i18next";

export const useProductsService = () => {
  const { t } = useTranslation();

  const getProducts = async () => {
    try {
      const response = await fetch(`${env.API_BASE}/api/v2/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${env.TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(t("errores.error"));
      }

      return response.json();
    } catch (error) {
      throw new Error(t("errores.ordenes"), error);
    }
  };

  return { getProducts };
};
