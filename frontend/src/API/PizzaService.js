import axios from "axios";

export default class PizzaService {
  static async getPizzas(categoryId, sortBy, searchValue, currentPage = 1, limit = 4) {
    const params = {
      page: currentPage,
      limit: limit,
      sortBy: sortBy,
    };
    if (categoryId !== 0) {
      params.category = categoryId;
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
