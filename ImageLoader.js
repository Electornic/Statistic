export default function ImageLoader(props) {
  const { src, width, quality } = props;
  console.log('props', props);
  console.log('env', process.env);

  // return `https://mvlfi-front-staging.s3.amazonaws.com/public${src}?w=${width}&q=${quality || 75}`;
  // return `https://mvlfi-front-staging.s3.amazonaws.com/public${src}`;
  // return 'https://demonion.s3.ap-northeast-2.amazonaws.com/img-demoverse.jpg';
  return 'https://d3hnpwnfp25ra8.cloudfront.net/img-advantage-depin-step1.png?format=webp';
}

// https://mvlfi-front-staging.s3.amazonaws.com/public/img/clutch.png