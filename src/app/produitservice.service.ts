import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http'; 
import { catchError, map, tap } from 'rxjs/operators';

const BaseUrl = 'http://localhost:62659/api/Values/';
 const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

  constructor(private http : HttpClient) { }

  Addproduit(produit:any){
     
    return this.http.post(BaseUrl+'AddProduit',JSON.stringify(produit),httpOptions).pipe(
      tap((data: any)=> console.log(data)),
      map((response: any) =>{
        return {
          agent: response
        }
      }),
      catchError(async (data) => {
         console.log("erreur",data);
        //   if(data.status === 401){
        //     this.authService.logout();
        //     document.location.reload();
        //   }
      })
    )
  }

  getRapport(){
     
    return this.http.get(BaseUrl+'ImprimerListeProduit',httpOptions).pipe(
      tap((data: any)=> console.log(data)),
      map((response: any) =>{
        return {
          agent: response
        }
      }),
      catchError(async (data) => {
         console.log("erreur",data);
        //   if(data.status === 401){
        //     this.authService.logout();
        //     document.location.reload();
        //   }
      })
    )
  }

  FindproduitByLibelleOrDate(info:any){
     
    return this.http.post(BaseUrl+'FindProduit',JSON.stringify(info),httpOptions).pipe(
      tap((data: any)=> console.log(data)),
      map((response: any) =>{
        return {
          agent: response
        }
      }),
      catchError(async (data) => {
         console.log("erreur",data);
        //   if(data.status === 401){
        //     this.authService.logout();
        //     document.location.reload();
        //   }
      })
    )
  }
  
  
  UpdateProduit(info:any){
    
    return this.http.post(BaseUrl+'/UpdateProduit',JSON.stringify(info),httpOptions).pipe(
      tap((data: any)=> console.log(data)),
      map((response: any) =>{
        sessionStorage.setItem('agent', JSON.stringify(response));
        return {
          agent: response
          
        }
      }),
      catchError(async (data) => {
        // console.log("erreur");
        //   if(data.status === 401){
        //     this.authService.logout();
        //     document.location.reload();
        //   }
      })
    )
  }

  getListProduit(){
    
    return this.http.get(BaseUrl+'GetProduit',httpOptions).pipe(
      tap((data: any)=> console.log(data)),
      map((response: any) =>{
        return response
        
      }),
       catchError(async (data) => {
         console.log(data)
      //   console.log("erreur");
      //     if(data.status === 401){
      //       this.authService.logout();
      //       document.location.reload();
          // }
      })
    )
  }

  getProduitByid(id:any){ 
    return this.http.get(`${BaseUrl+'GetProduitById'}/${id}`,httpOptions).pipe(
      tap((data: any)=> console.log(data)),
      map((response: any) =>{
        return response
      }),
      catchError(async (data) => {
        console.log(data)
        // console.log("erreur");
        //   if(data.status === 401){
        //     this.authService.logout();
        //     document.location.reload();
        //   }
      })
    )
  }

  DeleteProduit(id:any){ 
    return this.http.delete(`${BaseUrl+'Deleteproduit'}/${id}`,httpOptions).pipe(
      tap((data: any)=> console.log(data)),
      map((response: any) =>{
        return response
      }),
      catchError(async (data) => {
        console.log(data)
        // console.log("erreur");
        //   if(data.status === 401){
        //     this.authService.logout();
        //     document.location.reload();
        //   }
      })
    )
  } 
}
