import styled from 'styled-components'

import DropDownIcon from '../../assets/img/drop-down.svg'

export const DropDownHolder = styled.div`
    position: relative;
`

export const DropDownTitle = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #000000;
    padding-right: 15px;
    position: relative;
    cursor: pointer;
    user-select: none;

    &:after {
        content: '';
        width: 8px;
        height: 8px;
        top: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        margin: auto;
        background-repeat: no-repeat;
        background-image: url(${DropDownIcon});
        background-size: contain;
    }
`

export const DropDownItemsWrapper = styled.div`
    width: 200px;
    background: #FFFFFF;
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: absolute;
    padding: ${props => props.active ? '18px' : '0'};
    top: 20px;
    z-index: 99;
    right: 0;
    height: ${props => props.active ? 'auto' : '0'};
    overflow: hidden;
`

export const DropDownItem = styled.h4`
    font-style: normal;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #000000;
    padding-bottom: 10px;
    transition: all ease 0.3s;

    &:hover {
        color: #BA8D5B;
    }

    &:not(:first-child) {
        padding-top: 10px
    }

    &:not(:last-child) {
        padding-bottom: 10px;
    }
`