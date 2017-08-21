import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {MensagemParams} from "./mensagem.params";

@Injectable()
export class MensagemService {

  constructor() {}

  subject: Subject<MensagemParams> = new Subject<MensagemParams>();

  send(type: string, msg: string, desc: string) {
    this.subject.next(new MensagemParams(type, msg, desc));
  }

  observable(): Observable<MensagemParams> {
    return this.subject.asObservable();
  }

}
