import {
  Button,
  CheckBox,
  Input,
  Layout,
  Text as KittenText,
} from "@ui-kitten/components";
import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const initialState = [
  {
    label: "Reading Atomic Habits",
    isDone: false,
    key: "1",
  },
  {
    label: "Cleaning Bathroom",
    isDone: true,
    key: "2",
  },
  {
    label: "Walking 1 km",
    isDone: false,
    key: "3",
  },
];

const Todo = () => {
  const [todos, setTodos] = React.useState(initialState);
  const [value, setValue] = React.useState("");

  const handleCheckToggle = (_todokey: any) => {
    setTodos((prevState) => {
      return prevState.map((_todo) =>
        _todo.key === _todokey ? { ..._todo, isDone: !_todo.isDone } : _todo
      );
    });
  };

  const handleCreateTodo = (_value: any) => {
    setTodos((prevState) => {
      const finalData = [
        ...prevState,
        { label: _value, isDone: false, key: _value },
      ];
      console.log("final data", finalData);
      return finalData;
    });
    setValue("");
  };

  return (
    <Layout style={{ marginTop: 40, marginHorizontal: 20 }}>
      <Text
        style={{
          color: "black",
          width: "100%",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "800",
        }}
      >
        TODO APP
      </Text>
      <Layout>
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return (
              <Layout
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginVertical: 20,
                }}
              >
                <CheckBox
                  checked={item.isDone}
                  onChange={() => handleCheckToggle(item.key)}
                  style={{ marginRight: 20 }}
                />
                <KittenText appearance={item.isDone ? "hint" : "default"}>
                  {item.label}
                </KittenText>
              </Layout>
            );
          }}
        />
        <Input
          placeholder="Add a new Todo"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
        <Button
          style={{ marginTop: 10 }}
          disabled={!value}
          onPress={() => handleCreateTodo(value)}
        >
          Add todo
        </Button>
      </Layout>
    </Layout>
  );
};
export default Todo;
