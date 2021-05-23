import {DesignerRatings} from './FeedbackRating'
export const Designers = (props) => {
  console.log("testtimonials ====> ", props)
  return (
    <div id='testimonials'>
      <div className='container-fluid' id='designer'>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            {/* <span>We Love Our Customers</span> */}
            <h2>{props.title} Designers</h2>
            <p>We Provide our best services to provide you world famous venues, Astonishing Menu and your
							desired themes of best quality.</p>
          </div>
        </div>
        <div className='section-title text-center'>
          <div className='line' style={{ width: '35%' }} />
        </div>
        <div className='row' style={{ marginTop: '20px' }}>
          {props.data.map((d, i) => (
            <div key={`${d.name}-${i}`} className='col-md-4'>
              <div className='testimonial'>
                <div className='testimonial-image'>
                  {' '}
                  <img src={d.img} alt='' />{' '}
                </div>
                <div className='testimonial-content'>
                  <p>"{d.text}"</p>
                  <DesignerRatings/>
                  <div className='testimonial-meta'> - {d.name} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
