import * as SettingsActionTypes from '../actiontypes/settings';

export const changeColor = color => {
    return {
        type: SettingsActionTypes.CHANGE_COLOR,
        color
    }
}

export const changeSize = size => {
    return {
        type: SettingsActionTypes.CHANGE_SIZE,
        size
    }
}

export const changeGravity = gravity => {
    return {
        type: SettingsActionTypes.CHANGE_GRAVITY,
        gravity
    }
}

export const changeBounciness = bounciness => {
    return {
        type: SettingsActionTypes.CHANGE_BOUNCINESS,
        bounciness
    }
}

export const changeFriction = friction => {
    return {
        type: SettingsActionTypes.CHANGE_FRICTION,
        friction
    }
}