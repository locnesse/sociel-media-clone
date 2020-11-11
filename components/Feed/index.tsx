import React, { useEffect, useState } from 'react';
import {View,FlatList} from 'react-native';
import {API,graphqlOperation} from 'aws-amplify';

import {listIpsets} from '../../graphql/queries';
import Ipset from '../Ipset';


const Feed = () =>  {

  const [Ipsets, setIpsets]= useState([]);
  const [loading,setLoading] = useState(false);

  const fetchIpsets = async () => {
    setLoading(true);
    try {
      const IpsetsData= await API.graphql (graphqlOperation(listIpsets));
      setIpsets(IpsetsData.data.listIpsets.items);
    } catch (e) {
      console.log (e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
   fetchIpsets();
  },  [])

  return (
        <View  style={{ width: '100%' }}>
    <FlatList
    data={Ipsets}
    renderItem={({item}) => <Ipset Ipset={item} />}
    keyExtractor={(item) => item.id}
    refreshing={loading}
    onRefresh={fetchIpsets}
     />
   </View>
  );
};

export default Feed;