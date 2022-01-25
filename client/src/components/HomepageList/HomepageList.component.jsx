import React from 'react'
import './HomepageList.style.scss'
import CustomButton from '../CustomButton/customButton.component'

const HomepageList = ({ name, description, imageUrl, order, btntext }) => {
  return (
    <>
      <div className="container">
        {order % 2 == 0 ?
          <div className='row wrapper-categories'>
            <div className="col-ls-9">
              <div className='middle'>
                <h1>{name}</h1>
                <p>{description}</p>
                <CustomButton type="submit"> Explore {btntext}</CustomButton>
              </div>
            </div>
            <div className="col-ls-3" >
              <img src={imageUrl} className='image' alt={btntext} />
            </div>
          </div>

          :
          <div className='row wrapper-categories'>
            <div className="col-ls-3" >
              <img src={imageUrl} className='image' alt={btntext} />
            </div>
            <div className="col-ls-9">
              <div className='middle'>
                <h1>{name}</h1>
                <p>{description}</p>
                <CustomButton type="submit"> Explore {btntext}</CustomButton>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )

}

export default HomepageList