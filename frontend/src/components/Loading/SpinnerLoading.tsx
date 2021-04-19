import React, { CSSProperties } from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';

const SpinnerLoading = ({ style, size, color='primary' }: { style?: CSSProperties, size?: CircularProgressProps['size'], color?: CircularProgressProps['color']}) => {
  return (
    <div
      style={Object.assign(
        {
          height: '200px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        style
      )}
    >
      <CircularProgress size={size} color={color} />
    </div>
  );
};

export default SpinnerLoading;
