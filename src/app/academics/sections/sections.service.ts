import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private http: HttpClient) { }
  saveSection(sectionDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/section', sectionDto);
  }

  getAllSectionList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/section/');
  }

  deleteSection(sectionId): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/section/' + sectionId);
  }

  updateSection(sectionDto, sectionId): any {
    return this.http.put('http://yamistha.cloudjiffy.net/section/' + sectionId, sectionDto);
  }

  getSectionById(sectionId): any {
    return this.http.get('http://yamistha.cloudjiffy.net/section/' + sectionId);
  }

}

