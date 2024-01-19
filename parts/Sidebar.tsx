import Link from 'next/link';

import '@/style/sidebar.css';

export function Sidebar() {
  return (
    <div className={'sidebar__contents--container'}>
      <Link href={'/'} className={'sidebar__item--block-text'}>
        Home
      </Link>
      <Link href={'/blockchain'} className={'sidebar__item--block-text'}>
        BlockChain
      </Link>
      <div className={'sidebar__item--block-text'}>
        test
      </div>
      <div className={'sidebar__item--block-text'}>
        test
      </div>
      <div className={'sidebar__item--block-text'}>
        test
      </div>
    </div>
  )
}