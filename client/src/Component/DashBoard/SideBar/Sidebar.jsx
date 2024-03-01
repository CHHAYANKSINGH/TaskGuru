import React from 'react'
import styled from 'styled-components'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Sidebar = () => {


    const options = [
        { value: 'Default', label: 'DashBoard' },
        { value: 'Default', label: 'Default', className: 'myOptionClassName' },
        { value: 'Default', label: 'eCommerce', className: 'myOptionClassName' },
        { value: 'Default', label: 'Projects', className: 'myOptionClassName' },
        { value: 'Default', label: 'Online Courses', className: 'myOptionClassName' },
        { value: 'Default', label: 'Marketing', className: 'myOptionClassName' },
    ];
    const defaultOption = options[0];
    return (
        <Wrapper>
            <div className="container_x">
                <div className="sidebar_menu">
                    <div className="sidebar_link d-flex align-items-center">
                        <i class="fa-solid fa-house-chimney"></i>
                        <Dropdown options={options} value={defaultOption} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 280px;
.sidebar_menu{
    margin-top: 20px;
}
.sidebar_link i{
    color: #aaa;
}
.Dropdown-control{
    border: none !important;
    background-color: transparent !important;
    padding: 8px 130px 8px 10px !important;
    color: #252F4A !important;
    font-weight: 700 !important;
}
.Dropdown-placeholder.is-selected{
    white-space: nowrap !important;
}
.Dropdown-root:hover .Dropdown-control{
    color: #1B84FF !important;
    box-shadow: none !important;
    transition: color .2s ease !important;
}   
.sidebar_link:hover i {
    color: #1B84FF; 
    transition: color .2s ease !important;
}
/* .Dropdown-root:hover .Dropdown-arrow{
    transition: color .2s ease !important;
    border-color: #1B84FF transparent transparent !important;
} */
.Dropdown-menu{
    background-color: transparent !important;
    border: none !important;
    overflow-y: hidden !important;
}
.Dropdown-option.is-selected{
    background-color: transparent !important;
    color:  #4B5675 !important;
    font-family: 600 !important;
}
.Dropdown-option .myOptionClassName.is-selected:hover{
    color: #1B84FF !important;
}
`

export default Sidebar