import AnimatedProgress from "components/AnimatedProgress";
import React, {ReactElement} from "react";
import {StyleSheet} from "react-native";
import {Card, useTheme} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface ISkillCardProps {
  name: string;
  percentage: number;
  imageColor: string;
}
const SkillCard: React.FC<ISkillCardProps> = ({name, percentage, imageColor}): ReactElement => {
  const theme = useTheme();
  const DELAY = 50;
  const IMAGE_SIZE = 150;
  return (
    <Card style={styles.card} elevation={0}>
      <Icon name={name} size={IMAGE_SIZE} color={imageColor} />
      <AnimatedProgress percentage={percentage} color={theme.colors.onSurface} delay={DELAY} />
    </Card>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  card: {
    width: "10%",
    backgroundColor: "transparent",
    alignItems: "center",
  },
});
