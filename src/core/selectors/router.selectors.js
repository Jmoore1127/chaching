import {createSelector} from 'reselect';

export const selectCurrentScene = state => state.scene;

export const selectShouldDisableBackButton = createSelector(
    selectCurrentScene,
    scene => scene && scene.key && scene.key === 'dashboard'
);