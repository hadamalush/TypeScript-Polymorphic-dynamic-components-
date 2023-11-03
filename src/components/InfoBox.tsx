import { type FC, type ReactNode } from "react";

type HintBoxProps = {
	mode: "hint";
	children: ReactNode;
};

type WarningBoxProps = {
	mode: "hint" | "warning";

	//question mark defines optionality
	// severity?: "low" | "medium" | "high";

	severity: "low" | "medium" | "high";
	children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoBoxProps> = props => {
	const { children, mode } = props;

	if (mode === "hint") {
		return (
			<aside className='infobox infobox-hint'>
				<p>{children}</p>
			</aside>
		);
	}

	const { severity } = props;

	return (
		<aside className={`infobox infobox-warning warning--${severity}`}>
			{mode === "warning" ? <h2>Warning</h2> : null}
			<p>{children}</p>
		</aside>
	);
};

export default InfoBox;
