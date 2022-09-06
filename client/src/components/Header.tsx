import React from "react";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<h1 className="font-weight-light display-1 text-center">
			Restaurant Finder
		</h1>
	);
};

export default Header;
