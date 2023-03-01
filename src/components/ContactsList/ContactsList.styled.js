import styled from 'styled-components';
export const List = styled.ul`
  width: 380px;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;
export const Item = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const Name = styled.span`
  display: inline-block;
  width: 130px;
  margin-right: 16px;
`;
export const Number = styled.span`
  display: inline-block;
  margin-right: 16px;
  width: 120px;
`;
export const ButtonDelete = styled.button`
  width: 60px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: #f3f4f5;
  :active {
    background-color: grey;
    color: white;
  }
`;
