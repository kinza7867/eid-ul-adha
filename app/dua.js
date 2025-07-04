import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function DuaScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/free-photo/muslim-man-praying_23-2149440396.jpg',
      }}
      style={styles.background}
      blurRadius={3}
    >
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <Text style={styles.emojiTop}>🕋🙏✨</Text>

        <Text style={styles.heading}>دعاء عيد الأضحى المبارك</Text>

        <Text style={styles.arabicDua}>
          اَللّهُمَّ تَقَبَّلْ مِنَّا وَمِنْكُمْ وَأَعَادَهُ اللّهُ عَلَيْنَا وَعَلَيْكُمْ
          بِالخَيْرِ وَالْبَرَكَةِ
        </Text>

        <Text style={styles.meaning}>
          O Allah, accept (this worship) from us and from you. May Allah return it upon us and you with goodness and blessings.
        </Text>

        <Text style={styles.from}>— From Kinza Ali with prayers 🌙</Text>

        <Image
  source={{
    uri: 'https://i.pinimg.com/736x/66/05/72/660572c89dc10207ae18ea762e8ab345.jpg',
  }}
  style={styles.sideImage}
  resizeMode="contain" 
/>
        <Text style={styles.emojiBottom}>🕌✨🤲🌙</Text>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(18, 18, 18, 0.85)',
    margin: 20,
    padding: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fca311',
    alignItems: 'center',
    shadowColor: '#fca311',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  emojiTop: {
    fontSize: 28,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    color: '#fca311',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  arabicDua: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'serif',
    marginVertical: 10,
    lineHeight: 30,
  },
  meaning: {
    fontSize: 15,
    color: '#e2e2e2',
    textAlign: 'center',
    marginVertical: 8,
    paddingHorizontal: 10,
    fontStyle: 'italic',
  },
  from: {
    fontSize: 14,
    color: '#c0c0c0',
    marginTop: 10,
    fontStyle: 'italic',
  },
  sideImage: {
    width: width * 0.6,
    height: 180,
    borderRadius: 20,
    marginTop: 20,
  },
  emojiBottom: {
    fontSize: 20,
    marginTop: 15,
  },
});
