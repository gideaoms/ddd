export class Image {
  private readonly _id: string;
  private readonly _url: string;

  public constructor(image: { id: string; url: string }) {
    this._id = image.id;
    this._url = image.url;
  }

  public get id() {
    return this._id;
  }

  public get url() {
    return this._url;
  }
}
