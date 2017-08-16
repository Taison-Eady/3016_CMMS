import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Asset } from './asset';



@Injectable()
export class AssetService {

  private assetsURL = 'api/assets';  //URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getAssets(): Promise<Asset[]> {
    return this.http.get(this.assetsURL)
          .toPromise()
          .then(response => response.json().data as Asset[])
          .catch(this.handleError);
  }

  getAsset(id: number): Promise<Asset> {
    const url = `${this.assetsURL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Asset)
      .catch(this.handleError);
  }

  update(asset: Asset): Promise<Asset> {
    const url = `${this.assetsURL}/${asset.id}`;
    return this.http
      .put(url, JSON.stringify(asset), {headers: this.headers})
      .toPromise()
      .then(() => asset)
      .catch(this.handleError);
  }

  create(name: string): Promise<Asset> {
    return this.http
      .post(this.assetsURL, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Asset)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
  const url = `${this.assetsURL}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purposes only
    return Promise.reject(error.message || error);
  }
   
}