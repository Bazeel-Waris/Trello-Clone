import { Injectable } from '@angular/core';
import { basicInfo } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
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
    let updateBoardApi = `${basicInfo}boards/${boardId}${basicInfo.credentials}`;
    let params = {
      name: updatedData,
    }
    return this.http.put(updateBoardApi, {params: params});
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
