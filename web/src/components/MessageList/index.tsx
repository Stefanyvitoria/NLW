import { api } from "../../services/api";
import styles from "./style.module.scss";
import logoImg from "../../assets/logo.svg";
import { useEffect, useState } from "react";

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageList() {

    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        //chamada a apis de
        api.get<Message[]>('messages/Last3').then(response => {
            // console.log(response.data);
            setMessages(response.data)
        })
    }, [])

    return (
        <div className={styles.messageListWrapper}>
            <img className={styles.logo} src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>

                {messages.map(message => {
                    return (
                        <li key={message.id} className={styles.message}>
                            <p className={styles.messageContent}>
                                {message.text}
                            </p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={message.user.avatar_url} alt="Stefany Izidio" />
                                </div>
                                <span>
                                    {message.user.name}
                                </span>
                            </div>
                        </li>
                    );
                })}



            </ul>
        </div>
    )
}