import React from "react";
import "./Footer.css";
import { VscGithubInverted } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="home-footer">
			<div className="container">
				<div className="left-footer">
					<h1 className="my-name">GitHub User</h1>
					<p className="my-details">
						This is a react api project that displays the details of
						github users.
					</p>
				</div>

				<div className="right-footer">
					<div className="social-media">
						<ul>
							<li>
								<a
									href="https://github.com/Skb08/GithubUser_Api"
									target="_blank"
									rel="noreferrer">
									<span className="github social_btns">
										<VscGithubInverted />
									</span>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/suraj-kumar-behera-b3883222b/"
									target="_blank"
									rel="noreferrer">
									<span className="linkedin social_btns">
										<SlSocialLinkedin />
									</span>
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/behera_suraj08"
									target="_blank"
									rel="noreferrer">
									<span className="twitter social_btns">
										<FiTwitter />
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="large-4 columns">
				<p className="madewithlove">
					Made with{" "}
					<span className="heart">
						<AiFillHeart />
					</span>{" "}
					in India
				</p>
			</div>
			<p className="copyright">
				<span className="copyright-section">
					copyright © {new Date().getFullYear()} - GitHub User
				</span>
				<p>GitHub User Api - An Example of GitHub Api </p>
			</p>
		</div>
	);
};
export default Footer;
