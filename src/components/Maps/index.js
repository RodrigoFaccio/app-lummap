import React,{useState} from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// import { Container } from './styles';

const Maps = ({ route }) => {
  console.log(route.params.latitude.toString())
  const [point, setPoint] = useState({
   latitude:parseFloat(route.params.latitude),
          longitude:  parseFloat(route.params.longitude),
          latitudeDelta: 0.005,
          longitudeDelta:0.005
  })
  return (
    <View>
      <MapView
        style={{width:'100%',height:'100%'}}
        mapType="mutedStandard"
        initialRegion={point}
        zoomControlEnable
        minZoomLevel={5}
        maxZoomLevel={15}

        
      >
        <Marker
          coordinate={point}
          title="Ponto A"
          description="Point a"
          identifier='pointA'

        
        >
        
        </Marker>
      </MapView>
    </View>
  );
}

export default Maps;