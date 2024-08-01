import PropTypes from 'prop-types';

import {SearchBoxLabel, SearchBoxInput } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => (
  <SearchBoxLabel>
    Search contacts by name
    <SearchBoxInput type="text" value={value} onChange={onChange} />
  </SearchBoxLabel>
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};