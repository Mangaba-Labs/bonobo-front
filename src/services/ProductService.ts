import { axios } from "./axios";

export class ProductService {
  static getCategories() {
    return axios.get("/categories");
  }
}
