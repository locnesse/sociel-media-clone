import React from  'react';
import  { View,Text } from 'react-native';
import { IpsetType} from "../../../../types";
import styles from './styles';
import {Feather,EvilIcons,AntDesign} from '@expo/vector-icons';

export type FooterContainerProps= {
Ipset:IpsetType
}

const Footer = ({ Ipset }: FooterContainerProps) => (  
    <View style={styles.container}>  
       <View style={styles.iconContainer}>
        <Feather name={"message-circle"} size={20} color={'grey'} />
        <Text style={styles.number}>{Ipset.numberOFComments}</Text>
       </View>
       <View style={styles.iconContainer}>
        <EvilIcons name={"retweet"} size={28} color={'grey'} />
        <Text style={styles.number}>{Ipset.numberOFRepsets}</Text>
       </View>
       <View style={styles.iconContainer}>
        <AntDesign name={"hearto"} size={20} color={'grey'} />
        <Text style={styles.number}>{Ipset.numberOFLikes}</Text>
       </View>
       <View style={styles.iconContainer}>
        <EvilIcons name={"share-google"} size={28} color={'grey'} />
       </View>
    </View>
)

export default Footer;