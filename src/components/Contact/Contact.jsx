import PropTypes from 'prop-types';
import { Item, Button, IconWrapper, Text } from './Contact.styled';
import { FaUser, FaPhoneAlt } from 'react-icons/fa'; 

export const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <Item>
      <div>
        <Text>
          <IconWrapper>
            <FaUser /> 
          </IconWrapper>
          <span>{name}</span>
        </Text>
        <Text>
          <IconWrapper>
            <FaPhoneAlt /> 
          </IconWrapper>
          <span>{number}</span>
        </Text>
      </div>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
