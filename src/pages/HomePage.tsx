import React, { Component } from 'react';
import Card from '../components/Card/Card';
import Popup from '../components/Popup/Popup';
import SearchBar from '../components/SearchBar/SearchBar';
import styles from './HomePage.module.scss'; // Assurez-vous d'avoir un fichier de style pour HomePage

type User = {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
};

type HomePageState = {
  users: User[];
  filteredUsers: User[];
  selectedUser?: User;
};

class HomePage extends Component<{}, HomePageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      selectedUser: undefined,
    };
  }

  componentDidMount() {
    fetch('/users.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, filteredUsers: data });
      })
      .catch((error) => console.error('Error fetching users:', error));
  }

  handleSearch = (searchTerm: string) => {
    const filteredUsers = this.state.users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredUsers });
  };

  handleSelectUser = (user: User) => {
    this.setState({ selectedUser: user });
  };

  handleClosePopup = () => {
    this.setState({ selectedUser: undefined });
  };

  render() {
    const { filteredUsers, selectedUser } = this.state;

    return (
      <div className={styles.homePage}>
        <SearchBar onSearch={this.handleSearch} />
        <div className={styles.userCards}>
          {filteredUsers.map((user) => (
            <Card key={user.phone} user={user} onClick={() => this.handleSelectUser(user)} />
          ))}
        </div>
        {selectedUser && <Popup user={selectedUser} onClose={this.handleClosePopup} />}
      </div>
    );
  }
}

export default HomePage;
