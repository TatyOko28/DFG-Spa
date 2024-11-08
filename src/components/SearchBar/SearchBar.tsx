import React from 'react';
import styles from './SearchBar.module.scss'; // Assurez-vous d'avoir un fichier SearchBar.module.scss avec des styles appropriés
import searchIcon from '../../assets/search-icon.webp'; // Assurez-vous que le chemin vers l'icône est correct

type SearchBarProps = {
  onSearch: (term: string) => void;
};

type SearchBarState = {
  searchTerm: string;
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
    this.props.onSearch(event.target.value); // Effectue la recherche à chaque frappe si souhaité
  };

  render() {
    return (
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Search by name..."
          style={{ backgroundImage: `url(${searchIcon})` }} // Ajoutez l'icône de recherche comme arrière-plan
        />
      </div>
    );
  }
}

export default SearchBar;
