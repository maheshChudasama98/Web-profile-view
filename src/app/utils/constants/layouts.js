import VerticalDefault from "../../layouts/vertical-default/VerticalDefault";
import SoloPage from "../../layouts/solo-page/SoloPage";

const LAYOUT_NAMES = {
    VERTICAL_DEFAULT: "vertical-default",
    SOLO_PAGE: "solo-page",
};

const LAYOUTS = [
    {
        name: LAYOUT_NAMES.VERTICAL_DEFAULT,
        label: "Vertical Default",
        component: VerticalDefault,
    },
    {
        name: LAYOUT_NAMES.SOLO_PAGE,
        label: "Solo Page",
        component: SoloPage
    }
];

export {LAYOUTS, LAYOUT_NAMES};