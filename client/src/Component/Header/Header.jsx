import React from 'react'
import styled from 'styled-components'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {
    return (
        <Wrapper>
            <div className="container_x">
                <div className="d-flex align-items-center  pt-3 pb-3">
                    <HeaderLeft />
                    <HeaderRight />   
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    
    .header_logo_image{
        width: 133px;
        height: 25px;
    }
    .header_profile_image{
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
     
`

export default Header