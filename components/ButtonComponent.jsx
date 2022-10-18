import {Button} from "react-native";

export default function ButtonComponent({isPressed, onPress}) {
    if (isPressed) {
        return (
            <Button
                onPress={onPress}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        )
    }
    else {
        return (
            <Button
                onPress={onPress}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        )
    }
}