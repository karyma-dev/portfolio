import React from 'react'
import styled from 'styled-components'

import profileImg from '../../assets/profile.jpg'

const Column = styled.div`
    @media only screen and (max-width: 1500px) {
        order: 0;
    }
`

const Img = styled.img`
    height: auto;
    width: 100%;
    max-width: 400px;
`

function Profile() {
    return (
        <Column>
            <Img src={profileImg} alt='profile image' />
        </Column>
    )
}

export default Profile
