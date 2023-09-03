import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const StarRating = ({ maxStars, rating }) => {
  const renderStar = (index) => {
    const filled = index <= rating;
    const starIcon = filled ? (
      <AntDesign name="star" size={12} color="#dc6920" />
    ) : (
      <AntDesign name="staro" size={12} color="#dc6920" />
    );

    return starIcon;
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {Array.from({ length: maxStars }, (_, index) => renderStar(index + 1))}
    </View>
  );  
};

export default StarRating;
