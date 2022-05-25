import * as eva from "@eva-design/eva";
import {
  ApplicationProvider, Button, Layout
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

function App() {
  return (
    <Layout style={styles.container}>
      <Button>test</Button>
    </Layout>
  );
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center"
  }
})
