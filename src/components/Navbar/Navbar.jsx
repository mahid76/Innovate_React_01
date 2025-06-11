// import logo from '../../assets/Logo.png'
import { useState } from "react";
import Logo from "../CustomLogo/Logo";
import Container from "../Layout/Container";
import { FaBars } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClick =()=> {
		setShow(true)
		
	}
	return (
		<div className=" pt-[10px]  md:pt-[50px]">
			<Container>
				<div className=" md:flex justify-between items-center text-white">
					<div className="flex justify-between items-center">
						<a  href="#">
						<Logo></Logo>
					</a>
					<div >
						<FaBars onClick={handleClick} className=" block md:hidden text-2xl text-white cursor-pointer" />

					</div>
					</div>

				

					<ul className="hidden flex-col md:flex-row md:flex  mt-5 md:mt-0 gap-x-[68px]  items-center font-secondary  text-[16px] md:text-lg font-medium ">
						<li className="mt-2 md:mt-0">
							<a href="#">Home</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Features</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Service</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Pages</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Blog</a>
						</li>
					</ul>
					<div className="button hidden mb-2 md:mb-0 mt-7 md:mt-0 justify-between md:justify-normal md:flex md:gap-9 items-center font-secondary text-[16px] md:text-lg font-medium">
						<p>
							<a className="leading-{200%]" href="#">
								Login
							</a>
						</p>
						<p>
							<a
								className="text-headtext py-2 px-4 md:py-5 md:px-[48px] bg-secondary rounded-[4px] md:rounded-[6px] leading-5 font-medium"
								href="#"
							>
								Register
							</a>
						</p>
					</div>
				</div>
			</Container>
			{
				show &&
				<div className="bg-primary relative  w-full py-15 px-15">
					<ul className=" flex-col md:flex-row flex text-white mb-2 md:mt-0 gap-x-[68px]  items-center font-secondary  text-lg font-medium ">
						<li className="mt-2 md:mt-0">
							<a href="#">Home</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Features</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Service</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Pages</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Blog</a>
						</li>
					</ul>
					<div className="button text-white mb-2 md:mb-0 mt-7 md:mt-0 justify-between md:justify-normal flex md:gap-9 items-center font-secondary text-[16px] md:text-lg font-medium">
						<p>
							<a className="leading-{200%]" href="#">
								Login
							</a>
						</p>
						<p>
							<a
								className="text-headtext py-2 px-4 md:py-5 md:px-[48px] bg-secondary rounded-[4px] md:rounded-[6px] leading-5 font-medium"
								href="#"
							>
								Register
							</a>
						</p>
					</div>
					<GiCrossedBones onClick={()=>setShow(false)} className="block absolute top-[-42px] right-5 bg-primary md:hidden text-2xl text-white cursor-pointer" />
				</div>
			}
		</div>
	);
};



// <GiCrossedBones onClick={()=>setShow(false)} className="block md:hidden text-2xl text-white cursor-pointer" />


export default Navbar;
Navbar;
