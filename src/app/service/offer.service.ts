import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../entity/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http : HttpClient) { }

  url="http://localhost:3000/offer"

  ajouterOffer(offer:Offer){
    return this.http.post(this.url,offer)
  }

  listerOffer(){
    return this.http.get<Offer[]>(this.url)
  }

  updatOffer(offer:Offer){
    return this.http.put<Offer>(this.url+"/"+offer.id,offer)
  }

  getOfferById(id:any){
    return this.http.get<Offer>(this.url+"/"+id)
   }

}
