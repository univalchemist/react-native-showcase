import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text } from "react-native";
import SnapCarousel, { Pagination } from "react-native-snap-carousel";
import { Box } from "@mobily/stacks";

interface CarouselProps {
  data: {
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
  }[];
}
export const Carousel = ({ data }: CarouselProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <SnapCarousel
        data={data}
        renderItem={({ item: { image, title, subtitle } }) => {
          return (
            <Box padding={5}>
              <Image style={styles.image} source={image} />
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </Box>
          );
        }}
        itemHeight={300}
        sliderWidth={390}
        itemWidth={390}
        autoplay
        loop
        autoplayInterval={6000}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{ justifyContent: "flex-start" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 32,
    paddingBottom: 8,
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
  image: {
    height: 100,
    aspectRatio: 1,
  },
});
