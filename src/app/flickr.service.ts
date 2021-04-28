import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlickerResponse } from './model/FlickerResponse';
import { Item } from './model/Item';
import { HttpClient } from '@angular/common/http';
import { environment} from './../environments/environment';
import { map } from 'rxjs/operators';
import { parseHostBindings } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  constructor(private http: HttpClient) { }
  getPhotos(keyword: string): Observable<Array<{url: string, title: string}>>{ 
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const flickerUrl = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=20`;    
        return this.http.get(url + flickerUrl).pipe(map
          ((res: any) => {
            const urlArr: any = [];
            res.photos.photo.forEach((ph : Item) => {
              const photoObj = {
              url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}.jpg`,
              title: ph.title.length > 30 ? ph.title.substring(0,30).concat('...') : ph.title
            };
            if(photoObj.title !== '' && photoObj.url !== '') {
            urlArr.push(photoObj);
            }
          });
          return urlArr;
        }));
      }
}
