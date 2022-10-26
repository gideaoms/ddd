import { Image } from "./image";

export class Product {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _images: Image[];

  public constructor(product: { id: string; name: string; images: Image[] }) {
    this._id = product.id;
    this._name = product.name;
    this._images = product.images;
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get images() {
    return this._images;
  }

  public hasImages() {
    return this._images.length > 0;
  }

  public addImage(image: Image) {
    if (this._canAddMoreImages()) {
      throw new Error("You have reached the maximum quantity of images");
    }
    return new Product({
      id: this._id,
      name: this._name,
      images: [...this._images, image],
    });
  }

  public removeImage(imageToRemove: Image) {
    return new Product({
      id: this._id,
      name: this._name,
      images: this._images.filter((image) => {
        return image.id !== imageToRemove.id;
      }),
    });
  }

  private _canAddMoreImages() {
    return this._images.length < 10;
  }
}
