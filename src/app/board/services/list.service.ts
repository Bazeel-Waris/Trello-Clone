import { Injectable } from '@angular/core';
import { basicInfo } from '../../../environments/environment'
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  private listApi: string = `${basicInfo.baseUrl}lists`;

  constructor(private http: HttpClient) { }

  createList(boardId: string, listName: string) {
    let payload = {
      "idBoard": boardId,
      "name": listName,
      "key": "e3e6cd7361f26d29b658321dd3a5f2ae",
      "token": "ATTAd83469947601f7fd977d4b1e8652af933b6f0d8a8707b5d3654e736f5ddd9fc2EE967AF6"
    };

    return this.http.post(this.listApi, payload);
  }
  
  updateList(listId: string, listName: string) {
    let payload = {
      "name": listName,
      "key": "e3e6cd7361f26d29b658321dd3a5f2ae",
      "token": "ATTAd83469947601f7fd977d4b1e8652af933b6f0d8a8707b5d3654e736f5ddd9fc2EE967AF6"
    };
// console.log(payload)
    return this.http.put(`${this.listApi}/${listId}`, payload);
  }
}
