import React from 'react';
import "./Tab.css"
import menuData from "./menudata";
import { useState } from 'react';

function GalleryReact() {
	const [item, setItem] = useState(menuData);
	const GetItem = (categoryItem) => {
		const items = menuData.filter((item)=>{
			return item.category === categoryItem ;
		});
		setItem(items);
	}
	const GetItemAll = () => {
		setItem(menuData);
	}
	return (
		<>
			<div className='bg-success py-3'>
				<h2 className='mt-5 text-center'>Order your favourite Dish</h2>
				<hr />
				<div className='menu-tabs container'>
					<div className='menu-tab d-flex justify-content-around'>
						<button className='bg-warning border-0 px-3 py-1' onClick={()=> GetItem('breakfast')}>Breakfast</button>
						<button className='bg-warning border-0 px-3 py-1' onClick={()=> GetItem('lunch')}>Lunch</button>
						<button className='bg-warning border-0 px-3 py-1' onClick={()=> GetItem('evening')}>Evening</button>
						<button className='bg-warning border-0 px-3 py-1' onClick={()=> GetItem('dinner')}>Dinner</button>
						<button className='bg-warning border-0 px-3 py-1' onClick={()=> GetItemAll()}>All</button>
					</div>
				</div>
				{/* my main items section */}
				<div className='menu-items container-fluid mt-5'>
					<div className='row'>
						<div className='col-11 mx-auto'>
							<div className='row my-5'>
								{item.map((item) => {
									const { id, name, image, description, price } = item;
									return (
										<>
											<div className='items col-12 col-md-6 col-lg-6 col-xl-4 my-1' >
												<div className='row Item-inside'>
													<div className='col-12 col-md-12 col-lg-4 img-div'>
														<img src={image} alt="img" />
													</div>
													<div className='col-12 col-md-12 col-lg-8'>
														<div className='main-title pt-4 pb-3'>
															<h3>{name}</h3>
															<p>{description}</p>
														</div>
														<div className='menu-price-book'>
															<div className='price-book-divide d-flex justify-content-between'>
																<h5>{price}</h5>
																<a href="3">
																	<button className='btn btn-primary'>Order Now</button>
																</a>
															</div>
															<p>description</p>
														</div>

													</div>
												</div>

											</div>
										</>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default GalleryReact;
