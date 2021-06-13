import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {Avatar, Caption, Card, Paragraph, Subheading, Title} from "react-native-paper";

interface ITestimonialCardProps {
  testimonial: {
    name: string;
    info: string;
    relation: string;
    recommendation: string;
    image: string;
  };
}
const TestimonialCard: React.FC<ITestimonialCardProps> = ({testimonial}): ReactElement => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.image}>
          <Avatar.Image style={styles.avatar} source={{uri: testimonial.image}} />
        </View>
        <Title style={styles.name}>{testimonial.name}</Title>
        <Subheading style={styles.info}>{testimonial.info}</Subheading>
        <Caption style={styles.relation}>{testimonial.relation}</Caption>
        <Paragraph style={styles.recommendation}>{testimonial.recommendation}</Paragraph>
      </Card>
    </View>
  );
};

export default TestimonialCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
    height: "100%",
  },
  card: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    alignItems: "center",
  },
  name: {
    alignSelf: "center",
  },
  info: {
    alignSelf: "center",
  },
  avatar: {
    marginTop: "5%",
  },
  relation: {
    alignSelf: "center",
  },
  recommendation: {
    alignSelf: "center",
    paddingHorizontal: "10%",
    paddingVertical: "2%",
  },
});
