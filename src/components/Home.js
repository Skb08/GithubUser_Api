import React, { useEffect, useState } from "react";
import Footer from "./footer/Footer";

const Home = () => {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

	const fetchUserData = async () => {
		// await fetch("https://api.tvmaze.com/search/shows?q=all")
		await fetch("https://api.github.com/users")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUsers(data);
			});
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	return (
		<>
			<div
				id="carouselExampleFade"
				className="carousel slide carousel-fade "
				data-bs-ride="carousel"
				style={{ display: "flex", minHeight: "10rem" }}>
				<div className="carousel-inner" id="carousel">
					<div className="carousel-caption" style={{ zIndex: "10" }}>
						<div className="d-flex justify-content-center">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								value={search}
								onChange={(e) => {
									setSearch(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="carousel-item active">
						<img
							src="https://source.unsplash.com/random/900x360/?tvshow"
							className="d-block w-100 h-40"
							style={{ height: "60vh", filter: "brightness(30%" }}
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://source.unsplash.com/random/900x360/?show"
							className="d-block w-100 h-40"
							style={{ height: "60vh", filter: "brightness(25%" }}
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://source.unsplash.com/random/900x360/?film"
							className="d-block w-100 h-40"
							style={{ height: "60vh", filter: "brightness(30%" }}
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://source.unsplash.com/random/900x360/?nature"
							className="d-block w-100 h-40"
							style={{ height: "60vh", filter: "brightness(30%" }}
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://source.unsplash.com/random/900x360/?scenery"
							className="d-block w-100 h-40"
							style={{ height: "60vh", filter: "brightness(30%" }}
							alt="..."
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div
				className=""
				style={{
					background:
						"linear-gradient(90deg, rgba(13,129,133,1) 0%, rgba(22,228,174,1) 41%, rgba(18,150,155,1) 100%)",
				}}>
				<div
					className="container"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						padding: 0,
					}}>
					<div
						className=" text-center "
						style={{ marginBottom: "5%" }}>
						<h2 className="font-weight-bold text-decoration-underline">
							GITHUB USERS DETAILS
						</h2>
					</div>
					{users.length > 0 && (
						<ul
							className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-12"
							style={{ margin: "0", padding: "0" }}>
							{users
								.filter((item) =>
									item.login
										.toLowerCase()
										.includes(search.toLowerCase())
								)
								.map((user) => {
									return (
										<div
											key={user.id}
											style={{
												display: "flex",
												justifyContent: "center",
											}}>
											<div
												className="card mt-3 shadow p-3 mb-5 bg-white rounded"
												style={{
													width: "18rem",
													maxHeight: "520px",
												}}>
												<img
													src={user.avatar_url}
													alt="suraj"
													className="card-img-top"
													style={{
														width: "100%",
														maxHeight: "200px",
														objectFit: "fill",
													}}
												/>

												<div className="card-body">
													<h5
														className="card-title ml-2"
														style={{
															marginLeft: "1rem",
														}}>
														{"Name: "}
														{user.login}
													</h5>
													<hr />
													<h5
														className="card-title  ml-2"
														style={{
															marginLeft: "1rem",
														}}>
														{"Followers: "}
														{
															user.followers_url
																.length
														}
													</h5>
													<h5
														className="card-title  ml-2"
														style={{
															marginLeft: "1rem",
														}}>
														{"Followers: "}
														{
															user.following_url
																.length
														}
													</h5>
													<h5
														className="card-title  ml-2"
														style={{
															marginLeft: "1rem",
														}}>
														{"Repos: "}
														{user.repos_url.length}
													</h5>

													<hr />
													<div className="w-100">
														<a href={user.url}>
															<button
																type="button"
																className="btn btn-primary m-2 "
																style={{
																	width: "5rem",
																}}>
																Detail
															</button>
														</a>
														<a href={user.html_url}>
															<button
																type="button"
																className="btn btn-primary m-2 "
																style={{
																	width: "5rem",
																}}>
																Github
															</button>
														</a>
														{/* <a href={user.followers_url}><button type="button" className="btn btn-primary m-1 d-inline " style={{ width: "6rem" }}>Followers</button></a>
                            <a href={user.repos_url}><button type="button" className="btn btn-primary m-1 d-inline " style={{ width: "4.8rem" }}>Repos</button></a> */}
													</div>
												</div>
											</div>
										</div>
									);
								})}
						</ul>
					)}
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
