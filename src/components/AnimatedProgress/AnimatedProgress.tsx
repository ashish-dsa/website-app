import React, {ReactElement, useEffect, useState} from "react";
import {View} from "react-native";
import {ProgressBar} from "react-native-paper";

interface IAnimatedProgressProps {
  color: string;
  delay: number;
  percentage: number;
}
const AnimatedProgress: React.FC<IAnimatedProgressProps> = ({color, delay, percentage}): ReactElement => {
  const [progress, setProgress] = useState(0);

  const updateProgress = async (currentProgress: number): Promise<void> => {
    if (currentProgress > percentage) return;
    setProgress(currentProgress / 100);
    await new Promise(resolve => setTimeout(resolve, delay));
    await updateProgress(currentProgress + 1);
  };

  useEffect(() => {
    updateProgress(0);
  }, []);

  return (
    <View>
      <ProgressBar progress={progress} color={color} />
    </View>
  );
};

export default AnimatedProgress;
