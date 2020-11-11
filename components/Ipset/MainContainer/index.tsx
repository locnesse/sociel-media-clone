import React from  'react';
import  { View,Text,Image } from 'react-native';
import { IpsetType} from "../../../types";
import styles from './styles';
import {Entypo} from '@expo/vector-icons';
import moment from 'moment';

import Footer from './Footer';

export type MainContainerProps= {
Ipset:IpsetType
}

const MainContainer = ({ Ipset }: MainContainerProps) => (  
    
    <View style={styles.container}>  
        <View style={styles.Ipsetheadercontainer}>
          <View style={styles.IpsetheaderNames}>
            <Text style={styles.name}>{Ipset.user.name}</Text>
            <Text style={styles.username}>@{Ipset.user.username}</Text>
            <Text style={styles.createdAt}>{moment(Ipset.createdAt).fromNow()}</Text>
            </View> 
            <Entypo name={"chevron-down"} size={16} color={'grey'}/>
         </View>
        <View>
            <Text style={styles.content}>{Ipset.content} </Text>  
           {!!Ipset.image && <Image style={styles.image} source={{ uri:Ipset.image}} />}
        </View>
        <Footer Ipset={Ipset} />
    </View>
)

export default MainContainer;
