import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/photo.jpg")} // <- Change to your image path
            style={styles.image}
            resizeMode='cover'
          />
        </View>

        {/* Information Section */}
        <View style={styles.infoContainer}>
          {/* Personal Info */}
          <View style={styles.row}>
            <Icon name='user' size={20} color='#fff' style={styles.icon} />
            <Text style={styles.text}>
              Name: Abhishek Somvanshi
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name='envelope' size={20} color='#fff' style={styles.icon} />
            <Text style={styles.text}>
              Email: abhisheksomavanshi123@gmail.com
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name='phone' size={20} color='#fff' style={styles.icon} />
            <Text style={styles.text}>
              +91 8208297110
            </Text>
          </View>

          {/* Educational Section */}
          <View style={styles.row}>
            <Icon name='graduation-cap' size={20} color='#fff' style={styles.icon} />
            <Text style={styles.text}>
              EDUCATION
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name='book' size={20} color='#fff' style={styles.icon} />
            <Text style={styles.text}>
              Bachelor of Computer Engineering
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name='building' size={20} color='#fff' style={styles.icon} />
            <Text style={styles.text}>
              Sandip Foundation (2021 - Present) | Nashik, India
            </Text>
          </View>

          <View style={styles.row}>
            <Icon name='star' size={20} color='#fff' style={styles.icon} />
            <Text style={styles.text}>
              BE SGPA : 9.25
            </Text>
          </View>

          {/* About Section */}
          <View style={styles.row}>
            <Icon name='info-circle' size={20} color='#fff' style={styles.icon} />
            <Text style={styles.text}>
              I am a Computer Engineering Student with full knowledge of Web Development (React, Next, Node, Express...). I love to learn new things, and when I get a task, I complete it with enthusiasm.
            </Text>
          </View>

          {/* Skills Section */}
          <View style={styles.row}>
            <Icon name='tasks' size={20} color='#fff' style={styles.icon} />
            <Text style={styles.text}>
              SKILLS
            </Text>
          </View>

          {/* Skills Tags */}
          <View style={styles.tagsContainer}>
            {[
              "Java",
              "Next.js",
              "OOP",
              "HTML5",
              "JavaScript",
              "DSA",
              "Python",
              "Git",
              "Github",
              "React.js",
              "CSS3",
              "MySQL",
              "Bootstrap",
              "GSAP",
              "Problem Solving",
            ].map((item, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#edf5ff',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#fff',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
    flexShrink: 1,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#4caf50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  tagText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
