import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude: -8.1314835,
          longitude: 115.0806419
        },
        title: 'SPBU Kartini',
        subtitle: 'Jl. Laksamana, Baktiseraga, Kec. Buleleng, Kabupaten Buleleng, Bali 81119'
      },
      {
        key:2,
        latlng: {
          latitude:-8.111586,
          longitude: 115.093173
        },
        title: 'SPBU Gajah Mada',
        subtitle: 'Jl. Gajah Mada, Banjar Jawa, Kec. Buleleng, Kabupaten Buleleng, Bali 81113'
      },
      {
        key:3,
        latlng: {
          latitude:-8.134781,
          longitude: 115.101330
        },
        title: 'SPBU Sukasada',
        subtitle: 'Jl. Jelantik Gingsir, Sukasada, Kec. Buleleng, Kabupaten Buleleng, Bali 81117'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.115096,
          longitude: 115.079724
        },
        title: 'SPBU Banyuasri',
          subtitle: 'Kelurahan Banyuasri Singaraja Buleleng Bali, Banyuasri, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      }
      ,
      {
        key:5,
        latlng: {
          latitude: -8.1482097,
          longitude: 115.0438635
        },
        title: 'SPBU Anturan',
          subtitle: 'Tukadmungga, Kec. Buleleng, Kabupaten Buleleng, Bali 81119'
      }
      ,
      {
        key:6,
        latlng: {
          latitude: -8.1023473,
          longitude: 115.1017816
        },
        title: 'SPBU Penarukan',
          subtitle: 'Jalan WR Supratman No. 57, Penarukan, Kecamatan Buleleng, Penarukan, Kec. Buleleng, Kabupaten Buleleng, Bali 81119'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              SPBU Daerah Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Black Lotus Maps</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
