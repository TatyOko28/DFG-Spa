import React from 'react';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface User {
  name: string;
  phone: string;
  email: string;
}

interface CardProps {
  user: User;
  onClick: () => void;
}

class Card extends React.Component<CardProps> {
  render() {
    const { user, onClick } = this.props;

    return (
      <div className={styles.card} onClick={onClick}>
        <div >
          <h2>{user.name}</h2>
        </div>
        <div className={styles.cardBody}>
          <p><FontAwesomeIcon icon={faPhone} /> {user.phone}</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> {user.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
