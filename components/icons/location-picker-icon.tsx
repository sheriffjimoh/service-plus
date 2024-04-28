import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BookmarkIcon({ size }: any) {
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
          d="M21.5 12H19.389M19.389 12C19.389 13.9598 18.611 15.8389 17.2252 17.2247C15.8394 18.6105 13.9598 19.389 12 19.389M19.389 12C19.389 10.0402 18.611 8.16013 17.2252 6.77433C15.8394 5.38853 13.9598 4.611 12 4.611M12 2.5V4.611M12 4.611C10.0403 4.611 8.16089 5.38848 6.77519 6.77419C5.38948 8.15989 4.611 10.0393 4.611 11.999C4.611 13.9587 5.38948 15.8381 6.77519 17.2238C8.16089 18.6095 10.0403 19.389 12 19.389M2.5 12H4.611M12 21.5V19.389"
          stroke="#545454"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          fill="none"
        />
        <Path
          d="M12 16.222C13.1197 16.222 14.1936 15.7772 14.9854 14.9854C15.7772 14.1936 16.222 13.1198 16.222 12C16.222 10.8803 15.7772 9.80639 14.9854 9.01461C14.1936 8.22283 13.1197 7.77802 12 7.77802C10.8803 7.77802 9.80637 8.22283 9.0146 9.01461C8.22282 9.80639 7.778 10.8803 7.778 12C7.778 13.1198 8.22282 14.1936 9.0146 14.9854C9.80637 15.7772 10.8803 16.222 12 16.222Z"
          stroke="#545454"
          fill="none"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
}
