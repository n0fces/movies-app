/** @type {import('next').NextConfig} */
const path = require('path');

const NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.mds.yandex.net',
				port: '',
				pathname: '/get-kinopoisk-image/**',
			},
			{
				protocol: 'https',
				hostname: 'avatars.mds.yandex.net',
				port: '',
				pathname: '/get-bunker/**',
			},
			{
				protocol: 'https',
				hostname: 'st.kp.yandex.net',
				port: '',
				pathname: '/images/film_big/**',
			},
			{
				protocol: 'https',
				hostname: 'st.kp.yandex.net',
				port: '',
				pathname: '/images/**',
			},
			{
				protocol: 'https',
				hostname: 'avatars.mds.yandex.net',
				port: '',
				pathname: '/get-ott/**',
			},
			{
				protocol: 'https',
				hostname: 'yastatic.net',
				port: '',
				pathname: '/s3/**',
			},
			{
				protocol: 'https',
				hostname: 'image.openmoviedb.com',
				port: '',
				pathname: '/kinopoisk-images/**',
			},
			{
				protocol: 'https',
				hostname: 'image.openmoviedb.com',
				port: '',
				pathname: '/kinopoisk-st-images/**',
			},
			{
				protocol: 'https',
				hostname: 'i.ytimg.com',
				port: '',
				pathname: '/vi_webp/**',
			},
			{
				protocol: 'https',
				hostname: 'i.ytimg.com',
				port: '',
				pathname: '/vi/**',
			},
		],
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = NextConfig;
