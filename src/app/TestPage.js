import React from "react";
import "@/app/TestPage.css";
import Banner from "@/components/Banner/Banner";

function TestPage() {
	return (
		<div className="testPage">
			<Banner
				title={"Hello There"}
				text={"Super exciting information"}
				button={{
					text: "Click link",
					link: "https://www.youtube.com/",
				}}
			></Banner>
		</div>
	);
}

export default TestPage;
