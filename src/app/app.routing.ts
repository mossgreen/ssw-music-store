import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { GenresComponent } from './genres/genres.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'album/:id', component: AlbumComponent },
    {
        path: 'genres',
        component: GenresComponent,
        children: [
            { path: ':name', component: GenreDetailComponent }
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);