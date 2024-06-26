import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import Swiper from 'react-native-swiper';

interface AppSwiperProps {}

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class AppSwiper extends Component<AppSwiperProps> {
    render() {
        return (
            <Swiper
                autoplay={true}
                showsPagination={false}
                style={{ height: 200, backgroundColor: '#fff' }} >
                <View style={{ flex: 1, marginHorizontal: 10 }} >
                    <Image
                        source={require('../Assets/images/clone_dummy/banner_0.jpg')}
                        style={styles.image} />
                </View>
                <View style={styles.slide} >
                    <Image
                        source={require('../Assets/images/clone_dummy/banner_1.jpg')}
                        style={styles.image} />
                </View>
                <View style={styles.slide} >
                    <Image
                        source={require('../Assets/images/clone_dummy/banner_2.jpg')}
                        style={styles.image} />
                </View>
                <View style={styles.slide} >
                    <Image
                        source={require('../Assets/images/clone_dummy/banner_3.jpg')}
                        style={styles.image} />
                </View>
                <View style={styles.slide} >
                    <Image
                        source={require('../Assets/images/clone_dummy/banner_4.jpg')}
                        style={styles.image} />
                </View>
                <View style={styles.slide} >
                    <Image
                        source={require('../Assets/images/clone_dummy/banner_5.jpg')}
                        style={styles.image} />
                </View>
                <View style={styles.slide} >
                    <Image
                        source={require('../Assets/images/clone_dummy/banner_6.jpg')}
                        style={styles.image} />
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    slide: {
        flex: 1,
        width: SCREEN_WIDTH - 20,
        marginHorizontal: 10,
    },
    image: {
        width: null,
        height: null,
        flexGrow: 1,
        resizeMode: 'contain',
    },
});
