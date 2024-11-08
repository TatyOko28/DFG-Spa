import React from 'react';
import styles from './Popup.module.scss'; // Assurez-vous d'avoir un fichier Popup.module.scss avec des styles appropriés

type User = {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
};

type PopupProps = {
  user: User;
  onClose: () => void;
};

class Popup extends React.Component<PopupProps> {
  // Gestionnaire pour arrêter la propagation de l'événement de clic
  handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  render() {
    const { user, onClose } = this.props;

    return (
      <div className={styles.popupOverlay} onClick={onClose}>
        {/* Ajout de la propagation de l'événement de clic */}
        <div className={styles.popup} onClick={this.handlePopupClick}>
          <button className={styles.closeButton} onClick={onClose}>×</button>
          <h2>{user.name}</h2>
          <ul>
            <li><strong>Phone:</strong> {user.phone}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Address:</strong> {user.address}</li>
            <li><strong>Position:</strong> {user.position_name}</li>
            <li><strong>Department:</strong> {user.department}</li>
            <li><strong>Hire Date:</strong> {user.hire_date}</li><br />
            <li className={styles.additionalInfo}>
              <p><strong>Дополнительная информация:</strong></p>
              Разработчики используют текст в качестве заполнителя макета страницы. Разработчики используют текст в качестве заполнителя макета страницы.
            </li>
          </ul>           
        </div>
      </div>
    );
  }
}

export default Popup;
