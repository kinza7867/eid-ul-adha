import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function QurbaniScreen() {
  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/free-photo/beautiful-islamic-background-mosque-sunset_1048-14311.jpg',
      }}
      style={styles.background}
      blurRadius={2}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🥩 Qurbani Information</Text>

        {/* 🔄 Replaced Image 1 */}
        <Image
          source={{
            uri: 'https://www.muslimsholytravel.co.uk/theme/blog/title-images.webp',
          }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>📜 What is Qurbani?</Text>
        <Text style={styles.text}>
          Qurbani is the ritual animal sacrifice performed during Eid-ul-Adha
          to commemorate Prophet Ibrahim's willingness to sacrifice his son for
          Allah's command. Muslims around the world sacrifice a goat, sheep,
          cow, or camel in memory of this event.
        </Text>

        <Text style={styles.sectionTitle}>✅ Basic Rules of Qurbani</Text>
        <Text style={styles.text}>
          • Qurbani is wajib (obligatory) for every adult Muslim who can afford it.{'\n'}
          • The animal must be healthy and meet age requirements (e.g. goat ≥ 1 year).{'\n'}
          • It should be done after the Eid prayer (not before).{'\n'}
          • The meat must be divided into 3 parts: one for family, one for relatives/friends, and one for the poor.
        </Text>

        {/* 🔄 Replaced Image 2 */}
        <Image
          source={{
            uri: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/b4/8d/t-re-414-ks1-eid-aladha-differentiated-fact-file-_ver_3.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>🕓 Qurbani Time</Text>
        <Text style={styles.text}>
          Qurbani can be performed from the 10th to the 12th of Dhul-Hijjah,
          after the Eid prayer. It's recommended to do it as early as possible.
        </Text>

        <Text style={styles.footer}>— Provided by Kinza Ali</Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fbc531',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 15,
    borderWidth: 2,
    borderColor: '#fbc531',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
    marginBottom: 10,
  },
  footer: {
    textAlign: 'center',
    marginTop: 30,
    fontStyle: 'italic',
    color: '#ff9999',
    fontSize: 16,
  },
});
