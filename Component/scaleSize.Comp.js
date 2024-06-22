import { Platform } from "react-native"

function ScaleSize(size) {
    return Platform.OS=='android'?size/1.2:size
}

export default ScaleSize