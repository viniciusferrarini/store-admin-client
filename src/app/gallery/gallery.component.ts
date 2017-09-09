import {Component} from "@angular/core";
import {environment} from "../../environments/environment";
import {Headers, RequestOptions} from "@angular/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  uploadUrl = `${environment.proxy}/gallery/upload`;

  uploadedFiles: any[] = [];

  onUpload(event) {
    console.log(event);
    for (let file of event.files) {
      console.log(file);
      this.uploadedFiles.push(file);
    }
  }

  onBeforeUpload(event) {
    console.log(event);
    event.xhr.setRequestHeader('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  }

}
