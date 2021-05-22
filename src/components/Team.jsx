export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className="row">
          <div id='teams' className="col-md-8 col-sm-6 col-12 col-md-offset-2 text-center fh5co-heading animate-box">
            <div className="team-pd"></div>
            <h2>Team</h2>
            <p>We presents some astonishing clicks from our recent events to give you an insight of our services & our website.</p>
          </div>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 team'>
                <div className='thumbnail'>
                  {' '}
                  <img src={d.img} alt='...' className='team-img' />
                  <div className='caption'>
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

{/* <div id="fh5co-gallery" className="fh5co-section-gray">
			<div id="gallery" className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
						<span>Our Memories</span>


						<h2>Some Blinks</h2>
						<p>Here are some of the amazing blinks from our events gallery to give you a quick sight of what
							we offer.</p>
					</div>
				</div>
				<div className="row row-bottom-padded-md">
					<div className="col-md-12">
						<ul id="fh5co-gallery-list">
							{props.gallery ? props.gallery.map((v, i) => {
								return (
									<GalleryCard {...v} />
								)
							}) : "loading"
							}
						</ul>
					</div>
				</div>
			</div>
		</div> */}