import { Component, OnInit } from '@angular/core';
import { FlickerResponse } from './../model/FlickerResponse';
import { FlickrService } from '../flickr.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  flickerResponse:  any[] = [];
  constructor(private flickrService: FlickrService) { }
  ngOnInit(): void {
    this.flickrService.getPhotos('car').subscribe( response => {
            this.flickerResponse = response;
          }, error => {
            console.log(error);
          });
        }
  }

