import React from "react";
import './overlay.css';
import OverlayInterface from './overlay-interface';

export default function Overlay(props:OverlayInterface) {

  return (
    <div className="overlay">
        {props.child}
    </div>
  );
}
