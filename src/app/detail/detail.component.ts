import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../entity/offer';
import { OfferService } from '../service/offer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activated:ActivatedRoute,private offerService:OfferService) { }
    id !:number
    offer :Offer=new Offer
  ngOnInit(): void {
    this.id=this.activated.snapshot.params['id']
    this.offerService.getOfferById(this.id).subscribe({
      next:(data)=>this.offer=data,
      error:(error)=>console.log(error),
      complete:()=>console.log("la des offers")
    })
  }

}
