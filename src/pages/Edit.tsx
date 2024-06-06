import { Avatar } from '../components/Avatar';
import styles from './Edit.module.css';

export function EditPerfil() {
  return (
    <>
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/castrogusttavo.png" />
          <div className={styles.authorInfo}>
            <strong>Gusttavo Castro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <div className={styles.description}>
          <p>
          Gusttavo Castro is a Brazilian designer and programmer. He currently resides in Santos, São Paulo, where he is the founder and CEO. His dedication to knowledge sharing has led him to delve into various technological fields. His passion for programming and his eagerness to learn have made him one of the programmers of the 'Digital Literacy' project at CNPq. Gusttavo has developed multiple software programs, delivered lectures, and studied User Experience at major tech companies such as Google and IBM.
          </p>

          <div className={styles.stackInfo}>
            <strong>Stack</strong>
            <div className={styles.stackIcon}>
              <span><img src="https://xesque.rocketseat.dev/platform/tech/reactjs.svg" alt="" /></span>
              <span><img src="https://xesque.rocketseat.dev/platform/tech/tailwind.svg" alt="" /></span>
              <span><img src="https://xesque.rocketseat.dev/platform/tech/javascript.svg" alt="" /></span>
              <span><img src="https://xesque.rocketseat.dev/platform/tech/typescript.svg" alt="" /></span>
              <span><img src="https://xesque.rocketseat.dev/platform/tech/nextjs.svg" alt="" /></span>
            </div>
          </div>
        </div>
      </header>
    </article>
    </>
  );
}
