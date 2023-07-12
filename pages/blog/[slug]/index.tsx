import React from "react";
import { useRouter } from "next/router";
import SingleBlog from "@/src/Views/Blog/components/SingleBlog";

const index = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<>
			<SingleBlog blogSlug={Array.isArray(slug) ? undefined : slug} />
		</>
	);
};

export default index;
