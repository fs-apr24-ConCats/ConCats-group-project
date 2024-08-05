import React from 'react';
import classes from './Contacts.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import IgorPhoto from './ImagePersonalCard/PhotoIgor.jpg';
import ArtemPhoto from './ImagePersonalCard/PhotoArtem.jpg'
import FaizaPhoto from './ImagePersonalCard/PhotoFaiza.jpg'
import OleksiiPhoto from './ImagePersonalCard/PhotoOleksii.jpg';
import SofiiaPhoto from './ImagePersonalCard/PhotoSofiia.jpg';


const cardData = [
  { photo: IgorPhoto, name: 'Igor Omelianenko', quote: '(c)Прогрес не зупинити.', links: [
    { href: 'https://www.linkedin.com/in/igor-omelianenko-a959b124a/', text: 'Linkedin' },
    { href: 'mailto:omelianenko.igor.work@gmail.com', text: 'Gmail' },
    { href: 'https://t.me/Om1gSe', text: 'Telegram' },
  ] },
  { photo: ArtemPhoto, name: 'Artem Kasprukov', quote: '(c)Програмування: мистецтво перетворення кави на код.', links: [
    { href: 'https://www.linkedin.com/in/artem-kasprukov-b99a97213/', text: 'Linkedin' },
    { href: 'mailto:kasprukov.artem@gmail.com', text: 'Gmail' },
    { href: 'https://t.me/KasperArtem', text: 'Telegram' },
  ] },
  { photo: FaizaPhoto, name: 'Faiza Hamid', quote: '(c)Талант — це наполеглива праця', links: [
    { href: 'https://www.linkedin.com/in/faiza-hamid-8d/', text: 'Linkedin' },
    { href: 'mailto:hamid.faiza811@gmail.com', text: 'Gmail' },
    { href: 'https://t.me/fai_ham', text: 'Telegram' },
  ] },
  { photo: OleksiiPhoto, name: 'Oleksii Knihin', quote: '(c)Поводься з людьми так, як хочеш, щоб вони чинили з тобою', links: [
    { href: 'https://www.linkedin.com/in/oleksii-knihin/', text: 'Linkedin' },
    { href: 'mailto:oleksii.knihin@gmail.com', text: 'Gmail' },
    { href: 'https://t.me/OleksiiKnihin', text: 'Telegram' },
  ] },
  { photo: SofiiaPhoto, name: 'Sofiia Priyemska', quote: '(c)Навчання - це не про час. Навчання це про зусилля', links: [
    { href: 'https://www.linkedin.com/in/%D1%81%D0%BE%D1%84%D1%96%D1%8F-%D0%BF%D1%80%D0%B8%D1%94%D0%BC%D1%81%D1%8C%D0%BA%D0%B0-5263902bb/?originalSubdomain=ua', text: 'Linkedin' },
    { href: 'mailto:sofiia.priyemska.work@gmail.com', text: 'Gmail' },
    { href: 'https://t.me/priemssonia', text: 'Telegram' },
  ] },
];

export const Contacts: React.FC = () => {
  return (
    <div className={classes.Contacts}>
      <Breadcrumbs />
      <>
        <div>
          <h1 className={classes.contactsTitle}>Contacts</h1>
          <h1 className={classes.contactsTitleH}>ConCats()🚀</h1>
        </div>
        <div className={classes.contacts__container}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${classes.personalCard} ${index % 2 === 1 ? classes.reverse : ''}`}
            >
              <div className={classes.blockImage}>
                <img
                  className={classes.personalImage}
                  src={card.photo}
                  alt="personalImage"
                />
              </div>
              <div className={classes.personalInfo}>
                <div className={classes.personalNameBlock}>
                  <h2>{card.name}</h2>
                </div>
                <div className={classes.personalQuote}>
                  <p>
                    <u>{card.quote}</u>
                  </p>
                </div>
                {card.links.map((link, linkIndex) => (
                  <div className={classes.blockPersonalLink} key={linkIndex}>
                    <a
                      className={classes.personalLink}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};
