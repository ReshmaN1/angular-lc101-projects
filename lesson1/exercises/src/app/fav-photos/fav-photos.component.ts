import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos of cute animals';
  image1 = 'https://pbs.twimg.com/profile_images/704447240216051712/mTel0Q49_400x400.jpg';//'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i1.wp.com/www.dailycal.org/assets/uploads/2019/10/animals_wikimedia_cc-900x580.jpg';
  image3 = 'https://i.pinimg.com/originals/a6/94/c2/a694c2f6dac7497974c391c7ecb0e337.jpg';

  constructor() { }

  ngOnInit() {
  }

}
