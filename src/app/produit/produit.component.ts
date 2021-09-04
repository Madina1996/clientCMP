import { ProduitserviceService } from './../produitservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  libelle:any;
  description:any;
  pu:any;
  quantite :any;
  id :any = 0;
  datePeremption :any;
  ListeProd:any = [];
  constructor(private service :ProduitserviceService ) { }

  ngOnInit(): void {
    this.getListproduit();
  }

  Addproduit(){
    if(this.id === 0){
      var data = {
        "id":this.id,
        "libelle":this.libelle,
        "description":this.description,
        "pu":this.pu,
        "quantite":this.quantite,
        "datePeremption":this.datePeremption, 
      }
  
      this.service.Addproduit(data)
        .subscribe((data)=>{
          this.id = 0; 
          this.libelle = "";
          this.description = "";
          this.pu = 0;
          this.quantite = 0; 
          this.getListproduit()
        })
    }else{

      var data1 = {
        "id":this.id,
        "libelle":this.libelle,
        "description":this.description,
        "pu":this.pu,
        "quantite":this.quantite,
        "datePeremption":this.datePeremption, 
      }
  
      this.service.UpdateProduit(data1)
        .subscribe((data)=>{
          this.id = 0; 
          this.libelle = "";
          this.description = "";
          this.pu = 0;
          this.quantite = 0;  
          this.getListproduit()
        })

    }
     
  }

  getListproduit(){
    this.service.getListProduit()
      .subscribe((data)=>{
       console.log(data)
       this.ListeProd = data; 
      }) 
  }

  updateProduit(item:any){
          this.id = item.Idproduit; 
          this.libelle = item.Libelle;
          this.description = item.Description;
          this.pu = item.Pu;
          this.quantite = item.Quantite; 
          this.datePeremption = item.DatePeremption;
  }
 

  DeleteproduitProduit(item:any){
    this.service.DeleteProduit(item.Idproduit)
      .subscribe((data)=>{
       console.log(data) ;
       this.getListproduit();
      }) 
  }

}
