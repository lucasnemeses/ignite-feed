import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: '1',
    author: {
      avatar_url: 'https://github.com/lucasnemeses.png',
      name: 'Lucas Meneses',
      role: 'Developer @ Axenya',
    },
    content: [
      'Fala galeraa 👋',
      'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
    ],
    published_at: new Date('2024-03-06 8:44:00'),
  },
  {
    id: '2',
    author: {
      avatar_url: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @ Rocketseat',
    },
    content: [
      'Fala galeraa 👋',
      'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
    ],
    published_at: new Date('2024-03-06 9:40:00'),
  },
];

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              {...post}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
