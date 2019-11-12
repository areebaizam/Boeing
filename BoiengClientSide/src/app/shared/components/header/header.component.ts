import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'bng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems: Menu[]

  constructor(private menuService: MenuService) { 
    this.menuItems = menuService.menuItems;
  }

  ngOnInit() {
  }

}
