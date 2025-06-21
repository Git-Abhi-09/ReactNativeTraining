import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import UserInfoCard from './src/components/UserInfoCard';
import abhishek from './src/assets/abhishek_somvanshi.jpg';
import saish from './src/assets/saish.jpg';
import img1 from './src/assets/img1.jpg';
import img2 from './src/assets/img2.jpg';
import img3 from './src/assets/img3.jpg';
import img4 from './src/assets/img4.jpg';
import img5 from './src/assets/img5.jpg';
import img6 from './src/assets/img6.jpg';

const App = () => {
const userData = [
  { image: abhishek, name: 'Abhishek Somavanshi' },
  { image: saish, name: 'Saish Thorat' },
  { image: img1, name: 'Pooja Raut' },
  { image: img2, name: 'Sanket Kale' },
  { image: img3, name: 'Om Bhagat' },
  { image: img4, name: 'Neha Shinde' },
  { image: img5, name: 'Harshal Joshi' },
  { image: img6, name: 'Ajay Devkar' },
  { image: img5, name: 'Pratik More' },
  { image: img6, name: 'Rutuja Patil' },
  { image: img3, name: 'Amol Ghadge' },
  { image: img4, name: 'Rahul Pawar' },
  { image: img2, name: 'Deepali Mane' },
  { image: img1, name: 'Ankita Jadhav' },
  { image: img4, name: 'Ramesh Doke' },
  { image: img6, name: 'Sneha Gaikwad' },
  { image: img2, name: 'Yogesh Jagtap' },
  { image: img3, name: 'Vishal Kadam' },
  { image: img5, name: 'Mayur Shinde' },
  { image: img6, name: 'Kiran Landge' },
  { image: img2, name: 'Ravi Gade' },
  { image: img4, name: 'Sonali Ghorpade' },
  { image: img5, name: 'Kajal Pawar' },
  { image: img1, name: 'Mohit Jadhav' },
  { image: img3, name: 'Rajesh Patil' },
  { image: img6, name: 'Namrata Shirsat' },
  { image: img2, name: 'Tanmay Pawar' },
];


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>User Contact List</Text>
      <FlatList
        data={userData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <UserInfoCard user={item} idx={index} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
});
