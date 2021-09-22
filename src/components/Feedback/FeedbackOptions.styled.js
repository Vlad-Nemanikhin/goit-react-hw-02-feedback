import styled from '@emotion/styled';

export const BtnList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  width: 200px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
  display: block;
  position: relative;
  border: 2px solid #f7ca18;
  transition: all 0.4s cubic-bezier(0215, 0.61, 0.355, 1) 0s;
  background: #353535;
  :hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: none;
  }
  :hover:before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }
  :before {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #f7ca18;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
`;
