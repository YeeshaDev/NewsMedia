import { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';




const Layout = ({ children }) => {
	useEffect(() => {
		window.onscroll = function () {
			scrollHeader();
		};
	});
	function scrollHeader() {
		const header = document.querySelector('.navbar-bottom-menu');
		if (window.pageYOffset > 105) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	}
	return (
		<>
		
			<div className="container-scroller" onScroll={scrollHeader}>
				<div className="main-panel">
					<Navbar />
					{children}
					<Footer />
				</div>
			</div>
			
		</>
	);
};
export default Layout;
