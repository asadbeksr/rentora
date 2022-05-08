import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function DropDownSvg() {
	return (
		<View style={styles.container}>
			<Svg
				xmlns='http://www.w3.org/2000/svg'
				version='1.1'
				width='256'
				height='256'
				viewBox='0 0 256 256'>
				<G transform='translate(128 128) scale(0.87 0.87)' style=''>
					<G
						style='stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;'
						transform='translate(-144.89999999999998 -144.90000000000003) scale(3.22 3.22)'>
						<Path
							d='M 83.25 74.548 H 6.75 c -1.536 0 -2.864 -0.988 -3.306 -2.457 c -0.441 -1.468 0.122 -3.022 1.401 -3.868 c 0.896 -0.594 1.954 -1.152 3.233 -1.707 c 5.52 -2.514 6.42 -16.025 7.144 -26.882 c 0.182 -2.74 0.355 -5.327 0.59 -7.664 c 1.926 -12.752 8.052 -20.942 18.223 -24.424 C 35.767 3.067 40.169 0 45 0 s 9.233 3.067 10.964 7.546 c 10.171 3.482 16.298 11.671 18.214 24.352 c 0.245 2.409 0.416 4.996 0.6 7.736 c 0.723 10.857 1.624 24.368 7.168 26.893 c 1.255 0.544 2.313 1.102 3.21 1.696 c 1.279 0.846 1.842 2.4 1.4 3.868 C 86.114 73.56 84.785 74.548 83.25 74.548 z M 45 2.934 c -3.818 0 -7.279 2.556 -8.416 6.215 l -0.228 0.733 l -0.732 0.231 c -9.568 3.018 -15.096 10.287 -16.9 22.224 c -0.221 2.216 -0.392 4.779 -0.573 7.493 c -0.816 12.242 -1.74 26.117 -8.88 29.368 c -1.129 0.49 -2.064 0.982 -2.806 1.473 c -0.265 0.175 -0.26 0.409 -0.21 0.575 c 0.051 0.168 0.177 0.368 0.496 0.368 h 76.5 c 0.318 0 0.445 -0.2 0.496 -0.368 c 0.05 -0.166 0.054 -0.4 -0.209 -0.575 h -0.001 c -0.741 -0.491 -1.677 -0.983 -2.782 -1.462 c -7.163 -3.261 -8.088 -17.137 -8.905 -29.379 c -0.181 -2.714 -0.352 -5.277 -0.582 -7.565 c -1.795 -11.864 -7.323 -19.134 -16.891 -22.151 l -0.732 -0.231 L 53.416 9.15 C 52.279 5.49 48.818 2.934 45 2.934 z'
							style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;'
							transform=' matrix(1 0 0 1 0 0) '
							stroke-linecap='round'
						/>
						<Path
							d='M 33.257 78.292 C 33.277 84.75 38.536 90 45 90 c 6.463 0 11.723 -5.25 11.743 -11.708 H 33.257 z M 45 87.066 c -3.816 0 -7.063 -2.443 -8.285 -5.843 h 16.57 C 52.063 84.623 48.816 87.066 45 87.066 z'
							style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;'
							transform=' matrix(1 0 0 1 0 0) '
							stroke-linecap='round'
						/>
					</G>
				</G>
			</Svg>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
