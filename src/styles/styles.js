import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  padding: 30px 0px;
`;

export const Select = styled.select`
  width: 120px;
`;

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  select {
    margin-right: 20px;
  }
`;

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const List = styled.ul`
  background-color: #f5ee19;
  width: 25%;
  border-radius: 10px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin: 15px 0px;
  }
`;

export const WrappeerCustomCategories = styled.div`
  display: flex;
  justify-content: center;
`;

export const Line = styled.hr`
  border-width: 3px;
`;
