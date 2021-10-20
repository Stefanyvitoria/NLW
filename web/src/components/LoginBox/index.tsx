import { VscGithubInverted } from 'react-icons/vsc';
import styles from './styles.module.scss';

export function LoginBox() {
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e Compartilhe sua mensagem</strong>
            <a href="#" className={styles.signWithGithub}>
                <VscGithubInverted size="24"/>
                Entrar com github
            </a>
        </div>
    )
}