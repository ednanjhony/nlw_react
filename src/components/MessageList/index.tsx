import styles from './styles.module.scss';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <h1>DOWHILE 2021</h1>

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/ednanjhony.png" alt="Diego Fernandes" />
            </div>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/ednanjhony.png" alt="Diego Fernandes" />
            </div>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/ednanjhony.png" alt="Diego Fernandes" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}