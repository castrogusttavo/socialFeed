import { Post, PostType } from "../components/Post";
import { Sidebar } from "../components/Sidebar";
import styles from "../App.module.css";

import "../global.css";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @Rocketseat'
    },
    content: [
      {type:'paragraph', content: 'Fala galera, beleza?'},
      {type:'paragraph', content: 'Estou fazendo lives todos os dias às 20h, me acompanhem!'},
      {type:'link', content: 'https://twitch.tv/diego3g'},
    ],
    publishedAt: new Date('2024-04-30 00:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/castrogusttavo.png',
      name: 'Gusttavo Castro',
      role: 'CEO @Softis'
    },
    content: [
      {type:'paragraph', content: 'Fala galera, beleza?'},
      {type:'paragraph', content: 'Estamos com vagas abertas!'},
      {type:'link', content: 'https://linkedin.com/company/softis'},
    ],
    publishedAt: new Date('2024-04-30 00:00:00'),
  },
]

export function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              post={post}
            />
          )
          })}
        </main>
      </div>
    </>
  );
}
