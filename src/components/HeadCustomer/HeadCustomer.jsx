import React from "react";
import headCustomer from '../../assets/customerBanner.png'
import Container from "../Layout/Container";

const HeadCustomer = ({ children }) => {
	return <Container>
    <div className="rounded-[40px] bg-left-bottom md:rounded-[0px] md:bg-center bg-no-repeat " style={
    {
      backgroundImage: `url(${headCustomer})`
    }
  }>{children}</div>
  </Container>;
};

export default HeadCustomer;
