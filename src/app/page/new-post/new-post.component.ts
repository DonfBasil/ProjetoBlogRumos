import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  constructor(private router: Router){}
  savePost(event: Event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém os valores dos campos do formulário
    const titleInput = document.getElementById('postTitle') as HTMLInputElement;
    const imageInput = document.getElementById('postImage') as HTMLInputElement;
    const contentInput = document.getElementById('postContent') as HTMLInputElement;

    const title = titleInput.value;
    const image = imageInput.files![0];
    const content = contentInput.value;

    // Cria um objeto post com os dados
    const post = {
      title: title,
      image: URL.createObjectURL(image),
      content: content
    };

    // Salva o post localmente (você pode modificar essa parte para salvar em um servidor)
    const savedPostsString = localStorage.getItem('posts');
    const savedPosts = savedPostsString ? JSON.parse(savedPostsString) : [];
    savedPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(savedPosts));

    // Limpa os campos do formulário
    if (titleInput && imageInput && contentInput) {
      titleInput.value = '';
      imageInput.value = '';
      contentInput.value = '';
    }

    // Adiciona o novo card na página principal
    this.addPostCard(post);

    // Redireciona para a rota desejada
    this.router.navigate([''], {
      state: { title: 'Blog Rumos Project' }
    });
  }

  addPostCard(post: { title: string; image: string; content: string }) {
    const container = document.getElementById('postContainer');

    // Cria os elementos HTML para o card
    const card = document.createElement('div');
    card.className = 'post-card';

    const image = document.createElement('img');
    image.src = post.image;
    image.alt = post.title;

    const title = document.createElement('h2');
    title.textContent = post.title;

    const content = document.createElement('p');
    content.textContent = post.content;

    // Adiciona os elementos ao card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(content);

    // Adiciona o card ao container na página principal
    if (container) {
      container.appendChild(card);
    }
  }

  loadPosts() {
    const savedPostsString = localStorage.getItem('posts');
    const savedPosts = savedPostsString ? JSON.parse(savedPostsString) : [];

    const postContainer = document.getElementById('postContainer');

    savedPosts.forEach((post: any) => {
      const postCard = this.createPostCard(post);
      postContainer?.appendChild(postCard);
    });
  }

  createPostCard(post: any) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col', 'col-p');

    const img = document.createElement('img');
    img.src = post.image;
    img.classList.add('img-thumbnail');
    img.alt = '...';
    cardDiv.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = post.title;
    cardDiv.appendChild(title);

    const content = document.createElement('p');
    content.textContent = post.content;
    cardDiv.appendChild(content);

    return cardDiv;
  }
}
