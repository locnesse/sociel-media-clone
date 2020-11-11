import React from  'react';
import  { View } from 'react-native';
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { IpsetType } from '../../types'

import styles from  './styles';

export type IpsetProps= {
 Ipset: IpsetType,
}

const Ipset = ({Ipset}:IpsetProps) => (  
    <View style={styles.container}>
        < LeftContainer user={Ipset.user} />
        < MainContainer Ipset={Ipset} />
    </View>
)

export default Ipset;
