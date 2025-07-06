import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Search from '../bottomScreen/Search';
import Main from '../bottomScreen/Main';
import Card from '../bottomScreen/Card';
import Wishlist from '../bottomScreen/Wishlist';
import Profile from '../bottomScreen/Profile';

const TAB_ITEMS = [
    {
        id: 'home',
        label: 'Home',
        icon: require('../images/home.png'),
    },
    {
        id: 'search',
        label: 'Search',
        icon: require('../images/search.png'),
    },
    {
        id: 'orders',
        label: 'Orders',
        icon: require('../images/purchase.png'),
    },
    {
        id: 'wishlist',
        label: 'Wishlist',
        icon: require('../images/like.png'),
    },
    {
        id: 'profile',
        label: 'Profile',
        icon: require('../images/people.png'),
    },
];

const Home = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderActiveScreen = () => {
        switch (activeTab) {
            case 'home':
                return <Main />;
            case 'search':
                return <Search />;
            case 'orders':
                return <Card />;
            case 'wishlist':
                return <Wishlist />;
            case 'profile':
                return <Profile />;
            default:
                return <Main />;
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.screenContainer}>{renderActiveScreen()}</View>

            <View style={styles.tabBar}>
                {TAB_ITEMS.map((tab) => {
                    const isOrders = tab.id === 'orders';
                    const isActive = activeTab === tab.id;

                    return (
                        <TouchableOpacity
                            key={tab.id}
                            style={[styles.btn, isOrders && styles.ordersBtn]}
                            onPress={() => setActiveTab(tab.id)}
                        >
                            <View style={isOrders ? styles.ordersCircle : null}>
                                <Image
                                    source={tab.icon}
                                    style={[
                                        styles.logo,
                                        isActive && styles.activeLogo,
                                        isOrders && styles.ordersIcon,
                                    ]}
                                />
                            </View>
                            <Text style={[styles.label, isActive && styles.activeLabel]}>
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default Home;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    screenContainer: {
        flex: 1,
    },
    tabBar: {
        width: '100%',
        height: 80,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    btn: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
    },
    logo: {
        width: 24,
        height: 24,
        tintColor: '#888',
        resizeMode: 'contain',
        marginBottom: 4,
    },
    activeLogo: {
        tintColor: '#FA812F',
    },
    label: {
        fontSize: 12,
        color: '#888',
        fontWeight: '500',
    },
    activeLabel: {
        color: '#FA812F',
        fontWeight: '600',
    },
    ordersBtn: {
        marginTop: -20,
    },
    ordersCircle: {
        backgroundColor: '#FA812F',
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#FA812F',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
        marginBottom: 4,
    },
    ordersIcon: {
        tintColor: '#fff',
        width: 28,
        height: 28,
    },
});
