import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZzbD8H2JNw4Nr0VBCaDmOB95m-HCp6ygSg&s',
      }}
      style={styles.background}
      resizeMode="cover"
      blurRadius={2}
    >
      <View style={styles.container}>
        {/* Islamic Date */}
        <Text style={styles.date}>10 Dhul-Hijjah 1446 AH</Text>

        {/* Circular Eid Image */}
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/eid-mubarak-religious-islamic-silhouettes-with-crescent-moon_1055-6614.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Eid Message */}
        <Text style={styles.heading}>Eid-ul-Adha Mubarak</Text>
        <Text style={styles.message}>
          Wishing my family and friends a blessed Eid-ul-Adha.
        </Text>
        <Text style={styles.from}>— From Kinza Ali</Text>

        {/* Buttons Row 1 */}
        <View style={styles.buttons}>
          <Link href="/greeting" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>🎉 Greeting</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/dua" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>🕋 Eid Dua</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Buttons Row 2 */}
        <View style={styles.buttons}>
          <Link href="/qurbani" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>🥩 Qurbani Info</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/preparation" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>🧺 Eid Preparation</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(10,10,10,0.85)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  date: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: '#f1c40f',
    fontSize: 14,
    fontStyle: 'italic',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 3,
    borderColor: '#f1c40f',
    marginBottom: 30,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f1c40f',
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#ecf0f1',
    textAlign: 'center',
    marginBottom: 8,
  },
  from: {
    fontSize: 20,
    color: '#ff9999',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttons: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1f1f2e',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: '#f1c40f',
    borderWidth: 1,
  },
  buttonText: {
    color: '#f1c40f',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
