import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BellIcon({ size }: any) {
  return (
    <View>
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeLinejoin="round"
    strokeMiterlimit={2}
  >
    <Path
      d="M16.134 10C16.715 15.375 19 17 19 17H1C1 17 4 14.867 4 7.4C4 5.703 4.632 4.075 5.757 2.875C6.883 1.675 8.41 1 10 1C10.337 1 10.672 1.03 11 1.09M11.73 20C11.5544 20.3033 11.3021 20.5552 10.9985 20.7302C10.6948 20.9053 10.3505 20.9974 10 20.9974C9.6495 20.9974 9.30517 20.9053 9.00152 20.7302C8.69788 20.5552 8.44561 20.3033 8.27 20M17 7C17.7956 7 18.5587 6.68393 19.1213 6.12132C19.6839 5.55871 20 4.79565 20 4C20 3.20435 19.6839 2.44129 19.1213 1.87868C18.5587 1.31607 17.7956 1 17 1C16.2044 1 15.4413 1.31607 14.8787 1.87868C14.3161 2.44129 14 3.20435 14 4C14 4.79565 14.3161 5.55871 14.8787 6.12132C15.4413 6.68393 16.2044 7 17 7Z"
      stroke="#545454" 
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
</Svg>




    </View>
  );
}
