import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Button,
} from "react-native";
import React, { useState } from "react";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const AddNew = () => {
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [input,setInput]=useState("")

  const handleTimeChange = (event: DateTimePickerEvent, time?: Date) => {
    if (Platform.OS === "android") setShowTime(false);
    if (time) setSelectedTime(time);
  };

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    if (Platform.OS === "android") setShowDate(false);
    if (date) setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Reminder</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Medicine Name</Text>
        <TextInput placeholder="Paracetamol" style={styles.input} />

        <Text style={styles.label}>Dosage</Text>
        <TextInput placeholder="1 tablet, 10ml" style={styles.input} />
        <View style={styles.row}>
          <Text style={styles.label}>Time</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowTime(true)}
          >
            <Text style={styles.buttonText}>
              {selectedTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date (optional)</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowDate(true)}
          >
            <Text style={styles.buttonText}>
              {selectedDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput style={styles.textarea}
      
       
 
        placeholder="Type your message here..."
        multiline={true} // This is the key prop for multiline input
        numberOfLines={4} // Optional: Sets an initial number of visible lines
        textAlignVertical="top" // Ensures text starts from the top
      />
            </View>
        <TouchableOpacity style={styles.btn} >
          <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
        {showDate && (
          <RNDateTimePicker
            value={selectedDate}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleDateChange}
          />
        )}

        {showTime && (
          <RNDateTimePicker
            value={selectedTime}
            mode="time"
            is24Hour={false}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleTimeChange}
          />
        )}
      </View>
    </View>
  );
};

export default AddNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 35,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    gap: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 8,
    padding: 12,
    borderColor: "#ccc",
  },
  row: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: "#333",
  },
   textarea: {
    height: 100, // Set a desired height for the textarea
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  btn: {
  backgroundColor: "#4CAF50",
  paddingVertical: 15,
  borderRadius: 8,
  alignItems: "center",
  marginTop: 20,
},
buttonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
},
});
