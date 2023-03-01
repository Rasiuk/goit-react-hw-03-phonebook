import PropTypes from 'prop-types';
export const Filter = ({ filter }) => {
  return (
    <label>
      <h3>Find contacts my name</h3>
      <input onChange={filter} name="filter" type="text"></input>
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};
