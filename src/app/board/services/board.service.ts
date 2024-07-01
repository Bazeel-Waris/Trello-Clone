import { Injectable } from '@angular/core';
import { basicInfo } from '../../../environments/environment'
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  allBoards: string = `${basicInfo.baseUrl}members/me/boards${basicInfo.credentials}`;

  constructor(private http: HttpClient) { }

  getAllBoards() {
    return this.http.get(this.allBoards);
  }

  getSingleBoard(id: string) {
    let singleBoardApi = `${basicInfo.baseUrl}boards/${id}${basicInfo.credentials}`;
    return this.http.get(singleBoardApi);
  }

  updateABoard(boardId: string, updatedData: string) {
    let updateBoardApi = `${basicInfo.baseUrl}boards/${boardId}`;
    
    let payload = { };

    let params = new HttpParams()
    .set("name",updatedData)
    .set("key",'e3e6cd7361f26d29b658321dd3a5f2ae')
    .set("token",'ATTAd83469947601f7fd977d4b1e8652af933b6f0d8a8707b5d3654e736f5ddd9fc2EE967AF6');

    return this.http.put(updateBoardApi, payload, {params: params});
  }

  getListsOnABoard(boardId: string) {
    let listsApi = `${basicInfo.baseUrl}boards/${boardId}/lists${basicInfo.credentials}`
    return this.http.get(listsApi);
  }

  getCardsInAList(listId: string) {
    let cardsApi = `${basicInfo.baseUrl}lists/${listId}/cards${basicInfo.credentials}`;
    return this.http.get(cardsApi);
  }
}
