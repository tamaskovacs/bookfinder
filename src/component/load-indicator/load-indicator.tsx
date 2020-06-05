import React from 'react';
import './load-indicator.css';
import '../overlay/overlay';
import Overlay from '../overlay/overlay';
import LoadIndicatorInterface from './load-indicator-interface';

export default function LoadIndicator(props:LoadIndicatorInterface) {
  return (
    <>
        {props.isLoading &&
            <Overlay child={
                (
                    <div className="loader-container">
                        <div className="loader">Loading...</div>
                    </div>

                )
            }/>
        }
    </>
  );
}
