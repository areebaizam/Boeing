import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';
import { homeMenu } from '../Data/menu.data'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuItems: Menu[]
  constructor() { 
    this.menuItems = homeMenu;
  }
}
