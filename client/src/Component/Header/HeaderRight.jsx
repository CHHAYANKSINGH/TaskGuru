import React from 'react'
import styled from 'styled-components'

const HeaderRight = () => {
    return (
        <Wrapper>
            <div className="d-flex justify-content-between align-items-center header_right">
                <div className='header_searchbar'>
                    <input type="text" placeholder='Search' />
                    <div className="header_search_icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-4 header_icons'>
                    <div>
                        <i className="fa-regular fa-calendar-days"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-bell"></i>
                    </div>
                    <div className='header_profile_image'>
                        <img src="https://preview.keenthemes.com/metronic8/demo39/assets/media/avatars/300-2.jpg" alt="" />
                    </div>
                    <div>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
        width: 100%;
    .header_profile_image img{
        border-radius: 50%;
    }
    .header_icons i{
        font-size: 20px;
        color: #a3a6b1;
    }
    .header_searchbar{
        position: relative;
        height: 40px;
        width: 350px;
        background-color: #fff;
    }
    .header_searchbar input{
        padding-left: 2rem;
        height: 100%;
        width: 100%;
        border: 1px solid #F1F1F4;
        border-radius: 10px;
    }
    .header_search_icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        color: #aaa;
    }
`
export default HeaderRight