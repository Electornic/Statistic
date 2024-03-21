declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    NEXT_PUBLIC_ENV_TYPE: 'dev' | 'stage' | 'prod';
  }
}

interface Window {
  ethereum: any;
}