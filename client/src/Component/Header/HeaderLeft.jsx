import React from 'react'
import styled from 'styled-components'

const HeaderLeft = () => {
    return (
        <Wrapper>
            <div className="d-flex align-items-center header_left_side  gap-3">
                <div>
                    <i className="fa-solid fa-bars-staggered"></i>
                </div>
                <div className="header_logo_image">
                    <img src="https://preview.keenthemes.com/metronic8/demo39/assets/media/logos/demo39.svg" alt="" />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .header_left_side{
        width: 280px;
    }  
`

export default HeaderLeft