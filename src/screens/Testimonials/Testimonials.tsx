import TestimonialCard from "components/TestimonialCard";
import React, {ReactElement} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import Swiper from "react-native-web-swiper";
import {testimonialCollection} from "./testimonialCollection";

interface ITestimonialsProps {}
const Testimonials: React.FC<ITestimonialsProps> = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper
          loop
          timeout={2.5}
          controlsProps={{
            dotActiveStyle: {backgroundColor: "red"},
            dotsTouchable: true,
            prevPos: false,
            nextPos: false,
          }}>
          {testimonialCollection.map((item, index) => (
            <TestimonialCard testimonial={item} key={index} />
          ))}
        </Swiper>
      </View>
    </View>
  );
};

export default Testimonials;
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
  swiper: {
    height: "60%",
  },
});
