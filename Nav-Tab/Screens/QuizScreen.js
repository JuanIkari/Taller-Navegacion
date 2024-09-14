import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const questions = [
  {
    id: "1",
    question: "¿Cuál es el color del cielo?",
    options: ["Rojo", "Verde", "Azul", "Amarillo"],
  },
  {
    id: "2",
    question: "¿Qué es React Native?",
    options: [
      "Un marco de trabajo para aplicaciones web",
      "Una biblioteca para construir interfaces de usuario",
      "Un sistema de gestión de bases de datos",
      "Una herramienta de diseño gráfico",
    ],
  },
  {
    id: "3",
    question: "¿Cuál es la capital de Francia?",
    options: ["Londres", "Berlín", "Madrid", "París"],
  },
];

export default function QuizScreen() {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const AnswerSelect = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  return (
    <View style={styles.container}>
      {questions.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.question}>{question.question}</Text>
          {question.options.map((option, index) => (
            <Button
              key={index}
              title={option}
              onPress={() => AnswerSelect(question.id, option)}
              color={selectedAnswers[question.id] === option ? "blue" : "gray"}
            />
          ))}
        </View>
      ))}
      <Button title="Enviar Respuestas" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
