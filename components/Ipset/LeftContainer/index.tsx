import React from  'react';
import  { View } from 'react-native';
import {Usertype} from '../../../types';
import ProfilePicture from '../../ProfilePicture';

export type LeftContainerProps= {
user: Usertype,
}

const LeftContainer = ({user}:LeftContainerProps) => (  
    <View>
        <ProfilePicture image={user.image} size={60} />
    </View>
)

export default LeftContainer;
