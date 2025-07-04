import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
} from 'react-native';

export default function GreetingScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <Text style={styles.emojiTop}>🌙🕌🐐🎉</Text>

        {/* Arabic */}
        <Text style={styles.arabic}>عيد الأضحى المبارك</Text>

        {/* Urdu */}
        <Text style={styles.urdu}>عید الاضحیٰ کی دلی مبارکباد!</Text>

        {/* English Greetings */}
        <Text style={styles.line}>Eid Mubarak to all my dear ones 💫</Text>
        <Text style={styles.line}>May your sacrifices be rewarded 🐐</Text>
        <Text style={styles.line}>Wishing you peace & prosperity ✨</Text>
        <Text style={styles.line}>Celebrate with love & gratitude 💖</Text>

        {/* Signature */}
        <Text style={styles.from}>— From Kinza Ali</Text>

        {/* Islamic Date */}
        <Text style={styles.date}>10 Dhul Hijjah 1446 AH</Text>

        <Text style={styles.emojiBottom}>🌙✨💖🕌</Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1e1e2e',
    borderRadius: 20,
    padding: 30,
    borderColor: '#fca311',
    borderWidth: 2,
    alignItems: 'center',
    shadowColor: '#fca311',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  emojiTop: {
    fontSize: 30,
    marginBottom: 10,
  },
  arabic: {
    fontSize: 26,
    color: '#fca311',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  urdu: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'serif',
  },
  line: {
    fontSize: 16,
    color: '#f1f1f1',
    textAlign: 'center',
    marginBottom: 8,
  },
  from: {
    fontSize: 16,
    color: '#c0c0c0',
    marginTop: 20,
    fontStyle: 'italic',
  },
  date: {
    fontSize: 14,
    color: '#a1a1aa',
    marginTop: 6,
  },
  emojiBottom: {
    fontSize: 26,
    marginTop: 15,
  },
});
