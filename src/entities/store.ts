import { Product } from "./product";

export class Store {
  private readonly _id: string;
  private readonly _products: Product[];

  public constructor(store: { id: string; products: Product[] }) {
    this._id = store.id;
    this._products = store.products;
  }

  public get id() {
    return this._id;
  }

  public hasProducts() {
    return this._products.length > 0;
  }

  public addProduct(product: Product) {
    return new Store({
      id: this._id,
      products: [...this._products, product],
    });
  }

  public removeProduct(productToRemove: Product) {
    return new Store({
      id: this._id,
      products: this._products.filter((product) => {
        return product.id !== productToRemove.id;
      }),
    });
  }
}
