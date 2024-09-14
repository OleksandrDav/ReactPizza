import axios from "axios";

export default class PizzaService {
  static async getPizzas(category, sortBy, searchValue) {
    const params = {
      sortBy: sortBy,
    };
    if (category !== 0) {
      params.category = category;
    }
    if (searchValue) {
      params.search = searchValue;
    }
    const response = await axios.get(
      "https://66e1d39ac831c8811b5676b4.mockapi.io/items",
      {
        params: params,
      }
    );

    return response;
  }
}
