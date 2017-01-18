import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../models';
import { AlbumService } from './../services/album/album.service';
import {CartService} from '../services/cart/cart.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {

  private album: Album;
  private paramSub: any;

  constructor(
    private _albumService: AlbumService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _cartService: CartService,
  ) { }

  ngOnInit() {
    this.paramSub = this._route.params.subscribe(params => {
      let id = +params['id']; //(+) converts string 'id' to a number
      this.getAlbum(id);
    });
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

  getAlbum(id: number) {
    this._albumService.getAlbum(id)
      .subscribe(album => {
        album.created = new Date(album.created.toString());
        this.album = album;
      },
      e => console.error(`${e}`));
  }

      addToCart(album: Album) {
        this._cartService.addCartItem(album)
            .subscribe((cart) => {
                this._router.navigate([`/cart`]);
        });
    }

}
