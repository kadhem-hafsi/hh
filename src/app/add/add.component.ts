import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../entity/offer';
import { OfferService } from '../service/offer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  offer : Offer = new Offer()

  constructor(private router:Router,private offerService:OfferService) { }

  ngOnInit(): void {
  }

  ajouter(){
    this.offerService.ajouterOffer(this.offer).subscribe({
      next:(data)=>this.router.navigateByUrl("/list"),
      error:(error)=>console.log(error),
      complete:()=>console.log("offer added")
    })

  }
}
