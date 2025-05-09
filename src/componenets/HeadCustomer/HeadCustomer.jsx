import React from "react";
import headCustomer from '../../assets/customerBanner.png'
import Container from "../Layout/Container";

const HeadCustomer = ({ children }) => {
	return <Container>
    <div className="bg-center bg-no-repeat " style={
    {
      backgroundImage: `url(${headCustomer})`
    }
  }>{children}</div>
  </Container>;
};

export default HeadCustomer;
