import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { KeyboardArrowDownRounded } from "@mui/icons-material";

export default function MenuPopupState() {
	return (
		<PopupState variant="popover" popupId="demo-popup-menu">
			{(popupState) => (
				<React.Fragment>
					<Button variant="contained" {...bindTrigger(popupState)}>
						<span>
							<span>Hair Wash</span>
							<span>
								<span>12 typess</span>
								<span>
									<KeyboardArrowDownRounded />
								</span>
							</span>
						</span>
					</Button>
					<Menu {...bindMenu(popupState)}>
						<MenuItem onClick={popupState.close}>Profile</MenuItem>
						<MenuItem onClick={popupState.close}>My account</MenuItem>
						<MenuItem onClick={popupState.close}>Logout</MenuItem>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
}
