// navbar.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageTitle: string = 'Blog Rumos Project';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setPageTitle();
      }
    });
  }

  setPageTitle() {
    const currentRoute = this.router.routerState.snapshot.root;
    const title = this.getPageTitleFromRoute(currentRoute);
    this.pageTitle = title || 'Blog Rumos Project';
  }

  getPageTitleFromRoute(route: any): string | null {
    if (route.firstChild) {
      return this.getPageTitleFromRoute(route.firstChild);
    }

    if (route.data && route.data.title) {
      return route.data.title;
    }

    return null;
  }
}



// Obtém o elemento do navbar
var navbar = document.querySelector('app-navbar');

// Verifica se o navbar foi encontrado antes de prosseguir
if (navbar !== null) {
  // Obtém a altura do navbar
  var navbarHeight = (navbar as HTMLElement).offsetHeight;

  // Função para atualizar a posição do navbar com base no scroll da página
  function updateNavbarPosition() {
    if (window.scrollY >= navbarHeight) {
      navbar?.classList.add('parallax');
    } else {
      navbar?.classList.remove('parallax');
    }
  }

  // Chama a função ao carregar a página e durante o scroll
  window.addEventListener('load', updateNavbarPosition);
  window.addEventListener('scroll', updateNavbarPosition);
}




