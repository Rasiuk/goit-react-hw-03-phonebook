import PropTypes from 'prop-types';
import { ButtonDelete, Item, Name, Number } from './ContactsList.styled';
export const ListItem = ({ contacts: { id, name, number }, deleteContact }) => {
  return (
    <Item key={id}>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <ButtonDelete onClick={() => deleteContact(id)} type="button">
        delete
      </ButtonDelete>
    </Item>
  );
};
ListItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
