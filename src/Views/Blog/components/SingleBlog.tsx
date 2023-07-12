import NavMenu from "@/src/components/NavMenu/NavMenu";
import React from "react";

interface Props {
	blogSlug: string | undefined;
}

interface Post {
	title: string;
	slug: string;
	content: string;
}

const SingleBlog = ({ blogSlug }: Props) => {
	return (
		<div>
			<NavMenu />
			<h1>Single Blog {blogSlug}</h1>
		</div>
	);
};

export default SingleBlog;
