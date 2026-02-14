import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, type = 'website', name = 'Abdul Basith', image, url }) => {
    const siteTitle = 'Abdul Basith | Full-Stack Developer';
    const siteUrl = 'https://abdul-basith-fullstack-webdev.vercel.app';
    const defaultImage = `${siteUrl}/logo.svg`; // Fallback image (or a specific OG image if you have one)

    const metaTitle = title ? `${title} | ${name}` : siteTitle;
    const metaDescription = description || "Portfolio of Abdul Basith, a Full-Stack Developer specializing in secure, scalable backend architecture, React, Node.js, and Cloud technologies.";
    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;
    const metaUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : siteUrl;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
