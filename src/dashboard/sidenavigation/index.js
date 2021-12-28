import SidenavItems from './items';
import SidenavHeader from './header';
import css from './index.module.css';
import { useToggle } from '../provider/context';

const style = {
  mobilePosition: {
    left: 'left-0',
    right: 'right-0',
  },
  close: `hidden`,
  container: `pb-32 lg:pb-6`,
  open: `w-8/12 absolute z-40 sm:w-5/12`,
  default: `bg-[#0e141b] h-screen overflow-y-auto top-0 lg:block lg:relative lg:w-64 lg:z-auto`,
};

export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
       ${open ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <SidenavHeader />
        <SidenavItems />
      </div>
    </aside>
  );
}
