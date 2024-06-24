import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { basicInfo } from '../../environments/environment';

@Injectable({
     providedIn: 'root'
})
export class BoardService {
     credentials: string = `?key=${basicInfo.key}&token=${basicInfo.token}`;
     boards: string = `${basicInfo.baseUrl}/boards/${this.credentials}`;
     
     constructor(private http: HttpClient) { }

     getAllBoards() {
          return this.http.get(this.boards);
     }
}
