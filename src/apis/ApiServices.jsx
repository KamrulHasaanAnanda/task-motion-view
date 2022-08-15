import axios from "axios";
const ApiServices = {};
ApiServices.login = async (data) => {
  const response = await axios.post("login", data);
  return response.data;
};
ApiServices.getProduct = async () => {
  const response = await axios.get("product-is-here-caught-me");
  return response.data;
};

export default ApiServices;
