import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;  
  align-items: flex-start;
  gap: 10px; 
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid #96ac92;
  border-radius: 20px;
`;

export const Button = styled.button`
  height: 20px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  background-color: #96ac92;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  color: black; 
  margin-right: 8px; 
`;

export const Text = styled.p`
  margin: 0; 
  display: flex;
  align-items: center;
`;
