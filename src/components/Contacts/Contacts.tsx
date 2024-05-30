'use client';

import { useState } from 'react';
import Me from '../Me';
import { GitHubSvg, TelegramSvg, WhatsappSvg } from '../icons';
import styles from './Contacts.module.css';

function Contacts() {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsLinkHovered(true);
  };

  const handleMouseLeave = () => {
    setIsLinkHovered(false);
  };

  return (
    <section className="section">
      <div className="wrapper stack" data-stack-type="big">
        <h2 className="h2 underline" id="contact">
          Contact
        </h2>

        <div className={styles.content}>
          <div className={`${styles['content-info']} | stack`}>
            <h3 className="h3"> I am up for a chat</h3>
            <p>
              So{' '}
              <a
                href="mailto:akherousin94@gmail.com"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                send me an email
              </a>{' '}
              at akherousin94@gmail.com
              <br />
              Or find me on:
            </p>

            <ul className={`${styles['links-list']} | stack`}>
              <li>
                <a
                  href="https://wa.me/+996558803809"
                  className={`${styles.link} | click-target-helper`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <WhatsappSvg /> Whatsapp
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/sktoseme"
                  className={`${styles.link} | click-target-helper`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <TelegramSvg /> Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Akherousin"
                  className={`${styles.link} | click-target-helper`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <GitHubSvg /> Github
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.character}>
            <Me mouthOpened={isLinkHovered} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
