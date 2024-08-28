import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function page() {
	return (
		<div>
			<h1 className="text-3xl underline">
				Home
				<Button>Click Me</Button>
			</h1>
		</div>
	);
}
