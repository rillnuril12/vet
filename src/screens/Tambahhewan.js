import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

const TambahHewan = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
        <TouchableOpacity style={{ flexDirection: 'row' }}  onPress={() => navigation.navigate('Detailpage')}>
          <Icon name='arrow-back' color={'#fff'} size={16}
            style={{
              marginTop: 25,
              marginLeft: 31,
            }}
            onPress={() => navigation.goBack()} />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '700',
              marginTop: 22,
              marginLeft: 13
            }}>Tambah Hewan Peliharaan</Text>
        </TouchableOpacity>
      </View>
      <Text style={{
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 16,
        marginTop: 20,
        color: '#1A3150'
      }}>Nama Hewan Peliharaan Kamu</Text>
      <TouchableOpacity style={styles.namahewan}>
        <Text style={{
          fontSize: 12,
          fontWeight: '400',
          marginLeft: 15,
          marginTop: 12,
          color: '#1A3150'
        }}>Ronald</Text>
      </TouchableOpacity>
      <Text style={{
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 16,
        marginTop: 16,
        color: '#1A3150'
      }}>Pilih Hewan Peliharaan Kamu</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 102,
          height: 36,
          marginLeft: 16,
          marginTop: 8,
          borderRadius: 4,
          backgroundColor: '#C2CDDB'
        }}>
          <Image source={require('../assets/emojidog.jpeg')}
            style={styles.animal}
          />
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 8,
            color: '#1A3150'
          }}>Anjing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 115,
          height: 36,
          marginLeft: 16,
          marginTop: 8,
          borderRadius: 4,
          backgroundColor: '#E0E9F5'
        }}>
          <Image source={require('../assets/notohamster.jpeg')}
            style={styles.animal}
          />
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 8,
            color: '#1A3150'
          }}>Hamster</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 102,
          height: 36,
          marginLeft: 16,
          marginTop: 8,
          borderRadius: 4,
          backgroundColor: '#E0E9F5'
        }}>
          <Image source={require('../assets/emojirabbit.jpeg')}
            style={styles.animal}
          />
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 10,
            color: '#1A3150'
          }}>Kelinci</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 102,
          height: 36,
          marginLeft: 16,
          marginTop: 8,
          borderRadius: 4,
          backgroundColor: '#E0E9F5'
        }}>
          <Image source={require('../assets/emojicat.png')}
            style={styles.animal}
          />
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 8,
            color: '#1A3150'
          }}>Kucing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 102,
          height: 36,
          marginLeft: 16,
          marginTop: 8,
          borderRadius: 4,
          backgroundColor: '#E0E9F5'
        }}>
          <Image source={require('../assets/emojicat.png')}
            style={styles.animal}
          />
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 8,
            color: '#1A3150'
          }}>Kucing</Text>
        </TouchableOpacity>
      </View>
      <Text style={{
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 16,
        marginTop: 17,
        color: '#1A3150'
      }}>Pilih Kelamin Peliharaan Kamu</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 102,
          height: 36,
          marginLeft: 16,
          marginTop: 8,
          borderRadius: 4,
          backgroundColor: '#E0E9F5'
        }}>
          <Material name='gender-male' size={17} color={'#000'}
            style={{
              marginLeft: 20
            }}
          />
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 13,
            color: '#1A3150'
          }}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 102,
          height: 36,
          marginLeft: 16,
          marginTop: 8,
          borderRadius: 4,
          backgroundColor: '#C2CDDB'
        }}>
          <Material name='gender-female' size={17} color={'#000'}
            style={{
              marginLeft: 20
            }}
          />
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 7,
            color: '#1A3150'
          }}>Female</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 393,
        height: 70,
        marginTop: 277,
        elevation: 4,
        backgroundColor: '#fff'
      }}>
        <TouchableOpacity style={{
          width: 340,
          height: 50,
          borderRadius: 4,
          backgroundColor: '#FDCB5A'
        }}  onPress={() => navigation.navigate('Detailpage')}>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            marginVertical: 15,
            marginLeft: 135,
            color: '#000'
          }}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  atas: {
    backgroundColor: '#1A3150',
    height: 70
  },
  namahewan: {
    width: 355,
    height: 42,
    marginLeft: 16,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#1A3150'
  },
  animal: {
    width: 28,
    height: 28,
    marginLeft: 16,
  }
})

export default TambahHewan