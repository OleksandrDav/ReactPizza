import axios from "axios";

export default class PizzaService {
  static async getPizzas() {
    const responce = await axios.get(
      "https://66e1d39ac831c8811b5676b4.mockapi.io/items"
    );
    return responce;
  }
}
