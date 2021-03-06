import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { Observable } from "rxjs/Rx";
import { EncomendaDTO } from "../models/encomenda.dto";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { LoadingController } from "ionic-angular";

@Injectable()
export class EncomendaService {

    constructor(
        public http: HttpClient,
        public storage: StorageService) {
    }

    findAll() : Observable<EncomendaDTO[]>  {

        return this.http.get<EncomendaDTO[]>(`${API_CONFIG.baseUrl}/encomendas`, {headers: {"Authorization": "Bearer " + this.storage.getLocalUser().token}});
    }

    findLoggedUserEncomendas(){
        console.log(this.storage.getLocalUser());
        return this.storage.getLocalUser().cliente.encomenda;
    }

    findByCodigo(codigo: string): Observable<EncomendaDTO>{
        return this.http.get<EncomendaDTO>(`${API_CONFIG.baseUrl}/encomendas/${codigo}`, {headers: {"Authorization": "Bearer " + this.storage.getLocalUser().token}});
    }

    

}