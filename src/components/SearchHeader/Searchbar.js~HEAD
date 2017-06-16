import React from 'react';
import { connect } from 'react-redux';
import {
  handleSearchbarChange,
  subRedditSearch,
} from '../../actions/API';
import './Searchbar.css';

const Searchbar = ({
  // State-to-Props
  searchValue,
  // Dispatch-to-Props
  searchForSubReddit, handleSearchbarChange,
}) => (
  <div className='Searchbar'>
    <form className='Searchbar-form' onSubmit={(e) => {
      e.preventDefault();
      searchForSubReddit(searchValue);
    }}>
      <input
        type='text'
        className='Searchbar-input'
        onChange={e => {
          handleSearchbarChange(e.target.value)
          // No need to spam requests
          // if the Search value is too short
          if (searchValue.length > 3) {
            searchForSubReddit(searchValue)
          }
        }}
      />
    </form>
  </div>
);

const mapStateToProps = ({ API }) => ({
  searchValue: API.searchValue,
})
const mapDispatchToProps = (dispatch) => ({
  handleSearchbarChange: (value) => dispatch(handleSearchbarChange(value)),
  searchForSubReddit: (subReddit) => dispatch(subRedditSearch(subReddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
