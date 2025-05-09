import headContact from "../../assets/contactBanner.png";
import Container from "../Layout/Container";

const Hcontact = ({ children }) => {
	return (
		<Container>
			<div
				className="mt-[160px] bg-no-repeat bg-cover bg-center py-[100px] rounded-[20px] px-[102px] "
				style={{
					backgroundImage: `url(${headContact})`,
				}}
			>
				{children}
			</div>
		</Container>
	);
};

export default Hcontact;

