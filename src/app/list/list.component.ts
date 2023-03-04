import { Component, OnInit } from '@angular/core';
import { Offer } from '../entity/offer';
import { OfferService } from '../service/offer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  offerList:Offer[]=[]
  chercher!:string
  constructor(private offerService:OfferService) { }

  ngOnInit(): void {
    this.offerService.listerOffer().subscribe({
      next:(data)=>this.offerList=data,
      error:(error)=>console.log(error),
      complete:()=>console.log("la liste des offers")
    })
  }

  chercherOffer(){
    this.offerService.listerOffer().subscribe({
      next:(data)=>{this.offerList=this.offerList.filter((p)=>p.location===this.chercher)},
      error:(error)=>console.log(error),
      complete:()=>console.log("getit")
    })
  }

  changerState(offer:Offer){
    offer.state = !offer.state;
    this.offerService.updatOffer(offer).subscribe({
      next: (data)=>{
        let index=this.offerList.findIndex((p)=>p.id === offer.id)
        this.offerList[index] = data}
  })

}
}

