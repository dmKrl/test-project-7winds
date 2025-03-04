declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
    import React from 'react';

    export const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
}
