import React from 'react';
import ContentLoader from 'react-content-loader';

const Loading = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="114" y="166" rx="0" ry="0" width="0" height="1" />
    <rect x="114" y="164" rx="0" ry="0" width="0" height="2" />
    <circle cx="139" cy="128" r="124" />
    <rect x="0" y="277" rx="14" ry="14" width="280" height="28" />
    <rect x="0" y="320" rx="10" ry="10" width="280" height="90" />
    <rect x="2" y="447" rx="12" ry="12" width="93" height="27" />
    <rect x="112" y="424" rx="24" ry="24" width="162" height="50" />
  </ContentLoader>
);

export default Loading;
