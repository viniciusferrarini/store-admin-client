import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery.component";
import {FileUploadModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
  ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
