import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Jumbotron from "../component/Jumbotron/Jumbotron";
import Card from "../component/Card/Card";
import Footer from "../component/Footer/Footer";

import perro1 from '../../img/perro1.jpg';
import perro2 from '../../img/perro2.jpg';
import perro3 from '../../img/perro3.jpg';
import perro4 from '../../img/perro4.jpg';


//create your first component
const Home = () => {
	const cardCount = 4;
	const cardImage = [
		{ src: perro1, title: 'Labrador', description: 'Originally from Canada, it is a medium to large sized dog, known for its intelligence and being an excellent family companion.'},
		{ src: perro2, title: 'Akita Japones', description: 'Originally from Japan, it is a large and strong dog, known for its loyalty and independence.'},
		{ src: perro3, title: 'Border Collie', description: 'Originally from the border between England and Scotland, it is a medium-sized dog known for its intelligence and working ability.'},
		{ src: perro4, title: 'Pastor Aleman', description: 'Originally from Germany, it is a medium-sized dog known for its intelligence, strength and versatility.'}
	]

	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{[...Array(cardCount)].map((_, i) => (
						<div key={i} className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center">
							<Card imageSource={cardImage[i].src} title={cardImage[i].title} description={cardImage[i].description}/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
