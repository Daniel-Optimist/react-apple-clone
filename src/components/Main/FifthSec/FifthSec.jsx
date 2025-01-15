// import React from 'react'
import tvLogo from "../../../assets/images/icons/apple-tv-logo.png"
import bankerImg from "../../../assets/images/home/banker.png"
import watchSetLogo from "../../../assets/images/icons/watch-series5-logo.png"
function FifthSec() {
  return (
    <section className="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={tvLogo} alt ="TV Logo"/>
							</div>
						</div>

						<div className="tvshow-logo-wraper">
							<img src={bankerImg} alt = "Banker Img" />
						</div>

						<div className="watch-more-wrapper">
							<a href="#">Watch now on the Apple TV App</a>
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={watchSetLogo} alt ="WatchSetLogo"/>
							</div>
						</div>
						<div className="description-wraper">
							With the Always-On Retina display.<br/>
							You’ve never seen a watch like this.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
  )
}

export default FifthSec