import React from "react";

interface BlogImageProps {
	src: string;
	alt: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ src, alt }) => {
	return <img src={src} alt={alt} />;
};

export default BlogImage;
