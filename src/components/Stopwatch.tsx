import { Layout, Text } from "@ui-kitten/components";
import { styles } from "../css/generic";

type Props = {
  name: string;
  time: number;
};

function padNumberToString(num: number, padding: number) {
  return num.toString().padStart(padding, "0");
}

export const Stopwatch: React.FC<Props> = ({ name, time }) => {
  let seconds = (time / 10) % 60;
  let minutes = Math.floor((time / (10 * 60)) % 60);
  console.log(minutes);
  let hours = Math.floor((time / (10 * 60 * 60)) % 24);
  return (
    <Layout style={[styles.currentTimeDiv, styles.centerColumn]}>
      <Text style={[{ fontSize: 26 }]}>{name}</Text>
      <Text style={[styles.time]}>
        <Text>{padNumberToString(hours, 2)}:</Text>
        <Text>{padNumberToString(minutes, 2)}:</Text>
        <Text>{padNumberToString(seconds, 2)}</Text>
      </Text>
    </Layout>
  );
};
