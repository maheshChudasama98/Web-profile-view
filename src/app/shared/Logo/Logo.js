import React from 'react';
import Div from "@jumbo/shared/Div";
import Link from "@mui/material/Link";
import { ASSET_IMAGES } from "../../utils/constants/paths";

const Logo = ({ mini, mode, sx }) => {
    return (
        <Div sx={{ display: "inline-flex", ...sx }}>
            <Link href={'/dashboards/misc'}>
                {
                    !mini ?

                        <img
                            style={{ width: "90%", height: "auto" }}
                            src={mode === "light" ? `/images/myWebLog.png` : `/images/myWebLog.png`}
                            alt="Jumbo React" />
                        // <img src={'/images/callouts/camera.jpeg'} alt="Jumbo React" />
                        :
                        <img
                            style={{ width: "90%", height: "auto" }}
                            src={mode === "light" ? `/images/myWebLog.png` : `/images/myWebLog.png`}
                            alt="Jumbo React" />
                    // <img src={mode === "light" ? `${ASSET_IMAGES}/myWebLog.png` : `${ASSET_IMAGES}/myWebLog.png`} alt="Jumbo React" />
                }
            </Link>
        </Div>
    );
};

Logo.defaultProps = {
    mode: "light"
};

export default Logo;
