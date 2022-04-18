import { Typography } from "@components/Typography";
import React, { ReactElement, useState } from "react";
import { useWindowDimensions, StyleSheet, View } from "react-native";
import SnapCarousel, { Pagination } from "react-native-snap-carousel";
interface CarouselProps {
  data: {
    icon: ReactElement;
    title: string;
    subtitle: string;
  }[];
}

export const Carousel = ({ data }: CarouselProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View>
      <SnapCarousel
        data={data}
        renderItem={({ item: { icon, title, subtitle } }) => (
          <View style={styles.carouselItem}>
            <View style={styles.iconWrapper}>{icon}</View>
            <Typography style={styles.title}>{title}</Typography>
            <Typography style={styles.subtitle}>{subtitle}</Typography>
          </View>
        )}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        autoplay
        loop
        autoplayInterval={6000}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.paginationDotsContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationDotInactive}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};

const CAROUSEL_PADDING_HORIZONTAL = 20;
const CAROUSEL_ITEM_HEIGHT = 240;
const CAROUSEL_ITEM_ICON_HEIGHT = 64;
const CAROUSEL_PAGINATION_DOTS_TOP = 58;
const CAROUSEL_PAGINATION_DOTS_BOTTOM = 24;
const CAROUSEL_PAGINATION_DOT_SIZE = 8;

const CAROUSEL_ACTIVE_COLOR = "#262626";
const CAROUSEL_INACTIVE_COLOR = "#E0E0E0";

const styles = StyleSheet.create({
  carouselItem: {
    paddingHorizontal: CAROUSEL_PADDING_HORIZONTAL,
    minHeight: CAROUSEL_ITEM_HEIGHT,
    justifyContent: "flex-end",
  },
  iconWrapper: {
    height: CAROUSEL_ITEM_ICON_HEIGHT,
    justifyContent: "center",
    marginBottom:
      CAROUSEL_PAGINATION_DOTS_TOP +
      CAROUSEL_PAGINATION_DOTS_BOTTOM +
      CAROUSEL_PAGINATION_DOT_SIZE,
  },
  title: {
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
  paginationContainer: {
    position: "absolute",
    top: CAROUSEL_ITEM_ICON_HEIGHT + CAROUSEL_PAGINATION_DOTS_TOP,
    left: CAROUSEL_PADDING_HORIZONTAL,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  paginationDotsContainer: {
    marginRight: 8,
    marginLeft: 0,
  },
  paginationDot: {
    width: CAROUSEL_PAGINATION_DOT_SIZE,
    height: CAROUSEL_PAGINATION_DOT_SIZE,
    borderRadius: CAROUSEL_PAGINATION_DOT_SIZE / 2,
    backgroundColor: CAROUSEL_ACTIVE_COLOR,
  },
  paginationDotInactive: {
    backgroundColor: CAROUSEL_INACTIVE_COLOR,
  },
});
