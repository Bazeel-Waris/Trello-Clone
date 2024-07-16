import { Injectable } from '@angular/core';
import { basicInfo } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardApi: string = `${basicInfo.baseUrl}cards`;

  constructor(private http: HttpClient) { }

  createCard(listId: string, cardName: string) {
    let payload = {
      "idList": listId,
      "name": cardName,
      "key": "e3e6cd7361f26d29b658321dd3a5f2ae",
      "token": "ATTAd83469947601f7fd977d4b1e8652af933b6f0d8a8707b5d3654e736f5ddd9fc2EE967AF6"
    };
    // console.log(payload);
    return this.http.post(this.cardApi, payload);
  }

}
