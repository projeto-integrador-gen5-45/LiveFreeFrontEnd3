import { User } from './../model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token ={
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  entrar(userLogin:UserLogin):Observable<UserLogin>{
        return this.http.post<UserLogin>('https://livefreebackend.herokuapp.com/usuarios/logar',userLogin)
  }

  cadastrar(user:User):Observable<User>{
        return this.http.post<User>('https://livefreebackend.herokuapp.com/usuarios/cadastrar',user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://livefreebackend.herokuapp.com/usuarios/${id}`,this.token)
  }

  atualizar(user: User): Observable<User>{
    return this.http.put<User>('https://livefreebackend.herokuapp.com/usuarios/atualizar', user,this.token)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  adm(){
    let ok: boolean = false

    if (environment.tipo == 'admin'){
      ok = true
    }

    return ok
  }
  prof(){
    let ok: boolean = false

    if (environment.tipo == 'profissional'){
      ok = true
    }

    return ok
  }


}
