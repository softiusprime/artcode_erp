
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class calllogService {
  constructor(private http: HttpClient) { }

  

  save(Dto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/general-call', Dto);
  }

  getList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/general-call');
  }

  delete(Id): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/general-call/'+ Id);
  }

  update(Dto, Id): any {
    return this.http.put('http://yamistha.cloudjiffy.net/general-call/' + Id, Dto);
  }

  getById(Id): any {
    return this.http.get('http://yamistha.cloudjiffy.net/general-call/' + Id);
  }
}