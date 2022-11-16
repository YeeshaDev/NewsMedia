import '../styles/globals.css';
import '../public/assets/vendors/mdi/css/materialdesignicons.min.css';
import '../public/assets/vendors/aos/dist/aos.css/aos.css';
// import '../public/assets/vendors/owl.carousel/dist/assets/owl.carousel.min.css' ;
import '../public/assets/vendors/owl.carousel/dist/assets/owl.theme.default.min.css';
import '../public/assets/css/style.css';
import '../styles/globals.css';
import Layout from '../src/components/Layout';
import Meta from '../src/components/Meta';



function MyApp({ Component, pageProps }) {
	
	return (
		< div className='container'>
			<Meta />
			
			<Layout>
				<Component {...pageProps} />
			</Layout>
			
		</div>
	);
}

export default MyApp;
