import {
    Image,
    StyleSheet,
    Text,
    View,
    StatusBar,
    SafeAreaView,
    Platform,
    FlatList,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import ProductPopup from '../screens/ProductPopup';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.46;

const clothingData = [
    { id: 'c1', title: 'Men’s T-Shirt', price: '₹499', image: require('../images/tshirt.jpg') },
    { id: 'c2', title: 'Women’s Kurti', price: '₹799', image: require('../images/banner.jpg') },
    { id: 'c3', title: 'Denim Jeans', price: '₹999', image: require('../images/banner.jpg') },
    { id: 'c4', title: 'Casual Shirt', price: '₹699', image: require('../images/banner.jpg') },
    { id: 'c5', title: 'Women’s Top', price: '₹599', image: require('../images/banner.jpg') },
];

const electronicsData = [
    { id: 'e1', title: 'Bluetooth Speaker', price: '₹1,299', image: require('../images/banner.jpg') },
    { id: 'e2', title: 'Smartphone', price: '₹14,999', image: require('../images/banner.jpg') },
    { id: 'e3', title: 'Wireless Earbuds', price: '₹1,999', image: require('../images/banner.jpg') },
    { id: 'e4', title: 'Smart Watch', price: '₹3,499', image: require('../images/banner.jpg') },
    { id: 'e5', title: 'Laptop', price: '₹39,999', image: require('../images/banner.jpg') },
];

const shoesData = [
    { id: 's1', title: 'Running Shoes', price: '₹1,999', image: require('../images/banner.jpg') },
    { id: 's2', title: 'Sneakers', price: '₹2,499', image: require('../images/banner.jpg') },
    { id: 's3', title: 'Formal Shoes', price: '₹2,999', image: require('../images/banner.jpg') },
    { id: 's4', title: 'Women’s Heels', price: '₹1,799', image: require('../images/banner.jpg') },
    { id: 's5', title: 'Sandals', price: '₹899', image: require('../images/banner.jpg') },
];

const Main = () => {
    const [likedItems, setLikedItems] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);


    const toggleLike = (id) => {
        setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const openPopup = (item) => {
        setSelectedProduct(item);
        setModalVisible(true);
    };


    const renderCard = ({ item }) => {
        const isLiked = likedItems[item.id];
        return (
            <TouchableOpacity onPress={() => openPopup(item)}>
                <View style={styles.card}>
                    <TouchableOpacity
                        style={[styles.likeBtn, isLiked && styles.liked]}
                        onPress={() => toggleLike(item.id)}
                    >
                        <Image source={require('../images/like.png')} style={styles.likeIcon} />
                    </TouchableOpacity>
                    <Image source={item.image} style={styles.cardImage} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

            <Image style={styles.banner} source={require('../images/banner.jpg')} />

            {/* Scrollable content */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Clothing */}
                <Text style={styles.sectionTitle}>👕 Clothing Categories</Text>
                <FlatList
                    data={clothingData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalList}
                />

                {/* Electronics */}
                <Text style={styles.sectionTitle}>💻 Electronics</Text>
                <FlatList
                    data={electronicsData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalList}
                />

                {/* Shoes */}
                <Text style={styles.sectionTitle}>👟 Shoes</Text>
                <FlatList
                    data={shoesData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalList}
                />
            </ScrollView>
            <ProductPopup
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                product={selectedProduct}
            />
        </SafeAreaView>

    );
};

export default Main;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f7fa',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    banner: {
        width: '94%',
        height: 200,
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 25,
        marginBottom: 10,
        color: '#333',
    },
    horizontalList: {
        paddingLeft: 10,
        paddingRight: 5,
    },
    card: {
        width: CARD_WIDTH,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginRight: 12,
        padding: 10,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardImage: {
        width: '100%',
        height: 130,
        borderRadius: 10,
        marginBottom: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        fontSize: 13,
        color: '#2c3e50',
        marginTop: 2,
    },
    likeBtn: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: '#eaeaea',
        borderRadius: 20,
        padding: 5,
        zIndex: 1,
    },
    liked: {
        backgroundColor: 'red',
    },
    likeIcon: {
        width: 18,
        height: 18,
        tintColor: '#fff',
    },
});
