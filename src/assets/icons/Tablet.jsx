import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export const TabletIcon = (props) => {

	
const styles = {
	stroke: 'none', strokeWidth: '1', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: '1'
  };

    return (
        <SvgIcon {...props}>
       	<path d="M 73.546 90 H 16.453 c -5.418 0 -9.826 -4.408 -9.826 -9.826 V 9.827 C 6.627 4.409 11.035 0 16.453 0 h 57.093 c 5.419 0 9.827 4.409 9.827 9.827 v 70.347 C 83.373 85.592 78.965 90 73.546 90 z M 16.453 2.967 c -3.782 0 -6.859 3.077 -6.859 6.86 v 70.347 c 0 3.782 3.077 6.859 6.859 6.859 h 57.093 c 3.783 0 6.86 -3.077 6.86 -6.859 V 9.827 c 0 -3.783 -3.077 -6.86 -6.86 -6.86 H 16.453 z" style={styles} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
		<circle cx="45.003" cy="78.163" r="2.473" style={styles} transform="  matrix(1 0 0 1 0 0) "/>
		<path d="M 45 81.618 c -1.907 0 -3.458 -1.551 -3.458 -3.458 c 0 -1.907 1.551 -3.458 3.458 -3.458 c 1.907 0 3.458 1.551 3.458 3.458 C 48.457 80.066 46.906 81.618 45 81.618 z M 45 76.673 c -0.82 0 -1.487 0.667 -1.487 1.487 c 0 0.82 0.667 1.487 1.487 1.487 c 0.82 0 1.487 -0.667 1.487 -1.487 C 46.487 77.34 45.82 76.673 45 76.673 z" style={styles} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
		<path d="M 57.271 12.042 H 32.729 c -0.82 0 -1.484 -0.664 -1.484 -1.484 s 0.664 -1.484 1.484 -1.484 h 24.542 c 0.819 0 1.484 0.664 1.484 1.484 S 58.09 12.042 57.271 12.042 z" style={styles} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
	</SvgIcon>
      );
    }
