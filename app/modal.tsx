import { Text } from '../components/Themed';
import {useTheme} from "@rneui/themed";

export default function ModalScreen() {
  const { theme } = useTheme();

  return <Text>{theme.foo}</Text>
}
