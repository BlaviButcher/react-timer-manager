import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Layout,
  Text,
} from "@ui-kitten/components";
import React, { useEffect, useRef, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Stopwatch as Timer } from "./src/components/Stopwatch";

function App() {
  const isInitialMount = useRef(true);
  const defaultTimer: any = { name: "Your First Timer", time: "0:00:00" };

  // STATE
  const [timers, setTimers] = useState<any[]>([defaultTimer]);
  const [currentTimer, setCurrentTimer] = useState<any>(defaultTimer);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: any;

    // onMount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setTimers([defaultTimer]);
      // onUpdate
    }

    if (running) {
      console.log("here");
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <Layout style={styles.container} level="1">
      <StatusBar />
      {/* Current time */}
      <Timer name={currentTimer.name} time={time}></Timer>
      {/* Start stop button wrap */}
      <Layout style={styles.buttonWrap} level="2">
        <Button
          onPress={() => {
            setRunning(!running);
          }}
          style={styles.button}
        >
          {running ? <Text>Stop</Text> : <Text>Start</Text>}
        </Button>
        <Button style={styles.button}>
          <Text>Reset</Text>
        </Button>
      </Layout>
      {/* Bottom timer and reset */}
      <Layout style={[styles.centerColumn]}>
        <Text style={[styles.time]}>Total Time</Text>
        <Text style={[styles.time]}>6:03:56</Text>
        <Button style={styles.button}>Reset Total</Button>
      </Layout>
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
    justifyContent: "center",
    flex: 1,
  },

  currentTimeDiv: {
    flex: 1,
  },

  button: {
    height: "20%",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
  },

  buttonWrap: {
    display: "flex",
    height: "50%",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1.5,
  },

  totalTime: {
    flex: 1,
  },

  centerColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  time: {
    fontSize: 32,
  },
});
