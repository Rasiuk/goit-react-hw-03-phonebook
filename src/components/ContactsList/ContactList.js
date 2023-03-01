import { ListItem } from './ListItem';
import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';
export const ContactList = ({ contacts, filterValue, deleteContact }) => {
  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <List>
      {filteredContact.map(contact => {
        return (
          <ListItem
            key={contact.id}
            contacts={contact}
            deleteContact={deleteContact}
          />
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filterValue: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
